document.addEventListener('DOMContentLoaded', function() {
    // Load the about description content
    fetch('content/about-description.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('about-description-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading about description:', error));

    // Load the service description content
    fetch('content/service-description.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('service-description-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading service description:', error));
});