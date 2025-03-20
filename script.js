document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");
  let draggedElement = null;

  images.forEach((image) => {
    image.addEventListener("dragstart", (e) => {
      draggedElement = e.target;
      e.dataTransfer.setData("text/plain", draggedElement.id);
      setTimeout(() => e.target.classList.add("hidden"), 0);
    });

    image.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    image.addEventListener("drop", (e) => {
      e.preventDefault();
      
      if (!draggedElement || draggedElement === e.target) return;

      // Swap background images
      let draggedBg = window.getComputedStyle(draggedElement).backgroundImage;
      let targetBg = window.getComputedStyle(e.target).backgroundImage;
      draggedElement.style.backgroundImage = targetBg;
      e.target.style.backgroundImage = draggedBg;
    });

    image.addEventListener("dragend", (e) => {
      e.target.classList.remove("hidden");
      draggedElement = null;
    });
  });
});
