document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        const responseElement = document.getElementById('formResponse');
        responseElement.textContent = data;
        responseElement.style.color = 'green';
        form.reset();
    })
    .catch(error => {
        const responseElement = document.getElementById('formResponse');
        responseElement.textContent = 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.';
        responseElement.style.color = 'red';
    });
});
