const storyScenes = {
  scene1: {
    image: "../../assets/story-1/scene-1.webp",
    aspectRatio: "3 / 2",
    alt: "Sample image for food story moment 1.",
    hotspots: [
      { id: "sample-1a", label: "sample", x: 20, y: 18, width: 24, height: 28, statement: "test" },
      { id: "sample-1b", label: "sample", x: 58, y: 40, width: 26, height: 34, statement: "test" },
    ],
  },
  scene2: {
    image: "../../assets/story-1/scene-2.webp",
    alt: "Sample image for food story moment 2.",
    hotspots: [
      { id: "sample-2a", label: "sample", x: 12, y: 24, width: 28, height: 42, statement: "test" },
      { id: "sample-2b", label: "sample", x: 61, y: 16, width: 27, height: 31, statement: "test" },
    ],
  },
  scene3: {
    image: "../../assets/story-1/scene-3.webp",
    alt: "Sample image for food story moment 3.",
    hotspots: [
      { id: "sample-3a", label: "sample", x: 19, y: 25, width: 25, height: 45, statement: "test" },
      { id: "sample-3b", label: "sample", x: 62, y: 50, width: 25, height: 32, statement: "test" },
    ],
  },
  scene4: {
    image: "../../assets/story-1/scene-4.webp",
    alt: "Sample image for food story moment 4.",
    hotspots: [
      { id: "sample-4a", label: "sample", x: 14, y: 30, width: 27, height: 48, statement: "test" },
      { id: "sample-4b", label: "sample", x: 65, y: 28, width: 24, height: 42, statement: "test" },
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
  fallbackTitle.textContent = "Sample image";
  fallbackNote.textContent = "test";
  fallback.append(fallbackTitle, fallbackNote);
  instruction.className = "explore-instruction";
  instruction.textContent = "Select a sample area.";
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeActivePanel();
});

document.addEventListener("click", (event) => {
  if (!activePanel || activePanel.contains(event.target) || activeButton.contains(event.target)) return;
  closeActivePanel();
});
