// Dataset
const foodData = [
    {
        name: 'Iga Bakar',
        city: 'Surabaya',
        price: 'IDR 35,000',
        calories: '450 kcal',
        imageUrl: 'assets/img/food/iga-bakar.jpg',
        desc: 'Iga bakar is a delicious and savory dish typical of East Java. Grilled with selected spices, these ribs will surely delight your taste buds.',
        ingredients: 'Beef ribs, spices, soy sauce, shallots, garlic, salt.'
    },
    {
        name: 'Sate Kambing',
        city: 'Malang',
        price: 'IDR 25,000',
        calories: '380 kcal',
        imageUrl: 'assets/img/food/sate-kambing.jpg',
        desc: 'Sate kambing is a popular dish in East Java. Tender goat meat is grilled with tasty peanut sauce.',
        ingredients: 'Goat meat, peanut sauce, shallots, garlic, sweet soy sauce.'
    },
    {
        name: 'Sate Maranggi',
        city: 'Cirebon',
        price: 'IDR 40,000',
        calories: '500 kcal',
        imageUrl: 'assets/img/food/sate-maranggi.jpg',
        desc: 'Sate Maranggi is a famous dish from Cirebon known for its spicy seasonings and unique taste.',
        ingredients: 'Beef, maranggi seasoning, red chili, green chili, garlic.'
    },
    {
        name: 'Empal Gentong',
        city: 'Cirebon',
        price: 'IDR 28,000',
        calories: '360 kcal',
        imageUrl: 'assets/img/food/empal-gentong.jpg',
        desc: 'Empal Gentong is a richly spiced beef soup with traditional seasonings from Cirebon.',
        ingredients: 'Beef, coconut milk, lemongrass, bay leaves, spices.'
    },
];


const drinkData = [
    {
        name: 'Wedang Jahe Merah',
        city: 'Yogyakarta',
        price: 'IDR 15,000',
        calories: '90 kcal',
        imageUrl: 'assets/img/drink/wedang-jahe-merah.jpg',
        desc: 'Wedang Jahe Merah is a traditional Indonesian beverage that is warm and refreshing, made from red ginger, brown sugar, and selected spices.',
        ingredients: 'Red ginger, brown sugar, pandan leaves, cloves.'
    },
    {
        name: 'Es Lemon Tea',
        city: 'Jakarta',
        price: 'IDR 20,000',
        calories: '120 kcal',
        imageUrl: 'assets/img/drink/es-lemon-tea.jpg',
        desc: 'Es Lemon Tea is a refreshing drink made from black tea with added lemon juice and ice cubes. Perfect for hot weather.',
        ingredients: 'Black tea, lemon, sugar, ice cubes.'
    },
    {
        name: 'Es Cincau',
        city: 'Bandung',
        price: 'IDR 10,000',
        calories: '70 kcal',
        imageUrl: 'assets/img/drink/es-cincau.jpg',
        desc: 'Es Cincau is a sweet beverage made from chewy cincau agar-agar, served with coconut milk and brown sugar syrup.',
        ingredients: 'Cincau agar-agar, coconut milk, brown sugar syrup.'
    },
    {
        name: 'Jus Mangga',
        city: 'Surabaya',
        price: 'IDR 18,000',
        calories: '150 kcal',
        imageUrl: 'assets/img/drink/jus-mangga.jpg',
        desc: 'Jus Mangga is a refreshing drink made from fresh mangoes blended to smooth perfection. Enjoy the sweet taste of mango in every sip.',
        ingredients: 'Mango, water, sugar.'
    },
];

// Memilih elemen dari HTML
const cardFood = document.querySelector('#tabMenusFood #cardFood .row');
const cardDrink = document.querySelector('#tabMenusDrink #cardDrink .row');
const carouselFood = document.querySelector('#tabMenusFood #carouselFood .carousel-inner');
const carouselDrink = document.querySelector('#tabMenusDrink #carouselDrink .carousel-inner');
const modalContainer = document.getElementById("modalMenuCardAndCarousel");

// Fungsi untuk membuat modal (digunakan sekali per item)
function createModal(data, idPrefix, index) {
    return `
        <div class="modal fade" id="modal${idPrefix}${index}" tabindex="-1" aria-labelledby="modalLabel${idPrefix}${index}" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content rounded-3 border-0">
                    <div class="modal-body position-relative p-0">
                        <button type="button" class="btn btn-danger position-absolute z-3 rounded-3" style="top: .5rem; right: .5rem" data-bs-dismiss="modal">
                            <i class="fa-solid fa-x"></i>
                        </button>
                        <div class="card border-0 w-100 h-100 rounded-3">
                            <img src="${data.imageUrl}" class="card-img-top custom-card-img-top object-fit-cover rounded-top-3" alt="${data.name}">
                            <div class="card-body">
                                <h5 class="card-title fw-semibold mb-3">${data.name}</h5>
                                <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                                    <p class="fw-normal">${data.city}</p>
                                    <p class="fw-normal">${data.calories}</p>
                                </div>
                                <div class="border-bottom pb-3 mb-3">
                                    <h6 class="card-subtitle fw-semibold">Description</h6>
                                    <p class="card-text">${data.desc}</p>
                                </div>
                                <div class="mb-1">
                                    <h6 class="card-subtitle fw-semibold">Ingredients</h6>
                                </div>
                                <p class="card-text">${data.ingredients}</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <p class="fw-semibold fs-5">${data.price}</p>
                        <a class="btn btn-primary rounded-pill" href="https://play.google.com">Order in App</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Fungsi untuk membuat card
function createCard(data, idPrefix, index) {
    return `
        <div class="col-md-3">
            <div class="card border-0 w-100 h-100 shadow-sm rounded-4 pointer" id="${idPrefix}${index}" data-bs-toggle="tooltip" data-bs-title="Click to see details of ${data.name}" data-aos="fade-up" data-aos-duration="${1000 + index * 200}" data-aos-delay="${50 + index * 50}">
                <img src="${data.imageUrl}" class="card-img-top  object-fit-cover rounded-top-4" alt="${data.name}" height="200">
                <div class="card-body">
                    <h5 class="card-title fw-semibold mb-3">${data.name}</h5>
                    <p class="card-text fw-normal mb-3">${data.city}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="fw-semibold fs-5">${data.price}</p>
                        <p class="fw-normal">${data.calories}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Fungsi untuk membuat carousel item
function createCarousel(data, idPrefix, index, isFirst) {
    return `
        <div class="carousel-item ${isFirst ? 'active' : ''}">
            <div class="d-block p-5 mx-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                <div class="card border-0 w-100 h-100 shadow-sm rounded-4 pointer" id="${idPrefix}${index}">
                    <img src="${data.imageUrl}" class="card-img-top custom-carousel-card-img-top object-fit-cover rounded-top-4" alt="${data.name}" height="150">
                    <div class="card-body">
                        <h5 class="card-title fw-semibold mb-3">${data.name}</h5>
                        <p class="card-text fw-normal mb-3">${data.city}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="fw-semibold fs-6">${data.price}</p>
                            <p class="fw-normal">${data.calories}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Menampilkan card dan carousel
foodData.forEach((item, index) => {
    cardFood.innerHTML += createCard(item, 'food', index);
    carouselFood.innerHTML += createCarousel(item, 'food', index, index === 0);
    modalContainer.innerHTML += createModal(item, 'food', index); // Modal hanya dibuat sekali
});

drinkData.forEach((item, index) => {
    cardDrink.innerHTML += createCard(item, 'drink', index);
    carouselDrink.innerHTML += createCarousel(item, 'drink', index, index === 0);
    modalContainer.innerHTML += createModal(item, 'drink', index); // Modal hanya dibuat sekali
});

document.addEventListener("DOMContentLoaded", function () {
    // Inisialisasi tooltip Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Tambahkan event listener untuk membuka modal dari card dan carousel
    document.querySelectorAll(".pointer").forEach(card => {
        card.addEventListener("click", function () {
            const index = card.id.replace(/\D+/g, "");
            const type = card.id.replace(/[0-9]/g, "");
            const modal = new bootstrap.Modal(document.getElementById(`modal${type}${index}`));

            // Tambahkan event listener untuk menangani fokus
            modal._element.addEventListener('hidden.bs.modal', function () {
                document.activeElement.blur(); // Menghapus fokus setelah modal ditutup
            });

            modal.show();
        });
    });
});