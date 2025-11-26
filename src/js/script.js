// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");
accordeon.forEach(accordeon => {
    accordeon.addEventListener("click", (event) => {
        accordeon.querySelectorAll("details").forEach((det) => (det.open = false)))