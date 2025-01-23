// Function to show the photo info in the modal
function showPhotoInfo(photoElement) {
    // Get the image src and alt text for title and description
    const photoSrc = photoElement.querySelector('img').src;
    const photoTitle = photoElement.querySelector('img').alt; // You can use this for titles
    
    // Get the new data attributes for detailed photo info
    const photoLocation = photoElement.getAttribute('data-location');
    const photoDate = photoElement.getAttribute('data-date');
    const photoDevice = photoElement.getAttribute('data-device');
    const photoDimensions = photoElement.getAttribute('data-dimensions');
    const photoISO = photoElement.getAttribute('data-iso');
    const photoAperture = photoElement.getAttribute('data-aperture');
    const photoShutterSpeed = photoElement.getAttribute('data-shutter-speed');
    const photoFocalLength = photoElement.getAttribute('data-focal-length');

    // Set the photo preview and details in the modal
    document.getElementById('photo-image').src = photoSrc;
    document.getElementById('photo-title').textContent = photoTitle;

    // Set the additional info fields
    document.getElementById('photo-location').textContent = `Location: ${photoLocation}`;
    document.getElementById('photo-date').textContent = `Date: ${photoDate}`;
    document.getElementById('photo-device').textContent = `Device: ${photoDevice}`;
    document.getElementById('photo-dimensions').textContent = `Dimensions: ${photoDimensions}`;
    document.getElementById('photo-iso').textContent = `ISO: ${photoISO}`;
    document.getElementById('photo-aperture').textContent = `Aperture: ${photoAperture}`;
    document.getElementById('photo-shutter-speed').textContent = `Shutter Speed: ${photoShutterSpeed}`;
    document.getElementById('photo-focal-length').textContent = `Focal Length: ${photoFocalLength}`;

    // Show the modal
    document.getElementById('photo-info').style.display = 'flex';
}

// Function to close the photo info modal
function closePhotoInfo() {
    document.getElementById('photo-info').style.display = 'none';
}
