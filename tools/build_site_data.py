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
    target = load_yaml("content/framework/target-year.yml")["scenario_time"]
    modes = [
        load_yaml("content/framework/hybrid-execution.yml")["utility_mode"],
        load_yaml("content/framework/quantum-dominant-execution.yml")["utility_mode"],
    ]

    domains = []
    for directory in ("traffic", "food-nutrition"):
        base = f"content/use-cases/{directory}"
        application = load_yaml(f"{base}/application-profile.yml")
        constraints = load_yaml(f"{base}/constraint-model.yml")["constraints"]
        change = load_yaml(f"{base}/selected-change.yml")["selected_change"]
        engineering_map = load_yaml(f"{base}/engineering-map-2055.yml")
        open_questions = [
            node["label"]
            for node in engineering_map["nodes"]
            if node["type"] in {"social_requirement", "unintended_effect"}
        ]
        domains.append(
            {
                "title": application["application"]["name"],
                "candidate": application["candidate_definition"].strip(),
                "constraints": "、".join(constraints),
                "service": change["future_change"],
                "change": change["future_change"],
                "question": "／".join(open_questions),
            }
        )

    data = {
        "scenarioYear": target["target_year"],
        "scenarioStatus": "Project scenario — not a prediction",
        "modes": [
            {
                "title": mode.get("label", mode.get("participant_label", mode["id"])),
                "description": mode.get("definition", mode["utility_condition"]).strip(),
            }
            for mode in modes
        ],
        "domains": domains,
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
