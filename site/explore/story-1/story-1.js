const SLIDO_URL = "#";

const storyScenes = {
  scene1: {
    image: "../../assets/story-1/scene-1.webp",
    aspectRatio: "3 / 2",
    alt: "A city-wide system coordinating factories, transport, logistics, homes, and electricity.",
    hotspots: [
      { id: "city-management", label: "City management", x: 31, y: 5, width: 34, height: 31, statement: "The environment is continuously monitored with high sensitivity, and the results are reflected in electricity allocation." },
      { id: "factory", label: "Factory", x: 0, y: 13, width: 27, height: 31, statement: "Factories across multiple regions share energy and continuously adjust their operating hours." },
      { id: "logistics-hub", label: "Logistics hub", x: 0, y: 44, width: 28, height: 27, statement: "Shipping destinations and delivery sequences among logistics hubs are continuously planned based on inventory, vehicle capacity, road conditions, and other factors." },
      { id: "electricity-management", label: "Electricity management", x: 67, y: 39, width: 33, height: 56, statement: "Charging and discharging, as well as demand adjustment, are continuously planned based on power generation, cooling demand, stored energy, EV charging demand, and other factors." },
    ],
  },
  scene2: {
    image: "../../assets/story-1/scene-2.webp",
    alt: "A student driver receiving an automated delivery assignment beside an energy-efficient vehicle.",
    hotspots: [
      { id: "driver", label: "Driver", x: 14, y: 31, width: 25, height: 49, statement: "Delivery tasks are assigned automatically." },
      { id: "task-management", label: "Task management", x: 22, y: 4, width: 23, height: 27, statement: "Work is allocated based on driver information." },
      { id: "delivery-route", label: "Delivery route", x: 66, y: 3, width: 25, height: 29, statement: "Delivery routes are continuously replanned by considering delivery deadlines, road conditions, and vehicle status together." },
      { id: "materials", label: "Materials", x: 3, y: 80, width: 66, height: 18, statement: "High-precision electronic-state calculations and experiments are combined to continuously develop new materials." },
      { id: "vehicle", label: "Vehicle", x: 36, y: 36, width: 34, height: 35, statement: "Delivery vehicles are assigned based on differences in driving range and degradation." },
      { id: "driving-data", label: "Driving data", x: 70, y: 61, width: 19, height: 20, statement: "Driving data is processed by purpose, and information needed for safe operation is shared externally." },
    ],
  },
  scene3: {
    image: "../../assets/story-1/scene-3.webp",
    alt: "Taro leaving a designated delivery route to reach a water station during extreme heat.",
    hotspots: [
      { id: "driver", label: "Driver", x: 5, y: 12, width: 35, height: 64, statement: "Physical condition is assessed from data." },
      { id: "wearable-device", label: "Wearable device", x: 33, y: 67, width: 12, height: 17, statement: "Weak physiological signals are measured, and necessary indicators are shared with the delivery system." },
      { id: "delivery-route", label: "Delivery route", x: 67, y: 55, width: 18, height: 35, statement: "Delivery routes are recalculated based on road congestion and working hours." },
    ],
  },
  scene4: {
    image: "../../assets/story-1/scene-4.webp",
    alt: "A coordinated city dashboard contrasting stable operations with a worker's personal health data.",
    hotspots: [
      { id: "water-station", label: "Water station", x: 80, y: 35, width: 20, height: 45, statement: "Water quantity and quality are continuously monitored to manage water availability for supply." },
      { id: "compensation", label: "Compensation", x: 46, y: 61, width: 17, height: 29, statement: "Compensation amounts and the reasons for their calculation are managed based on work conditions and delivery performance." },
      { id: "complaint", label: "Complaint", x: 14, y: 32, width: 23, height: 56, statement: "Objections are filed using data." },
    ],
  },
};

let activePanel = null;
let activeButton = null;

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
  const title = document.createElement("strong");
  const statement = document.createElement("p");
  title.textContent = hotspot.label;
  statement.textContent = hotspot.statement;
  panel.append(title, statement);
  panel.style.left = `${Math.min(Math.max(hotspot.x, 3), 65)}%`;
  panel.style.top = `${Math.min(hotspot.y + hotspot.height + 2, 72)}%`;
  panel.hidden = false;
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
  instruction.textContent = "Select anything that catches your attention.";
  panel.className = "hotspot-panel";
  panel.id = panelId;
  panel.hidden = true;
  panel.setAttribute("aria-live", "polite");
  panel.setAttribute("aria-atomic", "true");

  image.addEventListener("error", () => media.classList.add("image-unavailable"));

  scene.hotspots.forEach((hotspot) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "hotspot";
    button.setAttribute("aria-label", hotspot.label);
    button.setAttribute("aria-controls", panelId);
    button.setAttribute("aria-expanded", "false");
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
    if (event.target === media || event.target === image) closeActivePanel();
  });
  media.prepend(fallback, image);
  visual.append(media, panel);
  mount.append(visual, instruction);
}

document.querySelectorAll("[data-scene]").forEach((mount) => {
  const sceneKey = mount.dataset.scene;
  const scene = storyScenes[sceneKey];
  if (scene) buildScene(mount, sceneKey, scene);
});

const slidoLink = document.querySelector("#slido-link");
if (slidoLink) slidoLink.href = SLIDO_URL;

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeActivePanel();
});

document.addEventListener("click", (event) => {
  if (!activePanel || activePanel.contains(event.target) || activeButton.contains(event.target)) return;
  closeActivePanel();
});
