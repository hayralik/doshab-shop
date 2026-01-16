// Меняешь цену только здесь
const PRICE = 4000;

document.getElementById("price-value").textContent = PRICE;

document.getElementById("order-btn").addEventListener("click", () => {
  alert("Заказ оформляется. Следующий шаг — форма заказа 🙂");
});
