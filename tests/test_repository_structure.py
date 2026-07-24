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
        ".github/workflows/deploy-pages.yml",
    ]
    for relative_path in required:
        assert (ROOT / relative_path).exists(), relative_path
