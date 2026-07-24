import json
import runpy
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BUILD_SITE_DATA = runpy.run_path(ROOT / "tools/build_site_data.py")
build_explorer_data = BUILD_SITE_DATA["build_explorer_data"]


def test_explorer_data_matches_source_yaml() -> None:
    generated = json.loads(
        (ROOT / "site/data/explorer.json").read_text(encoding="utf-8")
    )
    assert generated == build_explorer_data()


def test_every_story_supports_every_expansion_lens() -> None:
    data = build_explorer_data()
    assert [lens["name"] for lens in data["lenses"]] == [
        "Technology",
        "Policy",
        "Design",
        "Business",
    ]
    assert all(lens["questions"] == [] for lens in data["lenses"])
    assert all(story["seeds"] for story in data["stories"])
