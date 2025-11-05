// 粒子背景效果
document.addEventListener('DOMContentLoaded', function() {
  // 只在首页显示粒子背景
  if (document.getElementById('page-header')) {
    particlesJS('page-header', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00f5ff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00f5ff",
          opacity: 0.4,
          width: 1
        },
        move: { enable: true, speed: 2, direction: "none", random: true }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        }
      }
    });
  }

  // 打字机效果
  const typedElements = document.querySelectorAll('.typed-text');
  typedElements.forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
  });
});