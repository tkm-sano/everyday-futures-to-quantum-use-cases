from __future__ import annotations

import json
from pathlib import Path

import yaml
from jsonschema import Draft202012Validator

ROOT = Path(__file__).resolve().parents[1]


def load_yaml(path: Path):
    with path.open("r", encoding="utf-8") as file:
        return yaml.safe_load(file)


def validate_yaml() -> None:
    for path in ROOT.rglob("*.yml"):
        load_yaml(path)


def validate_derivation_maps() -> None:
    schema = json.loads(
        (ROOT / "05_derivation_maps/derivation_map.schema.json").read_text(encoding="utf-8")
    )
    validator = Draft202012Validator(schema)

    for path in (ROOT / "05_derivation_maps").rglob("engineering_map_2055.yml"):
        document = load_yaml(path)
        errors = sorted(validator.iter_errors(document), key=lambda error: list(error.path))
        if errors:
            raise ValueError("\n".join(f"{path}: {error.message}" for error in errors))

        node_ids = {node["id"] for node in document["nodes"]}
        for edge in document["edges"]:
            if edge["source"] not in node_ids:
                raise ValueError(f"{path}: missing source node {edge['source']}")
            if edge["target"] not in node_ids:
                raise ValueError(f"{path}: missing target node {edge['target']}")


def validate_target_year() -> None:
    data = load_yaml(ROOT / "03_scenario_assumptions/common_2055/target_year.yml")
    if data["scenario_time"]["target_year"] != 2055:
        raise ValueError("Target year must be 2055.")
    if data["scenario_time"]["prediction_claim"] is not False:
        raise ValueError("2055 must not be represented as a prediction.")


def main() -> None:
    validate_yaml()
    validate_derivation_maps()
    validate_target_year()
    print("Repository validation passed.")


if __name__ == "__main__":
    main()
