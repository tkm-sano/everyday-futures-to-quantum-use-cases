const SLIDO_URL = "#";
const FEEDBACK_FORM_URL = "#";

const storyScenes = {
  scene1: {
    image: "../../assets/story-1/scene-1.webp",
    aspectRatio: "3 / 2",
    alt: "A waterfront city with coordinated buildings, factories, and delivery hubs.",
    hotspots: [
      {
        id: "buildings",
        label: "Buildings",
        x: 31,
        y: 6,
        width: 37,
        height: 28,
        statement: "Materials designed to respond to the urban heat island effect and reflected heat.",
      },
      {
        id: "factory",
        label: "Factory",
        x: 5,
        y: 52,
        width: 26,
        height: 25,
        statement: "Production adjusted to make only the necessary and sufficient amount of products for that day.",
      },
      {
        id: "delivery-hub",
        label: "Delivery",
        x: 64,
        y: 55,
        width: 32,
        height: 29,
        statement: "Operations adjusted so the day’s packages are delivered with only the necessary and sufficient number of vehicles and total electricity.",
      },
    ],
  },
  scene2: {
    image: "../../assets/story-1/scene-2.webp",
    aspectRatio: "3 / 2",
    alt: "A student driver receiving an automated delivery assignment beside an energy-efficient vehicle.",
    hotspots: [
      {
        id: "delivery-route",
        label: "Delivery Route",
        x: 25,
        y: 56,
        width: 24,
        height: 27,
        statement: "Routes adapted to changes in logistics conditions and the traffic environment.",
      },
      {
        id: "battery",
        label: "Battery",
        x: 45,
        y: 49,
        width: 25,
        height: 17,
        statement: "Developed not only to extend driving range, but also to meet environmental and social standards across resource procurement, manufacturing, use, and disposal.",
      },
      {
        id: "vehicle",
        label: "Vehicle",
        x: 43,
        y: 21,
        width: 49,
        height: 51,
        statement: "Materials and structures suited to the environmental conditions and everyday use patterns of the regions where they operate.",
      },
    ],
  },
  scene3: {
    image: "../../assets/story-1/scene-3.webp",
    aspectRatio: "3 / 2",
    alt: "Taro leaving a designated delivery route to reach a water station during extreme heat.",
    hotspots: [
      {
        id: "weather-forecast",
        label: "Weather Forecast",
        x: 42,
        y: 50,
        width: 28,
        height: 35,
        statement: "Forecasts of localized weather phenomena that may occur in the operating area during the driving period.",
      },
      {
        id: "wearable-device",
        label: "Wearable Device",
        x: 31,
        y: 72,
        width: 14,
        height: 15,
        statement: "Current physical condition checked during working hours, based on the worker’s physical characteristics.",
      },
    ],
  },
  scene4: {
    image: "../../assets/story-1/scene-4.webp",
    aspectRatio: "3 / 2",
    alt: "A coordinated city dashboard contrasting stable operations with a worker's personal health data.",
    hotspots: [
      {
        id: "water-station",
        label: "Water",
        x: 43,
        y: 19,
        width: 16,
        height: 49,
        statement: "Stable water supply available throughout the year, regardless of climate conditions.",
      },
      {
        id: "compensation",
        label: "Compensation",
        x: 62,
        y: 8,
        width: 34,
        height: 33,
        statement: "Work assignments and compensation adjusted using accumulated past work data and data collected during that day’s working hours.",
      },
      {
        id: "complaint",
        label: "Complaint",
        x: 62,
        y: 48,
        width: 34,
        height: 42,
        statement: "Mechanism for challenging decisions felt to be unfair by using data collected during that day’s work.",
      },
    ],
  },
};

let activePanel = null;
let activeButton = null;
let scenarioHotspotNumber = 0;

function positionPanel(button, panel) {
  const margin = 14;
  const gap = 10;
  const buttonBox = button.getBoundingClientRect();
  const panelBox = panel.getBoundingClientRect();
  const maxLeft = Math.max(margin, window.innerWidth - panelBox.width - margin);
  const maxTop = Math.max(margin, window.innerHeight - panelBox.height - margin);
  const centeredLeft = buttonBox.left + (buttonBox.width / 2) - (panelBox.width / 2);
  const belowTop = buttonBox.bottom + gap;
  const aboveTop = buttonBox.top - panelBox.height - gap;
  const preferredTop = belowTop <= maxTop ? belowTop : aboveTop;

  panel.style.left = `${Math.max(margin, Math.min(centeredLeft, maxLeft))}px`;
  panel.style.top = `${Math.max(margin, Math.min(preferredTop, maxTop))}px`;
  panel.style.right = "auto";
}

function repositionActivePanel() {
  if (activeButton && activePanel && !activePanel.hidden) {
    positionPanel(activeButton, activePanel);
  }
}

function closeActivePanel() {
  if (!activePanel) return;
  activePanel.hidden = true;
  activePanel.replaceChildren();
  if (activeButton) activeButton.setAttribute("aria-expanded", "false");
  activePanel = null;
  activeButton = null;
}

function showStatement(button, panel, hotspot) {
  if (activeButton === button) {
    closeActivePanel();
    return;
  }

  closeActivePanel();
  panel.replaceChildren();
  const statement = document.createElement("p");
  statement.textContent = hotspot.statement;
  panel.append(statement);
  panel.style.visibility = "hidden";
  panel.hidden = false;
  positionPanel(button, panel);
  panel.style.visibility = "";
  button.setAttribute("aria-expanded", "true");
  activePanel = panel;
  activeButton = button;
}

function buildScene(mount, sceneKey, scene) {
  const visual = document.createElement("div");
  const media = document.createElement("div");
  const image = document.createElement("img");
  const fallback = document.createElement("div");
  const fallbackTitle = document.createElement("strong");
  const fallbackNote = document.createElement("small");
  const instruction = document.createElement("p");
  const panel = document.createElement("div");
  const panelId = `${sceneKey}-statement`;

  visual.className = "scene-visual";
  media.className = "scene-media";
  if (scene.aspectRatio) media.style.aspectRatio = scene.aspectRatio;
  image.className = "scene-image";
  image.src = scene.image;
  image.alt = scene.alt;
  fallback.className = "image-fallback";
  fallback.setAttribute("aria-hidden", "true");
  fallbackTitle.textContent = "Scene image coming soon";
  fallbackNote.textContent = "The interactive elements remain available.";
  fallback.append(fallbackTitle, fallbackNote);
  instruction.className = "explore-instruction";
  instruction.textContent = "Click a highlighted area to explore the Scenario.";
  panel.className = "hotspot-panel";
  panel.id = panelId;
  panel.hidden = true;
  panel.setAttribute("aria-live", "polite");
  panel.setAttribute("aria-atomic", "true");

  image.addEventListener("error", () => media.classList.add("image-unavailable"));

  [...scene.hotspots]
    .sort((first, second) => (second.width * second.height) - (first.width * first.height))
    .forEach((hotspot) => {
    scenarioHotspotNumber += 1;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "hotspot";
    button.setAttribute("aria-label", `Scenario ${scenarioHotspotNumber}: ${hotspot.label}`);
    button.setAttribute("aria-controls", panelId);
    button.setAttribute("aria-expanded", "false");
    button.dataset.number = String(scenarioHotspotNumber);
    button.style.left = `${hotspot.x}%`;
    button.style.top = `${hotspot.y}%`;
    button.style.width = `${hotspot.width}%`;
    button.style.height = `${hotspot.height}%`;
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      showStatement(button, panel, hotspot);
    });
    media.append(button);
  });

  media.addEventListener("click", (event) => {
    if (event.target === media) closeActivePanel();
  });
  media.prepend(fallback, image);
  document.body.append(panel);
  visual.append(media);
  mount.append(visual, instruction);
}

document.querySelectorAll("[data-scene]").forEach((mount) => {
  const sceneKey = mount.dataset.scene;
  const scene = storyScenes[sceneKey];
  if (scene) buildScene(mount, sceneKey, scene);
});

const slidoLink = document.querySelector("#slido-link");
if (slidoLink) slidoLink.href = SLIDO_URL;

const feedbackLink = document.querySelector("#feedback-link");
if (feedbackLink) feedbackLink.href = FEEDBACK_FORM_URL;

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeActivePanel();
});

document.addEventListener("click", (event) => {
  if (!activePanel || activePanel.contains(event.target) || activeButton.contains(event.target)) return;
  closeActivePanel();
});

window.addEventListener("resize", repositionActivePanel);
window.addEventListener("scroll", repositionActivePanel, { passive: true });
