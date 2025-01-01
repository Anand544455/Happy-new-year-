// Countdown Timer Function
function updateCountdown() {
  const newYearDate = new Date("January 1, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = newYearDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    document.getElementById("timer").innerHTML = "Happy New Year!";
    triggerConfetti(); // Trigger confetti when it's New Year!
  }
}

// Call the updateCountdown function every second
setInterval(updateCountdown, 1000);

// Random New Year's Message
function changeMessage() {
  const messages = [
    "Wishing you health, wealth, and happiness in the new year!",
    "May 2025 be the year you accomplish all your dreams!",
    "Cheers to a new year and a new beginning!",
    "Here's to a joyful, peaceful, and prosperous new year!",
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const messageElement = document.getElementById("message");
  messageElement.innerText = randomMessage;
  messageElement.style.animation = "fadeIn 1.5s ease-out forwards"; // Reset animation
}

// Confetti Animation
function triggerConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  const particles = [];
  const numParticles = 300;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Create particles
  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 5 + 2,
      speedX: Math.random() * 3 - 1.5,
      speedY: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    });
  }

  // Draw particles
  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y > canvas.height) p.y = 0;
      if (p.x > canvas.width) p.x = 0;
    }
    requestAnimationFrame(drawConfetti);
  }

  drawConfetti();
}
