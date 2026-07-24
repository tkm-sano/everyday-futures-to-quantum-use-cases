from __future__ import annotations

import json
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
PROJECT_OUTPUT = ROOT / "site" / "data" / "generated-project.json"
EXPLORER_OUTPUT = ROOT / "site" / "data" / "explorer.json"

SEED_TYPES = {
    "algorithm",
    "candidate_space",
    "service",
    "everyday_change",
    "social_requirement",
    "unintended_effect",
}

RELATED_SCENES = {
    "algorithm": "scene_2",
    "candidate_space": "scene_2",
    "service": "scene_2",
    "everyday_change": "scene_3",
    "social_requirement": "scene_4",
    "unintended_effect": "scene_4",
}


def load_yaml(relative_path: str):
    with (ROOT / relative_path).open("r", encoding="utf-8") as file:
        return yaml.safe_load(file)


def humanize(value: str) -> str:
    return value.replace("_", " ").title()


def load_story(relative_path: str) -> tuple[str, str]:
    lines = (ROOT / relative_path).read_text(encoding="utf-8").strip().splitlines()
    title = lines[0].removeprefix("# ").strip()
    body = " ".join(line.strip() for line in lines[1:] if line.strip())
    return title, body


def build_project_data() -> dict:
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

    return {
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


def build_explorer_data() -> dict:
    target = load_yaml("content/framework/target-year.yml")["scenario_time"]
    world = load_yaml("content/framework/world-baseline.yml")["world_baseline"]
    stories = []

    for directory in ("traffic", "food-nutrition"):
        base = f"content/use-cases/{directory}"
        metadata = load_yaml(f"{base}/story-metadata.yml")["story"]
        character = load_yaml(f"{base}/character.yml")["character"]
        plot = load_yaml(f"{base}/plot.yml")["plot"]
        change = load_yaml(f"{base}/selected-change.yml")["selected_change"]
        application = load_yaml(f"{base}/application-profile.yml")["application"]
        engineering_map = load_yaml(f"{base}/engineering-map-2055.yml")
        story_title, story_body = load_story(f"{base}/story.md")

        seeds = []
        for node in engineering_map["nodes"]:
            if node["type"] not in SEED_TYPES:
                continue
            related_scene_id = RELATED_SCENES[node["type"]]
            seeds.append(
                {
                    "id": node["id"],
                    "name": node["label"],
                    "description": (
                        f"{humanize(node['type'])} · {humanize(node['status'])}"
                    ),
                    "type": node["type"],
                    "status": node["status"],
                    "relatedScene": {
                        "id": related_scene_id,
                        "text": plot[related_scene_id],
                    },
                }
            )

        stories.append(
            {
                "id": metadata["id"],
                "title": story_title,
                "summary": change["future_change"],
                "domain": story_title.split("ストーリー", maxsplit=1)[0],
                "scenarioYear": metadata["scenario_year"],
                "status": metadata["status"],
                "sourceRefs": metadata["source_refs"],
                "application": application["name"],
                "story": story_body,
                "protagonist": {
                    "name": character["name"],
                    "role": character["role"],
                    "everydayActivity": character["everyday_activity"],
                },
                "everydayScenes": [
                    {"id": scene_id, "text": scene_text}
                    for scene_id, scene_text in plot.items()
                ],
                "worldConditions": world["assumptions"],
                "lifeChange": {
                    "activity": change["activity"],
                    "currentBurden": change["current_burden"],
                    "futureChange": change["future_change"],
                },
                "seeds": seeds,
                "sourceFiles": [
                    f"{base}/story.md",
                    f"{base}/story-metadata.yml",
                    f"{base}/character.yml",
                    f"{base}/plot.yml",
                    f"{base}/selected-change.yml",
                    f"{base}/engineering-map-2055.yml",
                    "content/framework/world-baseline.yml",
                ],
            }
        )

    return {
        "scenario": {
            "year": target["target_year"],
            "status": target["status"],
            "predictionClaim": target["prediction_claim"],
            "interpretation": target["interpretation"].strip(),
        },
        "stories": stories,
        "lenses": [
            {
                "id": lens_name.lower(),
                "name": lens_name,
                "description": "",
                "questions": [],
            }
            for lens_name in ("Technology", "Policy", "Design", "Business")
        ],
    }


def write_json(path: Path, data: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {path.relative_to(ROOT)}")


def main() -> None:
    write_json(PROJECT_OUTPUT, build_project_data())
    write_json(EXPLORER_OUTPUT, build_explorer_data())


if __name__ == "__main__":
    main()
