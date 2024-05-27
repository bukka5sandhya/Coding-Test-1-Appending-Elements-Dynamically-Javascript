let myContainerEle = document.getElementById("myContainer");

let headingEle = document.createElement("h1");
headingEle.textContent = "Main heading element appended dynamically";
headingEle.style.color = "#0000ff";
myContainerEle.appendChild(headingEle);
