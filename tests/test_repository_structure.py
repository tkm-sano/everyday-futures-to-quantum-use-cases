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
        "site/about/index.html",
        "site/explore/index.html",
        "site/explore/explore.js",
        "site/data/explorer.json",
        ".github/workflows/deploy-pages.yml",
    ]
    for relative_path in required:
        assert (ROOT / relative_path).exists(), relative_path


def test_site_header_uses_the_revised_information_architecture() -> None:
    forbidden_items = [
        "Story Worlds",
        "Seed Library",
        "Discussion",
        "Resources",
        "Use Case Explorer",
    ]
    for relative_path in [
        "site/index.html",
        "site/about/index.html",
        "site/explore/index.html",
    ]:
        html = (ROOT / relative_path).read_text(encoding="utf-8")
        navigation = html.split("<nav", maxsplit=1)[1].split("</nav>", maxsplit=1)[0]
        assert "About Us" in navigation
        assert "Explore Use Cases" in navigation
        assert "Start Exploring" in navigation
        assert all(item not in navigation for item in forbidden_items)
