// Task 1: Created Revenue Metric Card
const dashboardId = document.getElementById("dashboard");
const dashboardQ = document.querySelector("#dashboard");

const revenueCard = document.createElement("div");

revenueCard.setAttribute("class","metric-card");
revenueCard.setAttribute("id", "revenueCard");

revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$0</p>
`; // Added Revenue Card to the Dashboard.

dashboardId.appendChild(revenueCard);

// Task 2: Updated Metric Cards via Array Conversion
const metricCards = document.querySelectorAll(".metric-card");

Array.from(metricCards).forEach(card =>{
    card.innerHTML += " - Refreshed";
    card.style.backgroundColor = "lime";
}); // Updated the metric cards by adding "- Refreshed" and changed the background color to lime.

// Task 3: Implemented Dynamic Inventory List
function addInventoryItem(productName) {
    const inventoryList = document.getElementById("inventoryList");
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "product-item");
    listItem.setAttribute("data-product", productName);
    listItem.textContent = productName;

    listItem.addEventListener("click", () =>{
        inventoryList.removeChild(listItem);
    });
    inventoryList.appendChild(listItem);
}; // Created a function that adds an inventory item to the list and removes it when clicked.

// Task 4: Demonstrated Event Bubbling in Customer Section
const customerSection = document.getElementById("customerSection");
customerSection.addEventListener("click", () => {
  console.log("Customer section has been clicked");
}); // Logs "Customer section has been clicked" to the console when the customer section is clicked.

const customerCards = document.querySelectorAll(".customer-card");
customerCards.forEach((card) => {
  card.style.backgroundColor = "orange";
  card.addEventListener("click", (event) => {
    console.log("Customer card has been clicked");
    event.stopPropagation();
  }); // Logs "Customer card has been clicked" to the console when a customer card is clicked.
});