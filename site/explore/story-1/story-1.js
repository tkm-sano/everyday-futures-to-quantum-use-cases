const SLIDO_URL = "https://app.sli.do/event/p136iY5xXwnBzod5LRzq5R";
const FEEDBACK_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdbT6Df8fZRemX8DzZF_Kj1cB49-ucKFtvrAn8YEbWSDAhKMg/viewform?usp=header";

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
        statement:
          "Buildings made with materials designed to respond to the urban heat island effect and reflected heat.",
      },
      {
        id: "factory",
        label: "Factory",
        x: 5,
        y: 52,
        width: 26,
        height: 25,
        statement:
          "A factory where production is adjusted to make only the necessary and sufficient amount of products for that day.",
      },
      {
        id: "delivery-hub",
        label: "Delivery Hub",
        x: 64,
        y: 55,
        width: 32,
        height: 29,
        statement:
          "A delivery hub where operations are adjusted so the day’s packages are delivered with only the necessary and sufficient number of vehicles and total electricity.",
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
        statement:
          "A delivery route adapted to changes in logistics conditions and the traffic environment.",
      },
      {
        id: "battery",
        label: "Battery",
        x: 45,
        y: 49,
        width: 25,
        height: 17,
        statement:
          "A battery developed not only to extend driving range, but also to meet environmental and social standards across resource procurement, manufacturing, use, and disposal.",
      },
      {
        id: "vehicle",
        label: "Vehicle",
        x: 43,
        y: 21,
        width: 49,
        height: 51,
        statement:
          "A vehicle made with materials and structures suited to the environmental conditions and everyday use patterns of the region where it operates.",
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
        statement:
          "A weather forecast showing localized weather phenomena that may occur in the operating area during the driving period.",
      },
      {
        id: "wearable-device",
        label: "Wearable Device",
        x: 31,
        y: 72,
        width: 14,
        height: 15,
        statement:
          "A wearable device that checks the worker’s current physical condition during working hours, based on the worker’s physical characteristics.",
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
        label: "Water Station",
        x: 43,
        y: 19,
        width: 16,
        height: 49,
        statement:
          "A water station that provides a stable water supply throughout the year, regardless of climate conditions.",
      },
      {
        id: "compensation",
        label: "Compensation",
        x: 62,
        y: 8,
        width: 34,
        height: 33,
        statement:
          "Compensation adjusted together with work assignments using accumulated past work data and data collected during that day’s working hours.",
      },
      {
        id: "complaint",
        label: "Complaint",
        x: 62,
        y: 48,
        width: 34,
        height: 42,
        statement:
          "A complaint mechanism for challenging decisions felt to be unfair by using data collected during that day’s work.",
      },
    ],
  },
};

let activePanel = null;
let activeButton = null;
let scenarioHotspotNumber = 0;

/**
 * Positions the statement panel close to the selected hotspot while
 * keeping the panel inside the viewport.
 */
function positionPanel(button, panel) {
  const margin = 14;
  const gap = 10;

  const buttonBox = button.getBoundingClientRect();
  const panelBox = panel.getBoundingClientRect();

  const maxLeft = Math.max(
    margin,
    window.innerWidth - panelBox.width - margin
  );

  const maxTop = Math.max(
    margin,
    window.innerHeight - panelBox.height - margin
  );

  const centeredLeft =
    buttonBox.left +
    buttonBox.width / 2 -
    panelBox.width / 2;

  const belowTop = buttonBox.bottom + gap;
  const aboveTop = buttonBox.top - panelBox.height - gap;

  const preferredTop =
    belowTop <= maxTop ? belowTop : aboveTop;

  panel.style.left = `${Math.max(
    margin,
    Math.min(centeredLeft, maxLeft)
  )}px`;

  panel.style.top = `${Math.max(
    margin,
    Math.min(preferredTop, maxTop)
  )}px`;

  panel.style.right = "auto";
}

/**
 * Closes the currently active statement panel.
 */
function closeActivePanel() {
  if (!activePanel) return;

  activePanel.hidden = true;
  activePanel.replaceChildren();

  if (activeButton) {
    activeButton.setAttribute("aria-expanded", "false");
  }

  activePanel = null;
  activeButton = null;
}

/**
 * Displays the label and statement belonging to a hotspot.
 */
function showStatement(button, panel, hotspot) {
  if (activeButton === button) {
    closeActivePanel();
    return;
  }

  closeActivePanel();
  panel.replaceChildren();

  const title = document.createElement("strong");
  title.textContent = hotspot.label;

  const statement = document.createElement("p");
  statement.textContent = hotspot.statement;

  panel.append(title, statement);

  panel.style.visibility = "hidden";
  panel.hidden = false;

  positionPanel(button, panel);

  panel.style.visibility = "";

  button.setAttribute("aria-expanded", "true");

  activePanel = panel;
  activeButton = button;
}

/**
 * Creates one visible hotspot containing both its number and name.
 */
function createHotspotButton(hotspot, panel, panelId) {
  scenarioHotspotNumber += 1;

  const button = document.createElement("button");
  const label = document.createElement("span");
  const number = document.createElement("span");
  const name = document.createElement("span");

  const formattedNumber =
    String(scenarioHotspotNumber).padStart(2, "0");

  button.type = "button";
  button.className = "hotspot";

  button.setAttribute(
    "aria-label",
    `Scenario ${formattedNumber}: ${hotspot.label}`
  );

  button.setAttribute("aria-controls", panelId);
  button.setAttribute("aria-expanded", "false");

  button.dataset.number = formattedNumber;
  button.dataset.hotspotId = hotspot.id;

  button.style.left = `${hotspot.x}%`;
  button.style.top = `${hotspot.y}%`;
  button.style.width = `${hotspot.width}%`;
  button.style.height = `${hotspot.height}%`;

  label.className = "hotspot-label";

  number.className = "hotspot-number";
  number.textContent = formattedNumber;

  name.className = "hotspot-name";
  name.textContent = hotspot.label;

  label.append(number, name);
  button.append(label);

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    showStatement(button, panel, hotspot);
  });

  return button;
}

/**
 * Builds one interactive scene.
 */
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

  if (scene.aspectRatio) {
    media.style.aspectRatio = scene.aspectRatio;
  }

  image.className = "scene-image";
  image.src = scene.image;
  image.alt = scene.alt;

  fallback.className = "image-fallback";
  fallback.setAttribute("aria-hidden", "true");

  fallbackTitle.textContent = "Scene image coming soon";
  fallbackNote.textContent =
    "The interactive elements remain available.";

  fallback.append(
    fallbackTitle,
    fallbackNote
  );

  instruction.className = "explore-instruction";
  instruction.textContent =
    "Click a highlighted item to explore the scenario.";

  panel.className = "hotspot-panel";
  panel.id = panelId;
  panel.hidden = true;

  panel.setAttribute("aria-live", "polite");
  panel.setAttribute("aria-atomic", "true");

  image.addEventListener("error", () => {
    media.classList.add("image-unavailable");
  });

  /*
   * Preserve the order defined in storyScenes.
   * Do not sort by hotspot size because the numbering should correspond
   * to the conceptual order of the scenario.
   */
  scene.hotspots.forEach((hotspot) => {
    const button = createHotspotButton(
      hotspot,
      panel,
      panelId
    );

    media.append(button);
  });

  media.addEventListener("click", (event) => {
    if (event.target === media) {
      closeActivePanel();
    }
  });

  media.prepend(
    fallback,
    image
  );

  document.body.append(panel);

  visual.append(media);

  mount.append(
    visual,
    instruction
  );
}

/**
 * Build all scenes declared in the page.
 */
document
  .querySelectorAll("[data-scene]")
  .forEach((mount) => {
    const sceneKey = mount.dataset.scene;
    const scene = storyScenes[sceneKey];

    if (scene) {
      buildScene(
        mount,
        sceneKey,
        scene
      );
    }
  });

/**
 * External links.
 */
const slidoLink =
  document.querySelector("#slido-link");

if (slidoLink) {
  slidoLink.href = SLIDO_URL;
}

const feedbackLink =
  document.querySelector("#feedback-link");

if (feedbackLink) {
  feedbackLink.href = FEEDBACK_FORM_URL;
}

/**
 * Close the active panel with Escape.
 */
document.addEventListener(
  "keydown",
  (event) => {
    if (event.key === "Escape") {
      closeActivePanel();
    }
  }
);

/**
 * Close the panel when clicking outside it.
 */
document.addEventListener(
  "click",
  (event) => {
    if (!activePanel) return;

    if (
      activePanel.contains(event.target) ||
      activeButton?.contains(event.target)
    ) {
      return;
    }

    closeActivePanel();
  }
);

/**
 * Close the floating explanation panel as soon as the page is scrolled.
 * The hotspot number/name itself remains attached to the image and
 * therefore naturally leaves the viewport together with the image.
 */
window.addEventListener(
  "scroll",
  closeActivePanel,
  { passive: true }
);

/**
 * If the viewport changes while the panel is visible,
 * recalculate its position.
 */
window.addEventListener(
  "resize",
  () => {
    if (
      activeButton &&
      activePanel &&
      !activePanel.hidden
    ) {
      positionPanel(
        activeButton,
        activePanel
      );
    }
  }
);