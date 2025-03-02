// Task 1: Created Revenue Metric Card
const dashboardId = document.getElementById("dashboard");
const dashboardQ = document.querySelector("#dashboard");

const revenueCard = document.createElement("div");

revenueCard.setAttribute("class","metric-card");
revenueCard.setAttribute("id", "revenueCard");

revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$0</p>
`;

dashboardId.appendChild(revenueCard);