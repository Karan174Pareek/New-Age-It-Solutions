// Function to connect to WhatsApp
function connectToWhatsApp() {
    window.location.href = "https://wa.me/8101482088";  // Update with your WhatsApp number
}
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}
//For products
document.querySelectorAll('.details-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        alert('More details about the product will be displayed here.');
    });
});