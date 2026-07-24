from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIRS = [
    ROOT / "data" / "public",
    ROOT / "data" / "derived",
    ROOT / "01_workshop_inputs" / "public_records",
    ROOT / "site",
]

PATTERNS = {
    "email": re.compile(r"\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b", re.IGNORECASE),
    "google_drive_url": re.compile(r"https?://docs\.google\.com/", re.IGNORECASE),
}


def main() -> None:
    findings: list[str] = []
    for directory in PUBLIC_DIRS:
        if not directory.exists():
            continue
        for path in directory.rglob("*"):
            if not path.is_file() or path.suffix.lower() in {".png", ".jpg", ".jpeg", ".svg"}:
                continue
            text = path.read_text(encoding="utf-8", errors="ignore")
            for name, pattern in PATTERNS.items():
                if pattern.search(text):
                    findings.append(f"{name}: {path.relative_to(ROOT)}")

    if findings:
        raise SystemExit("Potential private data found:\n" + "\n".join(findings))
    print("Public-data scan passed.")


if __name__ == "__main__":
    main()
