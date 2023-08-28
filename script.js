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

// Edit below line

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

  // Make buttons grayscale
  reserveButtons[i].style.color = "black";
  checkoutButtons[i].style.color = "black";
  checkinButtons[i].style.color = "black";
}
