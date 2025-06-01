import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  let cart = getLocalStorage("so-cart"); // Get the existing cart
  if (!Array.isArray(cart)) { // Ensure cart is an array
    cart = [];
  }
  cart.push(product); // Add the new product to the cart array
  setLocalStorage("so-cart", cart); // Save the updated cart back to local storage
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
