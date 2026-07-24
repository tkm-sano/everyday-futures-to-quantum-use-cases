from __future__ import annotations

import argparse
import math


def estimate(candidate_count: int, marked_count: int = 1) -> int:
    """Return the ideal Grover iteration count for reference only."""
    if candidate_count <= 0:
        raise ValueError("candidate_count must be positive")
    if marked_count <= 0 or marked_count > candidate_count:
        raise ValueError("marked_count must be in [1, candidate_count]")
    return math.floor((math.pi / 4.0) * math.sqrt(candidate_count / marked_count))


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--candidate-bits", type=int, required=True)
    parser.add_argument("--marked-count", type=int, default=1)
    args = parser.parse_args()

    candidate_count = 2 ** args.candidate_bits
    print({
        "candidate_bits": args.candidate_bits,
        "candidate_count": candidate_count,
        "marked_count": args.marked_count,
        "ideal_iterations": estimate(candidate_count, args.marked_count),
        "warning": "Excludes oracle, state preparation, QEC, measurement, and classical costs.",
    })


if __name__ == "__main__":
    main()
