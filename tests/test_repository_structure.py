from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_required_paths_exist() -> None:
    required = [
        ".gitignore",
        "content/framework/target-year.yml",
        "content/use-cases/traffic/engineering-map-2055.yml",
        "content/use-cases/food-nutrition/engineering-map-2055.yml",
        "docs/framework.md",
        "schemas/derivation-map.schema.json",
        "tools/validate_repository.py",
        "site/index.html",
        "site/data/explorer.json",
        ".github/workflows/deploy-pages.yml",
    ]
    for relative_path in required:
        assert (ROOT / relative_path).exists(), relative_path


def test_site_exposes_about_and_story_explorer_pages() -> None:
    about_html = (ROOT / "site/index.html").read_text(encoding="utf-8")
    explore_html = (ROOT / "site/explore/index.html").read_text(encoding="utf-8")
    story_html = (ROOT / "site/explore/story-1/index.html").read_text(encoding="utf-8")

    assert "BoF Title" in about_html
    assert "Explore Use Cases" in about_html
    assert '<nav class="site-nav"' in about_html
    assert "Story 1" in explore_html
    assert "Smart City" in story_html
    assert not (ROOT / "site/about/index.html").exists()
