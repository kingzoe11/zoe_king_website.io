// Function to toggle between tabs
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach((tab) => {
        tab.classList.add('hidden');
    });

    const activeTab = document.getElementById(tabName);
    activeTab.classList.remove('hidden');
}

// Function to open the modal with the class description
function openClassDescription(className, description) {
    const modal = document.getElementById("class-modal");
    const classTitle = document.getElementById("class-title");
    const classDesc = document.getElementById("class-desc");

    // Set modal content
    classTitle.textContent = className;
    classDesc.textContent = description;

    // Display the modal
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("class-modal");
    modal.style.display = "none";
}

// Add event listeners to table rows with the class-item class
document.querySelectorAll('.class-item').forEach(item => {
    item.addEventListener('click', () => {
        const className = item.querySelector('.class-name').textContent;
        const description = item.getAttribute('data-description');
        openClassDescription(className, description);
    });
});

// Close the modal when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', closeModal);

// Close the modal when clicking outside the modal content
document.getElementById('class-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('class-modal')) {
        closeModal();
    }
});
