from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]


def test_target_year_is_project_scenario_2055() -> None:
    data = yaml.safe_load(
        (ROOT / "content/framework/target-year.yml").read_text(encoding="utf-8")
    )
    assert data["scenario_time"]["target_year"] == 2055
    assert data["scenario_time"]["status"] == "project_scenario"
    assert data["scenario_time"]["prediction_claim"] is False
