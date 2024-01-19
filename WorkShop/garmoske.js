const garmoskeElement = document.querySelectorAll(".garmoske");

for (let i = 0; i < garmoskeElement.length; i++) {
  garmoskeElement[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const garmoske = this.nextElementSibling;

    if (garmoske.style.maxHeight) {
      garmoske.style.maxHeight = null;
    } else {
      garmoske.style.maxHeight = garmoske.scrollHeight + "px";
    }
  });
}
