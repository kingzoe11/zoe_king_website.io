// Add an event listener for all photo items
document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('click', event => {
        // Create the modal when a photo item is clicked, not on page load
        const modal = document.createElement('div');
        modal.classList.add('photo-modal');
        
        // Create an img element inside the modal
        const img = document.createElement('img');
        img.src = event.target.src;
        img.classList.add('modal-img');

        // Create the close button for the modal
        const closeButton = document.createElement('button');
        closeButton.classList.add('close-modal');
        closeButton.textContent = '×';
        closeButton.addEventListener('click', () => {
            modal.remove(); // Remove the modal when closed
        });

        // Append the elements to the modal
        modal.appendChild(closeButton);
        modal.appendChild(img);
        
        // Append the modal to the body
        document.body.appendChild(modal);
    });
});



function closeModal() {
    const modal = document.querySelector('.photo-modal');
    if (modal) {
        modal.remove();
    }
}
