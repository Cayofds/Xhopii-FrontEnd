document.addEventListener("DOMContentLoaded", () => {
  fetch("../view/footer.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("footer").innerHTML = data;
    });
  fetch("../view/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("topo-site").innerHTML = data;
    });
});