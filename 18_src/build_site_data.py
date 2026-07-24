from __future__ import annotations

import json
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "site" / "data" / "generated-project.json"


def load_yaml(relative_path: str):
    with (ROOT / relative_path).open("r", encoding="utf-8") as file:
        return yaml.safe_load(file)


def main() -> None:
    data = {
        "target_year": load_yaml(
            "03_scenario_assumptions/common_2055/target_year.yml"
        )["scenario_time"],
        "overview": load_yaml("05_derivation_maps/overview/baseline_2055.yml"),
        "traffic": load_yaml("05_derivation_maps/traffic/engineering_map_2055.yml"),
        "food_nutrition": load_yaml(
            "05_derivation_maps/food_nutrition/engineering_map_2055.yml"
        ),
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
