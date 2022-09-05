let element = document.getElementById("btn-dark");
console.log(element);

element.addEventListener("click", darkMode);

function darkMode() {
  let lightsOff = document.body;
  lightsOff.classList.toggle("dark-mode");
  element.classList.toggle("dark-mode");

  if (element.innerText === "DARK") {
    element.innerText = "LIGHT";
  } else {
    element.innerText = "DARK";
  }
}
