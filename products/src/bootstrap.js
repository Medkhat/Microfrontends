import faker from "faker"

const mount = (el) => {
  let products = ""

  for (let i = 0; i < 5; i++) {
    let name = faker.commerce.productName()
    products += `<h4>${name}</h4>`
  }

  el.innerHTML = products
}

/*  
  Context/Situation #1:
  - We are running this file in development in isolation;
  - We are using our local index.html file which definitely has an element with an id of 'dev-products'
  We want to immediately render our app into that element
*/
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products")
  if (el) mount(el) // We are probably running in isolation;
}

/*
  Context/Situation #2:
  - We are running this file in development or production through the container.
  There is no guarantee that an element with an id of 'dev-products' exists.
  We don't want to try tom immediately render the app
*/

export { mount }
