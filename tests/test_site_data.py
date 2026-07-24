import json
from pathlib import Path

from tools.build_site_data import build_explorer_data

ROOT = Path(__file__).resolve().parents[1]


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
