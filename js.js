const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".right");
const prevButton = document.querySelector(".left");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".navigLi p");
  const groups = document.querySelectorAll(".kompetenceknapper > div");

  // Default: Multimediedesign aktiv
  const defaultFilter = "mmd";

  function showGroup(filter) {
    groups.forEach((group) => {
      group.classList.remove("active");
      if (group.classList.contains(filter)) {
        group.classList.add("active");
      }
    });
  }

  function setActiveButton(btn) {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  }

  // Klik-event
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      showGroup(filter);
      setActiveButton(btn);
    });
  });

  // Kør default ved load
  const defaultBtn = document.querySelector(`[data-filter="${defaultFilter}"]`);
  setActiveButton(defaultBtn);
  showGroup(defaultFilter);
});
