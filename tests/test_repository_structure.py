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


def test_site_only_exposes_the_about_page() -> None:
    html = (ROOT / "site/index.html").read_text(encoding="utf-8")

    assert "About Us" in html
    assert "Explore Use Cases" not in html
    assert "Start Exploring" not in html
    assert "<nav" not in html
    assert not (ROOT / "site/about/index.html").exists()
    assert not (ROOT / "site/explore/index.html").exists()
