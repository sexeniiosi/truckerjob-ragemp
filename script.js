const playerPosition = { x: -400.0, y: 1200.0, z: 300.0 };
const pricePerMeter = 5;
let totalEarnings = 0;

const pickPoints = [
    { x: -412.3080749511719, y: 1218.32763671875, z: 324.7181396484375 },
    { x: -457.32415771484375, y: 1152.080810546875, z: 324.9734802246094 },
    { x: -511.28912353515625, y: 1184.92919921875, z: 323.9432373046875 },
    { x: -368.6314392089844, y: 1255.5517578125, z: 327.6026916503906 },
    { x: -347.2783203125, y: 1152.3865966796875, z: 324.71673583984375 }
];

function onJobCompleted(earnings) {
    totalEarnings += earnings;

    const deliveryInfoContainer = document.getElementById('delivery-info-container');
    const infoMessage = document.createElement('div');
    infoMessage.classList.add('info-message');

    infoMessage.innerHTML = `
        <p>Job completed successfully!</p>
        <p>Earnings: $$${earnings.toFixed(2)}</p>
        <p>Total earnings: $$${totalEarnings.toFixed(2)}</p>
    `;

    deliveryInfoContainer.appendChild(infoMessage);

    setTimeout(() => {
        infoMessage.remove();
    }, 5000);

    const randomCheckpoint = generateRandomCoordinates();
    mp.game.ui.setNewWaypoint(randomCheckpoint.x, randomCheckpoint.y);

    mp.players.local.freezePosition(true);
    setTimeout(() => {
        mp.players.local.freezePosition(false);
    }, 5000);
}

function onLocationClick(location) {
    const earnings = calculateEarnings(location);
    mp.trigger('playerStartTruckWork', [playerPosition, location, earnings]);

    const deliveryInfoContainer = document.getElementById('delivery-info-container');
    const infoMessage = document.createElement('div');
    infoMessage.classList.add('info-message');

    const distance = calculateDistance(playerPosition, location);
    const cost = distance * pricePerMeter;

    infoMessage.innerHTML = `
        <p>Pickup Point: (${location.x}, ${location.y}, ${location.z})</p>
        <p>Distance: $${distance.toFixed(2)} meters</p>
        <p>Cost: $$${cost.toFixed(2)}</p>
        <p>You need to deliver the cargo to this location.</p>
    `;

    deliveryInfoContainer.appendChild(infoMessage);

    setTimeout(() => {
        infoMessage.remove();
    }, 5000);
}

function onKeyPress(keyCode) {
    if (keyCode === 89) {
        updateDeliveryInfo();
    }
}

document.addEventListener('keydown', (event) => {
    onKeyPress(event.keyCode);
});

function closeMenu() {
    const deliveryInfoContainer = document.getElementById('delivery-info-container');
    deliveryInfoContainer.style.display = 'none';
}

function generateRandomCoordinates() {
    const randomX = Math.random() * (1000 - (-1000)) + (-1000);
    const randomY = Math.random() * (1000 - (-1000)) + (-1000);
    return { x: randomX, y: randomY, z: 0.0 };
}

function calculateEarnings(location) {
    const distance = calculateDistance(playerPosition, location);
    return distance * pricePerMeter;
}

function calculateDistance(point1, point2) {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    const dz = point1.z - point2.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function updateDeliveryInfo() {
    const locationsList = document.getElementById('locations-list');
    locationsList.innerHTML = '';

    pickPoints.forEach(location => {
        const distance = calculateDistance(playerPosition, location);
        const cost = distance * pricePerMeter;

        const listItem = document.createElement('li');
        listItem.classList.add('location-item');
        listItem.classList.add('clickable');

        listItem.innerHTML = `
            <span class="location-name">Pickup Point:</span><br>
            <span class="location-distance">Distance: $${distance.toFixed(2)} meters</span><br>
            <span class="location-cost">Cost: $$${cost.toFixed(2)}</span>
        `;

        listItem.addEventListener('click', () => onLocationClick(location));

        locationsList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', updateDeliveryInfo);
