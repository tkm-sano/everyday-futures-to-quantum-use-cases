import runpy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCAN_PUBLIC_DATA = runpy.run_path(ROOT / "tools/scan_public_data.py")
PATTERNS = SCAN_PUBLIC_DATA["PATTERNS"]


def test_public_google_forms_url_is_not_treated_as_drive_data() -> None:
    text = "https://docs.google.com/forms/d/e/example/viewform?usp=header"
    assert not PATTERNS["google_drive_url"].search(text)


def test_google_document_url_is_treated_as_potential_private_data() -> None:
    text = "https://docs.google.com/document/d/example/edit"
    assert PATTERNS["google_drive_url"].search(text)
