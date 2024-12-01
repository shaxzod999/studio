const allImages = {
  all: [
    "/assets/our-work/Cards.png",
    "/assets/our-work/Cards (1).png",
    "/assets/our-work/Cards (1).png",
    "/assets/our-work/Cards (2).png",
    "/assets/our-work/Cards.png",
    "/assets/our-work/Cards (2).png",
    "/assets/our-work/Cards (3).png",
    "/assets/our-work/Cards (3).png",
  ],
  logotype: [
    "/assets/our-work/Cards.png",
    "/assets/our-work/Cards (3).png",
    "/assets/our-work/Cards (2).png",
  ],
  art: ["/assets/our-work/Cards (1).png", "/assets/our-work/Cards (3).png"],
  "web-game-design": ["/assets/our-work/Cards.png"],
  "game-interface": ["/assets/our-work/Cards (1).png"],
  animation: ["/assets/our-work/Cards (3).png"],
};

function renderCarousel(category) {
  const carousel = document.querySelector(".ourwork-carousel");
  const carouselContainer = document.querySelector(".carousel-container");

  if (!carousel) {
    console.error("Carousel elementi topilmadi! HTML kodini tekshiring.");
    return;
  }

  carousel.innerHTML = "";

  const images = allImages[category];
  if (!images || images.length === 0) {
    console.error(`Kategoriya uchun rasmlar topilmadi: ${category}`);
    return;
  }

  if (images.length <= 6) {
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      carousel.appendChild(img);
    });
  } else {
    const groupSize = 6;
    const groups = [];

    for (let i = 0; i < images.length; i += groupSize) {
      groups.push(images.slice(i, i + groupSize));
    }

    groups.forEach((group) => {
      const slide = document.createElement("div");
      slide.classList.add("carousel-slide");

      group.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        slide.appendChild(img);
      });

      carousel.appendChild(slide);
    });

    if ($(carousel).hasClass("slick-initialized")) {
      $(carousel).slick("unslick");
    }

    $(carousel).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
    });
  }

  const leftArrow = document.createElement("button");
  leftArrow.classList.add("left-arrow");
  leftArrow.innerHTML =
    '<img src="/assets/arrows/Линаа.png" alt="Left Arrow" />';
  leftArrow.addEventListener("click", () => {
    $(carousel).slick("slickPrev");
  });

  const rightArrow = document.createElement("button");
  rightArrow.classList.add("right-arrow");
  rightArrow.innerHTML =
    '<img src="/assets/arrows/Линаа.png" alt="Right Arrow" />';
  rightArrow.addEventListener("click", () => {
    $(carousel).slick("slickNext");
  });

  const arrowsContainer = document.createElement("div");
  arrowsContainer.classList.add("carousel-arrows");
  arrowsContainer.appendChild(leftArrow);
  arrowsContainer.appendChild(rightArrow);

  carouselContainer.appendChild(arrowsContainer);
}

function filterCards(category, button) {
  const buttons = document.querySelectorAll(".filter-buttons button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  if (button) button.classList.add("active");

  renderCarousel(category);
}

$(document).ready(() => {
  renderCarousel("all");
});
