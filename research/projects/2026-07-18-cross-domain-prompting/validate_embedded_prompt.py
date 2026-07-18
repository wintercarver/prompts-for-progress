#!/usr/bin/env python3
"""Execute and cross-check every Python block embedded in the cap-set prompt."""

from __future__ import annotations

import os
from pathlib import Path
import re
import subprocess
import sys
import tempfile


HERE = Path(__file__).resolve().parent
PROMPT = HERE / "cap-set-513-research-prompt.md"
EXPECTED_DIGEST = "fa12b2dc4918c38248b3039df101b5bb66ee85fd56c313389015c64979d7fb88"
BLOCK_MARKERS = {
    "Self-contained 512-cap": "seed_512.py",
    "Current deterministic incumbent": "candidate.py",
    "Pre-search calibration": "calibrate_checkers.py",
    "Independent strict verifier": "independent_verify.py",
    "Precommitted final audit": "audit_candidate.py",
}


def checked_run(directory: Path, *args: str) -> str:
    environment = os.environ.copy()
    environment["PYTHONPATH"] = str(directory)
    result = subprocess.run(
        [sys.executable, *args],
        cwd=directory,
        env=environment,
        check=True,
        capture_output=True,
        text=True,
    )
    return result.stdout.strip()


def main() -> None:
    blocks = re.findall(r"```python\n(.*?)```", PROMPT.read_text(encoding="utf-8"), re.DOTALL)
    if len(blocks) != len(BLOCK_MARKERS):
        raise AssertionError(f"expected {len(BLOCK_MARKERS)} Python blocks, found {len(blocks)}")

    mapped: dict[str, str] = {}
    for block in blocks:
        matches = [filename for marker, filename in BLOCK_MARKERS.items() if marker in block]
        if len(matches) != 1:
            raise AssertionError(f"could not uniquely identify embedded block: {matches}")
        mapped[matches[0]] = block
    if set(mapped) != set(BLOCK_MARKERS.values()):
        raise AssertionError(f"embedded block map is incomplete: {sorted(mapped)}")

    with tempfile.TemporaryDirectory(prefix="pfp-cap-prompt-") as temporary:
        directory = Path(temporary)
        for filename, source in mapped.items():
            (directory / filename).write_text(source, encoding="utf-8")

        seed_output = checked_run(directory, "seed_512.py")
        candidate_output = checked_run(directory, "candidate.py")
        calibration_output = checked_run(directory, "calibrate_checkers.py")

        cross_check = f"""
from audit_candidate import TRANSFORMS
from independent_verify import certificate_digest, verify_points
from seed_512 import build_512_cap, digest, verify

seed = verify(build_512_cap(), minimum_size=512)
independent = verify_points(seed, minimum_size=512)
assert set(seed) == set(independent)
assert digest(seed) == certificate_digest(independent) == {EXPECTED_DIGEST!r}

for name, forward, inverse in TRANSFORMS:
    image = [forward(point) for point in seed]
    assert [inverse(point) for point in image] == seed, name
    assert [forward(inverse(point)) for point in seed] == seed, name
    primary = verify(image, minimum_size=512)
    secondary = verify_points(image, minimum_size=512)
    assert set(primary) == set(secondary), name
    assert digest(primary) == certificate_digest(secondary), name

print(f"CROSS-CHECK PASS baseline={{len(seed)}} transforms={{len(TRANSFORMS)}}")
"""
        cross_output = checked_run(directory, "-c", cross_check)

    expected_line = f"VALID size=512 sha256={EXPECTED_DIGEST}"
    if seed_output != expected_line:
        raise AssertionError(seed_output)
    if f"CANDIDATE size=512 sha256={EXPECTED_DIGEST}" not in candidate_output:
        raise AssertionError(candidate_output)
    if "CALIBRATION PASS subsets=512 malformed=6" not in calibration_output:
        raise AssertionError(calibration_output)
    if cross_output != "CROSS-CHECK PASS baseline=512 transforms=5":
        raise AssertionError(cross_output)

    print(
        "PROMPT CODE PASS "
        f"blocks={len(blocks)} baseline=512 transforms=5 subsets=512 sha256={EXPECTED_DIGEST}"
    )


if __name__ == "__main__":
    main()
