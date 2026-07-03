let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// DOM
const btn = document.querySelector(".add-btn");
const historyCard = document.querySelector(".card:last-child");

// 저장
function saveData() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// 렌더링
function render() {
  historyCard.innerHTML = "<h2>🧾 최근 거래</h2>";

  let total = 0;

  transactions.forEach((t, index) => {
    total += Number(t.amount);

    const row = document.createElement(...
