console.log("Travel App V3 Loaded");

// 거래 추가 버튼 클릭
const btn = document.querySelector(".add-btn");

btn.addEventListener("click", () => {
  const item = prompt("거래 항목 입력 (예: 라멘)");
  const price = prompt("금액 입력 (예: 18)");

  if (!item || !price) return;

  const list = document.querySelector(".card:last-child");

  const row = document.createElement("div");
  row.className = "row";
  row.innerHTML = `
    <span>🍜 ${item}</span>
    <b>-€${price}</b>
  `;

  list.appendChild(row);
});
