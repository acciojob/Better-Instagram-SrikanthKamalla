//your code here
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");
  let draggedElement = null;

  images.forEach((image) => {
    image.addEventListener("dragstart", (event) => {
      draggedElement = event.target;
      event.target.classList.add("selected");
    });

    image.addEventListener("dragover", (event) => {
      event.preventDefault(); // Necessary to allow dropping
    });

    image.addEventListener("drop", (event) => {
      event.preventDefault();
      if (draggedElement !== event.target) {
        // Swap background images
        let draggedBg = window.getComputedStyle(draggedElement).backgroundImage;
        let targetBg = window.getComputedStyle(event.target).backgroundImage;

        draggedElement.style.backgroundImage = targetBg;
        event.target.style.backgroundImage = draggedBg;
      }
      draggedElement.classList.remove("selected");
      draggedElement = null;
    });

    image.addEventListener("dragend", () => {
      if (draggedElement) {
        draggedElement.classList.remove("selected");
      }
      draggedElement = null;
    });
  });
});