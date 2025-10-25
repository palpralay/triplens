const filters = document.getElementById("filters");
document.getElementById("slideLeft").onclick = () => {
  filters.scrollBy({ left: -200, behavior: "smooth" });
};
document.getElementById("slideRight").onclick = () => {
  filters.scrollBy({ left: 200, behavior: "smooth" });
};
