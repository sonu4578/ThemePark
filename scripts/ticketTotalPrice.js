// JavaScript for Ticket Purchase Page
document.getElementById('ticket-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get values from form
    const ticketType = document.getElementById('ticket-type').value;
    const quantity = document.getElementById('quantity').value;
    const totalCostElement = document.getElementById('total-cost');

    // Set ticket prices
    let ticketPrice = 0;

    if (ticketType === 'day-pass') {
        ticketPrice = 50;
    } else if (ticketType === 'annual-pass') {
        ticketPrice = 150;
    } else if (ticketType === 'vip-pass') {
        ticketPrice = 300;
    }

    // Calculate total cost
    const totalCost = ticketPrice * quantity;

    // Display the total cost
    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
});

document.getElementById('quantity').addEventListener('input', function() {
    const ticketType = document.getElementById('ticket-type').value;
    const quantity = document.getElementById('quantity').value;
    const totalCostElement = document.getElementById('total-cost');

    // Set ticket prices
    let ticketPrice = 0;

    if (ticketType === 'day-pass') {
        ticketPrice = 50;
    } else if (ticketType === 'annual-pass') {
        ticketPrice = 150;
    } else if (ticketType === 'vip-pass') {
        ticketPrice = 300;
    }

    // Calculate total cost
    const totalCost = ticketPrice * quantity;

    // Display the total cost
    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
});
