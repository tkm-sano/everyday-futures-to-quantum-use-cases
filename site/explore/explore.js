const STORAGE_KEY = "everyday-futures-explorer-v1";
const STEP_NAMES = [
  "Select a Story",
  "Explore the Story World",
  "Select an Idea Seed",
  "Expand the Seed",
  "Select a Lens",
  "Review the Discussion",
];

let explorerData;
let state = loadState();

const elements = {
  status: document.querySelector("#explorer-status"),
  steps: [...document.querySelectorAll(".explorer-step")],
  progressItems: [...document.querySelectorAll("[data-progress-step]")],
  progressScroll: document.querySelector(".progress-scroll"),
  storyList: document.querySelector("#story-card-list"),
  seedList: document.querySelector("#seed-card-list"),
  lensList: document.querySelector("#lens-card-list"),
  storyNext: document.querySelector("#story-next"),
  seedNext: document.querySelector("#seed-next"),
  lensNext: document.querySelector("#lens-next"),
  reset: document.querySelector("#reset-explorer"),
  startOver: document.querySelector("#start-over"),
};

function loadState() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    return {
      currentStep: Number.isInteger(saved?.currentStep) ? saved.currentStep : 0,
      storyId: saved?.storyId ?? null,
      seedId: saved?.seedId ?? null,
      lensId: saved?.lensId ?? null,
    };
  } catch {
    return { currentStep: 0, storyId: null, seedId: null, lensId: null };
  }
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function formatMachineLabel(value) {
  return value.replaceAll("_", " ");
}

function getSelectedStory() {
  return explorerData?.stories.find((story) => story.id === state.storyId);
}

function getSelectedSeed() {
  return getSelectedStory()?.seeds.find((seed) => seed.id === state.seedId);
}

function getSelectedLens() {
  return explorerData?.lenses.find((lens) => lens.id === state.lensId);
}

function reconcileState() {
  if (!getSelectedStory()) {
    state = { currentStep: 0, storyId: null, seedId: null, lensId: null };
  } else if (!getSelectedSeed()) {
    state.seedId = null;
    state.lensId = null;
    state.currentStep = Math.min(state.currentStep, 2);
  } else if (!getSelectedLens()) {
    state.lensId = null;
    state.currentStep = Math.min(state.currentStep, 4);
  }
  state.currentStep = Math.max(0, Math.min(state.currentStep, STEP_NAMES.length - 1));
  saveState();
}

function setStatus(message) {
  elements.status.textContent = message;
}

function renderStoryCards() {
  const cards = explorerData.stories.map((story) => {
    const selected = story.id === state.storyId;
    const card = createElement("article", `choice-card${selected ? " is-selected" : ""}`);
    card.lang = "ja";
    card.setAttribute("data-choice-id", story.id);

    const meta = createElement("div", "choice-meta");
    meta.append(
      createElement("span", "", story.domain),
      createElement("span", "", `${story.scenarioYear}`),
    );
    const title = createElement("h3", "", story.title);
    const summary = createElement("p", "", story.summary);
    const stateLabel = createElement(
      "span",
      "selection-state",
      selected ? "Selected" : "Available",
    );
    const button = createElement(
      "button",
      selected ? "secondary-button" : "primary-button",
      selected ? "Selected story" : "Select story",
    );
    button.type = "button";
    button.setAttribute("aria-pressed", String(selected));
    button.addEventListener("click", () => selectStory(story.id));

    card.append(meta, title, summary, stateLabel, button);
    return card;
  });
  elements.storyList.replaceChildren(...cards);
  elements.storyNext.disabled = !state.storyId;
}

function selectStory(storyId) {
  const changed = state.storyId !== storyId;
  state.storyId = storyId;
  if (changed) {
    state.seedId = null;
    state.lensId = null;
  }
  saveState();
  renderStoryCards();
  renderWorld();
  renderSeedCards();
  setStatus(`Selected story: ${getSelectedStory().title}`);
}

function appendDefinitionList(list, entries) {
  list.replaceChildren();
  entries.forEach(([term, description]) => {
    list.append(
      createElement("dt", "", term),
      createElement("dd", "", description),
    );
  });
}

function renderWorld() {
  const story = getSelectedStory();
  if (!story) return;

  document.querySelector("#world-domain").textContent =
    `${story.domain} · ${story.scenarioYear} · ${story.status}`;
  document.querySelector("#world-story-title").textContent = story.title;

  const storyParagraphs = story.story
    .split(/\n+/)
    .filter(Boolean)
    .map((paragraph) => createElement("p", "", paragraph));
  document.querySelector("#world-story-body").replaceChildren(...storyParagraphs);

  appendDefinitionList(document.querySelector("#world-protagonist"), [
    ["Name", story.protagonist.name],
    ["Role", formatMachineLabel(story.protagonist.role)],
    ["Everyday activity", story.protagonist.everydayActivity],
  ]);

  document.querySelector("#world-scenes").replaceChildren(
    ...story.everydayScenes.map((scene) => createElement("li", "", scene.text)),
  );
  document.querySelector("#world-conditions").replaceChildren(
    ...story.worldConditions.map((condition) =>
      createElement("li", "", formatMachineLabel(condition)),
    ),
  );
  appendDefinitionList(document.querySelector("#world-change"), [
    ["Activity", story.lifeChange.activity],
    ["Current burden", story.lifeChange.currentBurden],
    ["Future change", story.lifeChange.futureChange],
  ]);
}

function renderSeedCards() {
  const story = getSelectedStory();
  if (!story) {
    elements.seedList.replaceChildren();
    elements.seedNext.disabled = true;
    return;
  }

  const cards = story.seeds.map((seed) => {
    const selected = seed.id === state.seedId;
    const card = createElement("article", `choice-card seed-card${selected ? " is-selected" : ""}`);
    card.lang = "ja";

    const id = createElement("span", "seed-id", `Seed ID · ${seed.id}`);
    const type = createElement("small", "seed-type", seed.description);
    const title = createElement("h3", "", seed.name);
    const relation = createElement("p", "seed-relation", seed.relatedScene.text);
    relation.prepend(createElement("strong", "", "Story relation · "));
    const stateLabel = createElement(
      "span",
      "selection-state",
      selected ? "Selected" : "Available",
    );
    const button = createElement(
      "button",
      selected ? "secondary-button" : "primary-button",
      selected ? "Selected seed" : "Select seed",
    );
    button.type = "button";
    button.setAttribute("aria-pressed", String(selected));
    button.addEventListener("click", () => selectSeed(seed.id));

    card.append(id, type, title, relation, stateLabel, button);
    return card;
  });
  elements.seedList.replaceChildren(...cards);
  elements.seedNext.disabled = !state.seedId;
}

function selectSeed(seedId) {
  const changed = state.seedId !== seedId;
  state.seedId = seedId;
  if (changed) state.lensId = null;
  saveState();
  renderSeedCards();
  renderExpand();
  renderLensCards();
  setStatus(`Selected seed: ${getSelectedSeed().name}`);
}

function renderExpand() {
  const seed = getSelectedSeed();
  if (!seed) return;

  const card = document.querySelector("#expand-selected-seed");
  const id = createElement("span", "seed-id", `Seed ID · ${seed.id}`);
  const title = createElement("h3", "", seed.name);
  const description = createElement("p", "", seed.description);
  const relation = createElement("p", "seed-relation", seed.relatedScene.text);
  relation.prepend(createElement("strong", "", "Story relation · "));
  card.replaceChildren(id, title, description, relation);
}

function renderLensCards() {
  const cards = explorerData.lenses.map((lens) => {
    const selected = lens.id === state.lensId;
    const card = createElement("article", `lens-card${selected ? " is-selected" : ""}`);
    const title = createElement("h3", "", lens.name);
    const description = createElement(
      "p",
      lens.description ? "" : "description-placeholder",
      lens.description || "Description area",
    );
    const stateLabel = createElement(
      "span",
      "selection-state",
      selected ? "Selected" : "Available",
    );
    const button = createElement(
      "button",
      selected ? "secondary-button" : "primary-button",
      selected ? "Selected lens" : "Select lens",
    );
    button.type = "button";
    button.setAttribute("aria-pressed", String(selected));
    button.addEventListener("click", () => selectLens(lens.id));
    card.append(title, description, stateLabel, button);
    return card;
  });
  elements.lensList.replaceChildren(...cards);
  elements.lensNext.disabled = !state.lensId;
}

function selectLens(lensId) {
  state.lensId = lensId;
  saveState();
  renderLensCards();
  renderReview();
  setStatus(`Selected lens: ${getSelectedLens().name}`);
}

function renderReview() {
  const story = getSelectedStory();
  const seed = getSelectedSeed();
  const lens = getSelectedLens();
  if (!story || !seed || !lens) return;

  document.querySelector("#review-story").textContent = story.title;
  document.querySelector("#review-seed").textContent = seed.name;
  document.querySelector("#review-lens").textContent = lens.name;
  document.querySelector("#review-domain").textContent = story.domain;
  document.querySelector("#review-scene").textContent = seed.relatedScene.text;
}

function renderProgress() {
  elements.progressItems.forEach((item, index) => {
    item.classList.toggle("is-current", index === state.currentStep);
    item.classList.toggle("is-complete", index < state.currentStep);
    if (index === state.currentStep) {
      item.setAttribute("aria-current", "step");
      item.setAttribute("aria-label", `Current step: ${STEP_NAMES[index]}`);
    } else {
      item.removeAttribute("aria-current");
      item.setAttribute(
        "aria-label",
        `${index < state.currentStep ? "Completed" : "Upcoming"}: ${STEP_NAMES[index]}`,
      );
    }
  });

  const currentItem = elements.progressItems[state.currentStep];
  const centeredPosition =
    currentItem.offsetLeft -
    (elements.progressScroll.clientWidth - currentItem.offsetWidth) / 2;
  elements.progressScroll.scrollLeft = Math.max(0, centeredPosition);
}

function canOpenStep(step) {
  if (step >= 1 && !getSelectedStory()) return false;
  if (step >= 3 && !getSelectedSeed()) return false;
  if (step >= 5 && !getSelectedLens()) return false;
  return true;
}

function showStep(step, { focus = true } = {}) {
  if (!canOpenStep(step)) return;
  state.currentStep = step;
  saveState();
  elements.steps.forEach((panel, index) => {
    panel.hidden = index !== step;
  });
  renderProgress();
  setStatus(`Step ${step + 1} of 6: ${STEP_NAMES[step]}`);

  if (step === 1) renderWorld();
  if (step === 2) renderSeedCards();
  if (step === 3) renderExpand();
  if (step === 4) renderLensCards();
  if (step === 5) renderReview();

  if (focus) {
    const heading = elements.steps[step].querySelector("h2");
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
    document.querySelector("#explorer").scrollIntoView({ behavior: "smooth" });
  }
}

function resetExplorer() {
  state = { currentStep: 0, storyId: null, seedId: null, lensId: null };
  saveState();
  renderStoryCards();
  renderSeedCards();
  renderLensCards();
  showStep(0);
  setStatus("Selections reset. Step 1 of 6: Select a Story");
}

function bindControls() {
  elements.storyNext.addEventListener("click", () => showStep(1));
  elements.seedNext.addEventListener("click", () => showStep(3));
  elements.lensNext.addEventListener("click", () => showStep(5));
  elements.reset.addEventListener("click", resetExplorer);
  elements.startOver.addEventListener("click", resetExplorer);

  document.querySelectorAll("[data-back-to], [data-next-to]").forEach((button) => {
    const target = Number(button.dataset.backTo ?? button.dataset.nextTo);
    button.addEventListener("click", () => showStep(target));
  });
}

async function initializeExplorer() {
  bindControls();
  try {
    const response = await fetch("../data/explorer.json?v=20260724b");
    if (!response.ok) throw new Error(`Story data request failed with ${response.status}`);
    explorerData = await response.json();
    reconcileState();
    renderStoryCards();
    renderWorld();
    renderSeedCards();
    renderExpand();
    renderLensCards();
    renderReview();
    showStep(state.currentStep, { focus: false });
  } catch (error) {
    elements.status.classList.add("is-error");
    setStatus("Story data could not be loaded. Please reload the page.");
    console.error(error);
  }
}

initializeExplorer();
