const canvas = document.querySelector("#quantum-bubbles");

if (canvas) {
  const context = canvas.getContext("2d");
  const bubbleColor = canvas.dataset.color || "33, 179, 243";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const bubbles = [];
  let animationFrame;

  function resize() {
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * scale);
    canvas.height = Math.floor(window.innerHeight * scale);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(scale, 0, 0, scale, 0, 0);
  }

  function createBubble() {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 3.3 + 1.8,
      velocityX: (Math.random() - 0.5) * 0.22,
      velocityY: (Math.random() - 0.5) * 0.22,
      opacity: Math.random() * 0.36 + 0.22,
      phase: Math.random() * Math.PI * 2,
    };
  }

  function populate() {
    bubbles.length = 0;
    const count = Math.max(24, Math.min(54, Math.floor(window.innerWidth / 25)));
    for (let index = 0; index < count; index += 1) {
      bubbles.push(createBubble());
    }
  }

  function draw(timestamp = 0) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    bubbles.forEach((bubble) => {
      if (!reducedMotion) {
        bubble.x += bubble.velocityX;
        bubble.y += bubble.velocityY;
      }
      if (bubble.x < -10) bubble.x = window.innerWidth + 10;
      if (bubble.x > window.innerWidth + 10) bubble.x = -10;
      if (bubble.y < -10) bubble.y = window.innerHeight + 10;
      if (bubble.y > window.innerHeight + 10) bubble.y = -10;

      const pulse = reducedMotion ? 0 : Math.sin(timestamp * 0.0015 + bubble.phase) * 0.12;
      context.beginPath();
      context.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(${bubbleColor}, ${bubble.opacity + pulse})`;
      context.fill();
    });

    if (!reducedMotion) animationFrame = window.requestAnimationFrame(draw);
  }

  function reset() {
    window.cancelAnimationFrame(animationFrame);
    resize();
    populate();
    draw();
  }

  window.addEventListener("resize", reset);
  reset();
}
