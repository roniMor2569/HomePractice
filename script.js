const productContainer = document.getElementById("products-container");

const productList = ["Black Tea", "Green Tea"];

const blackTea = document.createElement("div");
const greenTea = document.createElement("div");

blackTea.innerHTML = productList[0];
greenTea.innerHTML = productList[1];

blackTea.classList.add("product");
greenTea.classList.add("product");

productContainer.appendChild(blackTea);
productContainer.appendChild(greenTea);
