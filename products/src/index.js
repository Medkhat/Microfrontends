import faker from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  let name = faker.commerce.productName();
  products += `<h4>${name}</h4>`;
}

document.body.innerHTML = products;
