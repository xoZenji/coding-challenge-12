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

// Task 2: Updated Metric Cards via Array Conversion
const metricCards = document.querySelectorAll(".metric-card");

Array.from(metricCards).forEach(card =>{
    card.innerHTML += " - Refreshed";
    card.style.backgroundColor = "lime";
});

// Task 3: Implemented Dynamic Inventory List
function addItem(productName) {
    const inventoryList = document.getElementById("inventoryList");
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "product-item");
    listItem.setAttribute("data-product", productName);
    listItem.textContent = productName;

    listItem.addEventListener("click", () =>{
        inventoryList.removeChild(listItem);
    });
    inventoryList.appendChild(listItem);
};