// Function to show the photo info in the modal
function showArtInfo(photoElement) {
    // Get the image src and alt text for title and description
    const photoSrc = photoElement.querySelector('img').src;
    const photoTitle = photoElement.querySelector('img').alt; // You can use this for titles
    
    // Get the new data attributes for detailed photo info
    const photoDate = photoElement.getAttribute('data-date');
    const photoDimensions = photoElement.getAttribute('data-dimensions');
    const photoMaterial = photoElement.getAttribute('data-material');
    const photoAssignment = photoElement.getAttribute('data-assignment');

    // Set the photo preview and details in the modal
    document.getElementById('photo-image').src = photoSrc;
    document.getElementById('photo-title').textContent = photoTitle;

    // Set the additional info fields
    document.getElementById('photo-date').textContent = `Date: ${photoDate}`;
    document.getElementById('photo-dimensions').textContent = `Dimensions: ${photoDimensions}`;
    document.getElementById('photo-material').textContent = `Material: ${photoMaterial}`;
    document.getElementById('photo-assignment').textContent = `Assignment: ${photoAssignment}`;

    // Show the modal
    document.getElementById('photo-info').style.display = 'flex';
}

// Function to close the photo info modal
function closePhotoInfo() {
    document.getElementById('photo-info').style.display = 'none';
}
