const playerPosition = { x: -400.0, y: 1200.0, z: 300.0 };
const pricePerMeter = 5;
let totalEarnings = 0;

const pickPoints = [
    { 
        x: -412.3080749511719, 
        y: 1218.32763671875, 
        z: 324.7181396484375, 
        city: "New York", 
        tourName: "City Tour", 
        vehicle: "Semitruck", 
        jobType: "Prevoz Igrački" // Dodali smo vrstu posla
    },
    { 
        x: -457.32415771484375, 
        y: 1152.080810546875, 
        z: 324.9734802246094, 
        city: "Los Angeles", 
        tourName: "Beach Tour", 
        vehicle: "Tanker Truck", 
        jobType: "Prevoz Eksploziva" // Dodali smo vrstu posla
    },
    { 
        x: -511.28912353515625, 
        y: 1184.92919921875, 
        z: 323.9432373046875, 
        city: "Chicago", 
        tourName: "Museum Tour", 
        vehicle: "Refrigerated Truck", 
        jobType: "Prevoz Brašna" // Dodali smo vrstu posla
    },
    { 
        x: -368.6314392089844, 
        y: 1255.5517578125, 
        z: 327.6026916503906, 
        city: "Miami", 
        tourName: "Beach Tour", 
        vehicle: "Armored Truck", 
        jobType: "Prevoz Nakita" // Dodali smo vrstu posla
    },
    { 
        x: -347.2783203125, 
        y: 1152.3865966796875, 
        z: 324.71673583984375, 
        city: "San Francisco", 
        tourName: "Golden Gate Bridge Tour", 
        vehicle: "Semitruck", 
        jobType: "Prevoz Stakla" // Dodali smo vrstu posla
    }
];

function onJobCompleted(earnings) {
    totalEarnings += earnings;

    const deliveryInfoContainer = document.getElementById('delivery-info'); 
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
}

function onLocationClick(location) {
    console.log(location);  // Provjerite što se nalazi u "location"
    const earnings = calculateEarnings(location);

    Swal.fire({
        title: 'Potvrda ture',
        html: `
            <div style="font-size: 18px; line-height: 1.5; background-color: rgba(0, 0, 0, 0.5); border-radius: 10px;">
                Lokacija: ${location.city}?<br>
                Vozilo: ${location.vehicle}<br>
                Vrsta posla: ${location.jobType}<br> <!-- Dodali smo vrstu posla -->
                Cijena: $${earnings.toFixed(2)}
            </div>
        `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Potvrdi',
        cancelButtonText: 'Odustani',
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById('locations-list').style.display = 'none';
            const infoWindow = document.getElementById('info-window');
            infoWindow.style.display = 'block';

            infoWindow.innerHTML = `
                <div class="tour-title">
                    <h2>Detalji ture: ${location.tourName}</h2>
                </div>
                <div class="tour-city">
                    <p>Grad: ${location.city}</p>
                </div>
                <div class="tour-vehicle">
                    <p>Vozilo: ${location.vehicle}</p>
                </div>
                <div class="tour-jobType"> <!-- Dodali smo vrstu posla -->
                    <p>Vrsta posla: ${location.jobType}</p>
                </div>
                <div class="tour-price">
                    <p>Cijena: $${earnings.toFixed(2)}</p>
                </div>
                <button onclick="closeInfoWindow()">Zatvori</button>
            `;
        }
    });
}

function closeInfoWindow() {
    const infoWindow = document.getElementById('info-window');
    infoWindow.style.display = 'none';
    document.getElementById('locations-list').style.display = 'block';
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
    const deliveryInfoContainer = document.getElementById('delivery-info');
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
        const listItem = document.createElement('div');
        listItem.classList.add('location-item');

        listItem.innerHTML = `
            <div class="location-info">
                <span class="location-name">Mjesto: ${location.tourName}</span><br>
                <span class="location-city">Grad: ${location.city}</span><br>
                <span class="location-vehicle">Vozilo: ${location.vehicle}</span><br>
                <span class="location-jobType">Vrsta posla: ${location.jobType}</span> <!-- Dodali smo vrstu posla -->
            </div>
            <div class="location-cost">$${calculateEarnings(location).toFixed(2)}</div>
        `;

        listItem.addEventListener('click', () => onLocationClick(location));

        locationsList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', updateDeliveryInfo);
