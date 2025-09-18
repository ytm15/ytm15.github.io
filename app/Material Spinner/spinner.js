function spinner() {
  var spinner = document.createElement("div");
  spinner.classList.add("spinner-container");
  if (localStorage.getItem("WEB_IOS_SPINNER") == "true") {
    spinner.innerHTML = `
    <svg class="spinner" width="30px" height="30px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    <circle class="path" fill="none" stroke-width="7" stroke-linecap="spuare" cx="33" cy="33" r="30"></circle>
    </svg>
    `;
  } else {
    spinner.innerHTML = `
    <svg class="spinner" width="45px" height="45px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    <circle class="path" fill="none" stroke-width="6" stroke-linecap="spuare" cx="33" cy="33" r="30"></circle>
    </svg>
    `;
  }
  spinnerParent.appendChild(spinner);
  if (spinnerParent === document.querySelector("#app")) {
  spinner.classList.add("full-height");
  }
}