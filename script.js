i18next.init(
  {
    lng: "en",
    resources: {
      en: {
        translation: {
          description:
            "Creative /art direction, interaction design. branding, web, motion & ui/ux",
          "OUR WORK": "OUR WORK",
          All: "All",
          Logotype: "Logotype",
          "Web game design": "Web game design",
          "Game interface": "Game interface",
          Animation: "Animation",
          "Welcome to a world where creativity and teztechnology come together to create unique game worlds! We are a team of experienced designers who turn ideas into exciting, living universes. Our services include conceptual art projects, character creation, character design, design":
            "Welcome to a world where creativity and teztechnology come together to create unique game worlds! We are a team of experienced designers who turn ideas into exciting, living universes. Our services include conceptual art projects, character creation, character design, design",
          prices: "prices",
          art: "art",
          from: "from",
          "wEB GAME DESIGN": "wEB GAME DESIGN",
          "Game Interface": "Game Interface",
          Logotype: "Logotype",
          "Choose your packaging": "Choose your packaging",
          Interface: "Interface",
          "Professional custom artwork to suit any taste":
            "Professional custom artwork to suit any taste",
          "Gold pack": "Gold pack",
          "Diamond pack": "Diamond pack",
        },
      },
      ru: {
        translation: {
          description:
            "Креатив / художественное направление, интерактивный дизайн, брендинг, веб, анимация и UI/UX.",
          "OUR WORK": "НАША РАБОТА",
          All: "все",
          Logotype: "Логотип",
          "Web game design": "Дизайн веб-игр",
          "Game interface": "Игровой интерфейс",
          Animation: "Анимация",
          "Welcome to a world where creativity and teztechnology come together to create unique game worlds! We are a team of experienced designers who turn ideas into exciting, living universes. Our services include conceptual art projects, character creation, character design, design":
            "Добро пожаловать в мир, где творчество и технологии объединяются для создания уникальных игровых миров! Мы — команда опытных дизайнеров, которые превращают идеи в захватывающие живые вселенные. Наши услуги включают концептуальные арт-проекты, создание персонажей, дизайн персонажей, дизайн",
          prices: "цены",
          art: "искусство",
          from: "от",
          "wEB GAME DESIGN": "ДИЗАЙН ВЕБ-ИГРЫ",
          "Game Interface": "Игровой интерфейс",
          Logotype: "Логотип",
          "Choose your packaging": "Выберите упаковку",
          Interface: "Интерфейс",
          "Professional custom artwork to suit any taste":
            "Профессиональная работа на заказ на любой вкус",
          "Let’s work together": "Давайте работать вместе",
          "Gold pack": "Золотой пакет",
          "Diamond pack": "Алмаз пакет",
        },
      },
    },
  },
  function (err, t) {
    updateContent();
  }
);

function initializeTranslateSections() {
  const sections = document.querySelectorAll(".translate-section");

  sections.forEach((section) => {
    const enActive = section.querySelector("#en-active");
    const enInactive = section.querySelector("#en-inactive");
    const ruActive = section.querySelector("#ru-active");
    const ruInactive = section.querySelector("#ru-inactive");

    enInactive.addEventListener("click", () => setLanguage("en", section));
    ruInactive.addEventListener("click", () => setLanguage("ru", section));
  });
}

function setLanguage(lang, currentSection) {
  i18next.changeLanguage(lang, function () {
    updateContent();
    updateAllImages(lang, currentSection);
    updateURL(lang);
  });
}

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerText = i18next.t(el.getAttribute("data-i18n"));
  });
}

function updateAllImages(lang, currentSection) {
  const sections = document.querySelectorAll(".translate-section");

  sections.forEach((section) => {
    const enActive = section.querySelector("#en-active");
    const enInactive = section.querySelector("#en-inactive");
    const ruActive = section.querySelector("#ru-active");
    const ruInactive = section.querySelector("#ru-inactive");

    if (lang === "en") {
      enActive.style.display = "block";
      enInactive.style.display = "none";
      ruActive.style.display = "none";
      ruInactive.style.display = "block";
    } else {
      enActive.style.display = "none";
      enInactive.style.display = "block";
      ruActive.style.display = "block";
      ruInactive.style.display = "none";
    }
  });
}

function updateURL(lang) {
  const url = new URL(window.location);
  url.searchParams.set("lang", lang);
  window.history.pushState({}, "", url);
}

(function detectLanguageFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get("lang") || "en";
  setLanguage(lang, null);
})();

initializeTranslateSections();

gsap.registerPlugin(ScrollTrigger);

window.onload = function () {
  gsap.from(".filter-buttons button", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "power3.out",
    delay: 1,
    scrollTrigger: {
      trigger: ".scroll-container",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      once: true,
    },
  });
};

function filterCards(category, button) {
  document.querySelectorAll(".filter-buttons button").forEach((btn) => {
    btn.classList.remove("active");
  });
  button.classList.add("active");

  gsap.to(button, {
    duration: 0.3,
    scale: 1.1,
    ease: "bounce.out",
    yoyo: true,
    repeat: 1,
  });
}

gsap.from(".carousel-container", {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".carousel-container",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    once: true,
  },
});

ScrollTrigger.create({
  trigger: ".carousel-container",
  start: "top 80%",
  onEnter: function () {
    document.querySelector(".carousel-container").classList.add("show");
  },
  onLeave: function () {
    document.querySelector(".carousel-container").classList.remove("show");
  },
});

gsap.from(".about_section-left", {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about_section-left",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    once: true,
  },
  stagger: 0.3,
});

gsap.from(".about_section-right", {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about_section-right",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    once: true,
  },
  stagger: 0.3,
});

gsap.from(".about_section-left img, .about_section-right img", {
  duration: 1,
  opacity: 0,
  y: 30,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about_section-left img, .about_section-right img",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    once: true,
  },
});

gsap.from(".about_section-right p", {
  duration: 1,
  opacity: 0,
  y: 20,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about_section-right p",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    once: true,
  },
});

gsap.from(".prices_section-top", {
  duration: 1.5,
  opacity: 0,
  y: 50,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".prices_section-top",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    once: true,
  },
});

gsap.from(".prices_section-bottom-card", {
  duration: 1.2,
  opacity: 0,
  y: 40,
  stagger: 0.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".prices_section-bottom",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
    once: true,
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".packaging_section-top", {
  duration: 1.5,
  opacity: 0,
  y: 50,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".packaging_section-top",
    start: "top 80%",
    end: "bottom 20%",
    once: true,
    scrub: false,
    markers: false,
  },
});

gsap.from(
  ".packaging_section-bottom-card1, .packaging_section-bottom-card2, .packaging_section-bottom-card3",
  {
    duration: 1.2,
    opacity: 0,
    y: 40,
    stagger: 0.3,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".packaging_section-bottom",
      start: "top 80%",
      end: "bottom 20%", 
      once: true,
      scrub: false,
      markers: false,
    },
  }
);
