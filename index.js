// Он автоматаар тавих
document.getElementById("year").textContent = new Date().getFullYear();

// Гар утасны цэс нээх/хаах
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Линк дармагц (mobile) цэс хаах
navMenu?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    if (navMenu.classList.contains("is-open")) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Үйлчилгээний картуудын дэвсгэр зургийг data-img-ээс уншиж тавих
document.querySelectorAll(".card").forEach((card) => {
  const img = card.getAttribute("data-img");
  if (img) card.style.setProperty("--bgimg", `url("${img}")`);
});

// Detail slide-уудын дэвсгэрийг data-bg-ээс уншиж тавих
document.querySelectorAll(".detail").forEach((sec) => {
  const bg = sec.getAttribute("data-bg");
  if (bg) sec.style.setProperty("--detailbg", `url("${bg}")`);
});

// Холбоо барих форм (демо — сервер рүү илгээхгүй)
const contactForm = document.getElementById("contactForm");
const formHint = document.getElementById("formHint");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(contactForm).entries());

  formHint.textContent =
    `Баярлалаа, ${data.name}! "${data.service}" үйлчилгээний хүсэлтийг хүлээн авлаа. ` +
    `${data.contact} хаягаар/дугаараар бид эргэн холбогдоно.`;

  contactForm.reset();
  setTimeout(() => (formHint.textContent = ""), 6500);
});

// ===== Detail Slider + Cinematic =====
const track = document.getElementById("sliderTrack");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");
const dotsWrap = document.getElementById("sliderDots");

if (track && prevBtn && nextBtn && dotsWrap) {
  const slides = Array.from(track.querySelectorAll(".slide"));
  let index = 0;

  // Dot үүсгэх
  dotsWrap.innerHTML = "";
  slides.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "sliderDot" + (i === 0 ? " is-active" : "");
    d.setAttribute("aria-label", `${i + 1}-р слайд`);
    d.addEventListener("click", () => goTo(i, true));
    dotsWrap.appendChild(d);
  });

  const dots = Array.from(dotsWrap.querySelectorAll(".sliderDot"));

  function triggerCinematic(activeSlide) {
    // restart animation trick (зарим browser дээр)
    const inner = activeSlide.querySelector(".detail__inner");
    if (!inner) return;
    inner.style.animation = "none";
    void inner.offsetHeight; // reflow
    inner.style.animation = "";
  }

  function goTo(i, smoothScroll = false) {
    index = (i + slides.length) % slides.length;

    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, di) => dot.classList.toggle("is-active", di === index));

    // Active slide class шинэчлэх (cinematic trigger)
    slides.forEach((s, si) => s.classList.toggle("is-active", si === index));
    triggerCinematic(slides[index]);

    // URL hash-г sync хийх
    const id = slides[index].id;
    if (id) history.replaceState(null, "", `#${id}`);

    // Slider хэсэг рүү зөөлөн очих
    if (smoothScroll) {
      document
        .getElementById("details")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }

  // ===== Auto-play (5s) + Ken Burns restart =====
  let autoplayTimer = null;
  let isHovering = false;

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      if (!isHovering) goTo(index + 1);
    }, 5000);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = null;
  }

  // Hover дээр pause
  const slider = document.getElementById("details");

  slider.addEventListener("mouseenter", () => (isHovering = true));
  slider.addEventListener("mouseleave", () => (isHovering = false));

  // Touch дээр pause
  slider.addEventListener("touchstart", () => (isHovering = true), {
    passive: true,
  });
  slider.addEventListener("touchend", () => (isHovering = false), {
    passive: true,
  });

  // Tab солигдоход pause
  document.addEventListener("visibilitychange", () => {
    document.hidden ? stopAutoplay() : startAutoplay();
  });

  // goTo() дотор ЭНЭ ХЭСЭГ БАЙХ ЁСТОЙ
  function restartKenBurns() {
    const active = slides[index];
    slides.forEach((s) => s.classList.remove("kb-restart"));
    void active.offsetHeight;
    active.classList.add("kb-restart");
  }

  // goTo() дотор:
  slides.forEach((s, si) => s.classList.toggle("is-active", si === index));
  restartKenBurns();

  // Хэрэглэгч дарвал autoplay refresh
  prevBtn.addEventListener("click", startAutoplay);
  nextBtn.addEventListener("click", startAutoplay);
  dotsWrap
    .querySelectorAll(".sliderDot")
    .forEach((d) => d.addEventListener("click", startAutoplay));

  // Эхлүүлэх
  startAutoplay();

  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));

  // Keyboard
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
  });

  // Swipe (mobile)
  let startX = 0;
  let dragging = false;

  track.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
      dragging = true;
    },
    { passive: true },
  );

  track.addEventListener("touchend", (e) => {
    if (!dragging) return;
    const endX =
      e.changedTouches && e.changedTouches[0]
        ? e.changedTouches[0].clientX
        : startX;
    const diff = endX - startX;
    dragging = false;

    if (Math.abs(diff) > 45) {
      if (diff > 0) goTo(index - 1);
      else goTo(index + 1);
    }
  });

  // URL hash (#visa гэх мэт) байвал тухайн slide руу очих
  function hashToSlide() {
    const h = (location.hash || "").replace("#", "");
    if (!h) return;
    const targetIdx = slides.findIndex((s) => s.id === h);
    if (targetIdx >= 0) goTo(targetIdx);
  }

  window.addEventListener("hashchange", hashToSlide);

  // Services карт дээр дарвал slider дээр тухайн slide-ийг сонгох
  document.querySelectorAll('#services a.card[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const hash = a.getAttribute("href");
      if (!hash) return;
      const targetId = hash.replace("#", "");
      const targetIdx = slides.findIndex((s) => s.id === targetId);
      if (targetIdx >= 0) {
        e.preventDefault();
        goTo(targetIdx, true);
      }
    });
  });

  // Эхний төлөв
  slides.forEach((s, si) => s.classList.toggle("is-active", si === index));
  hashToSlide();
  goTo(index);
}

// Барилгын материалын дэлгэрэнгүй дээр дархад Facebook руу шилжих
document
  .getElementById("materials-detail")
  .addEventListener("click", function () {
    window.location.href =
      "https://www.facebook.com/profile.php?id=61558823942296";
  });
document.querySelectorAll(".sliderBtn").forEach((button) => {
  button.addEventListener("click", function () {
    const direction = button.classList.contains("sliderBtn--left") ? -1 : 1;
    goTo(index + direction); // Индекс рүү нэмэх буюу хасах
  });
});
// ===== WEB DETAIL BULLET CLICK → web.html =====
document
  .querySelectorAll('#web .detail__bullets li')
  .forEach((li) => {
    li.style.cursor = "pointer"; // гар заагч
    li.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation(); // slider-ийн click-ийг зогсооно
      window.location.href = "web.html";
    });
  });
  document.querySelectorAll("#interior .detail__bullets li").forEach((li) => {
    li.style.cursor = "pointer"; // гар заагч
    li.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation(); // slider-ийн click-ийг зогсооно
      window.location.href = "design.html";
    });
  });

