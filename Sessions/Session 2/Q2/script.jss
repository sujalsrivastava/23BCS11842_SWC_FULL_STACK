const itemList = document.getElementById("itemList");

// Render 1000 items dynamically
let html = "";

for (let i = 1; i <= 1000; i++) {
    html += `
        <div class="item">
            <span>Item ${i}</span>
            <button class="delete-btn">Delete</button>
        </div>
    `;
}

itemList.innerHTML = html;

// Single event listener (Event Delegation)
itemList.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }

});
