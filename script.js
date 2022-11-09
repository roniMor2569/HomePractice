const productContainer = document.getElementById("products-container");

const product = {
    name: 'Black Tea';
    amaount: 33, 
    price: 20
}

//create main element
const productDiv = document.createElement("div"); 
productDiv.classList("product");

//create name container
const productNameDiv = document.createElement("div");
productNameDiv.innerHTML = product.name;
productDiv.appendChild(productNameDiv);

//create amount container
const productAmountDiv = document.createElement("div");
productAmountDiv.innerHTML = product.amaount;
product.appendChild(productAmountDiv);








const productList = ["Black Tea", "coffe", "Green Tea", "milk"];

for (let i=0; i<productList.length; i++) {
    const product = document.createElement("div");
    product.innerHTML = productList[i];
    product.classList.add("product");
    productContainer.appendChild(product);
}

console.log('done');