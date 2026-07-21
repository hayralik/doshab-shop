// Change the price here only
const PRICE = 4000;

document.getElementById("price-value").textContent = PRICE;

document.getElementById("order-btn").addEventListener("click", () => {
  alert("Order is being placed. Next step — order form 🙂");
});