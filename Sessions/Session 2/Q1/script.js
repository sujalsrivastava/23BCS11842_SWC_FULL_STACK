function openTab(tabId, element) {

    // Hide all content sections
    const contents = document.querySelectorAll(".content");
    contents.forEach(content => {
        content.classList.remove("active-content");
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.classList.remove("active");
    });

    // Show selected content
    document.getElementById(tabId).classList.add("active-content");

    // Highlight selected tab
    element.classList.add("active");
}
