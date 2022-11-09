const productContainer = document.getElementById("products-container");

const productList = ["Black Tea", "coffe", "Green Tea"];

for (let i=0; i<productList.length; i++) {
    const product = document.createElement("div");
    product.innerHTML = productList[i];
    product.classList.add("product");
    productContainer.appendChild(product);
}

console.log('done');