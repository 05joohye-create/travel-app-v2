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

    const row = document.createElement("div");
    row.className = "row";

    row.innerHTML = `
      <span>${t.icon} ${t.name}</span>
      <b>-€${t.amount} <small onclick="deleteItem(${index})" style="color:red;cursor:pointer;margin-left:8px;">✕</small></b>
    `;

    historyCard.appendChild(row);
  });

  // 자동 합산 표시 (있으면 업데이트)
  const todayBox = document.querySelectorAll(".small p")[0];
  const totalBox = document.querySelectorAll(".small p")[1];

  if (todayBox) todayBox.innerText = `€${total.toFixed(2)}`;
  if (totalBox) totalBox.innerText = `€${(total * 2.5).toFixed(2)}`;
}

// 추가
btn.addEventListener("click", () => {
  const name = prompt("항목 (예: 라멘)");
  const amount = prompt("금액 (예: 18)");

  if (!name || !amount) return;

  const item = {
    name,
    amount: parseFloat(amount),
    icon: "🍽️"
  };

  transactions.push(item);
  saveData();
  render();
});

// 삭제
function deleteItem(index) {
  transactions.splice(index, 1);
  saveData();
  render();
}

// 초기 실행
render();
