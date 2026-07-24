from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_required_paths_exist() -> None:
    required = [
        ".gitignore",
        "03_scenario_assumptions/common_2055/target_year.yml",
        "04_quantum_search_baseline/README.md",
        "05_derivation_maps/traffic/engineering_map_2055.yml",
        "05_derivation_maps/food_nutrition/engineering_map_2055.yml",
        "site/index.html",
        ".github/workflows/deploy-pages.yml",
    ]
    for relative_path in required:
        assert (ROOT / relative_path).exists(), relative_path
