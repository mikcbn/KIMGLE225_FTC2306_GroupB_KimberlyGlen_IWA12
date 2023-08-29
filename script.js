// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

const statusElements = document.getElementsByClassName("status");
const reserveButtons = document.getElementsByClassName("reserve");
const checkoutButtons = document.getElementsByClassName("checkout");
const checkinButtons = document.getElementsByClassName("checkin");

for (let i = 0; i < statusElements.length; i++) {
    const statusText = statusElements[i].textContent.trim().toLowerCase();
    const statusInfo = STATUS_MAP[statusText];

    // Update status text color
    statusElements[i].style.color = statusInfo.color;

    // Set button states based on STATUS_MAP
    reserveButtons[i].disabled = !statusInfo.canReserve;
    checkoutButtons[i].disabled = !statusInfo.canCheckout;
    checkinButtons[i].disabled = !statusInfo.canCheckIn;

    // Make buttons grayscale if not selectable
    if (!statusInfo.canReserve) {
        reserveButtons[i].style.filter = "grayscale(100%)";
    }
    if (!statusInfo.canCheckout) {
        checkoutButtons[i].style.filter = "grayscale(100%)";
    }
    if (!statusInfo.canCheckIn) {
        checkinButtons[i].style.filter = "grayscale(100%)";
        checkinButtons[i].style.color = "green"; // Change the text color of the "Check In" button to green
    }
}

// Your new code below this comment line (for each book)

// For book1
const book1Status = document.querySelector('#book1 .status').textContent.trim().toLowerCase();
const book1StatusInfo = STATUS_MAP[book1Status];
document.querySelector('#book1 .status').style.color = book1StatusInfo.color;

// For book2
const book2Status = document.querySelector('#book2 .status').textContent.trim().toLowerCase();
const book2StatusInfo = STATUS_MAP[book2Status];
document.querySelector('#book2 .status').style.color = book2StatusInfo.color;

// For book3
const book3Status = document.querySelector('#book3 .status').textContent.trim().toLowerCase();
const book3StatusInfo = STATUS_MAP[book3Status];
document.querySelector('#book3 .status').style.color = book3StatusInfo.color;

