const productContainer = document.getElementById("products-container");


const productsArray = []

productsArray.push({
    name: 'Black Tea',
    amount: 33, 
    price: 20
});

productsArray.push({
    name: 'Green Tea',
    amount: 12,
    price: 15
});

for(let i=0; i<productsArray.length; i++) {
    const productDiv = document.createElement("div"); 
    productDiv.classList.add("product");

    const productNameDiv = document.createElement("div");
    productNameDiv.innerHTML = productsArray[i].name;
    productDiv.appendChild(productDiv);

    const productAmountDiv = document.createElement("div");
    productAmountDiv.innerHTML = "Ammount:" + productsArray[i].amount
    product.appendChild(productAmountDiv);
}








