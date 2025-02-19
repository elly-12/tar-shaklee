document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login successful!");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    document.getElementById("mobile").addEventListener("input", function() {
        let mobileInput = this.value.trim();
        let otpButton= document.getElementById("requestOtpBtn");

        otpButton.disabled = mobileInput.length < 10;
    });

    document.getElementById("requestOtpBtn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevents page reload
    
        let mobile = document.getElementById("mobile").value.trim();
        if (mobile.length < 10) {
            alert("Please enter a valid mobile number.");
            return;
        }
    
        alert("OTP sent to: " + mobile);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Account created successfully!");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let images = [
        "banner.jpg",
        "AgelessWand.jpg",
    ];

    let index = 0;
    let heroImage = document.getElementById("heroImage");

    function changeImage() {
        index = (index + 1) % images.length;
        heroImage.style.opacity = "0";

        setTimeout(() => {
            heroImage.src = images[index];
            heroImage.style.opacity = "1";
        }, 1000);
    }

    setInterval(changeImage, 50000);
});
function addToCart(productName, price) {
    let cartCount = document.getElementById("cart-count");
    let currentCount = parseInt(cartCount.textContent);
    cartCount.textContent = currentCount + 1;

    // Save to localStorage (for persistence)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: productName, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(productName + " has been added to cart!");
}

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.nav-icon')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
/* script for account */
// Sidebar Toggle
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".sidebar").classList.toggle("active");
});

// Form Submit Alert
document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Profile updated successfully!");
});

/* script for checkout */
document.addEventListener("DOMContentLoaded", function () {
    const cartItem = document.querySelector(".cart-item");
    const quantityInput = cartItem.querySelector(".quantity");
    const minusBtn = cartItem.querySelector(".minus");
    const plusBtn = cartItem.querySelector(".plus");
    const subtotalElement = cartItem.querySelector(".subtotal");
    const pricePerItem = parseFloat(cartItem.dataset.price);
    const freightCharges = 0.00; // Set the freight charges value

    const subtotalDisplay = document.getElementById("subtotal");
    const totalDisplay = document.getElementById("total");

    function updateTotals() {
        let quantity = parseInt(quantityInput.value);
        if (isNaN(quantity) || quantity < 1) {
            quantity = 1; // Ensure quantity is always at least 1
        }
        const subtotal = quantity * pricePerItem;
        subtotalElement.textContent = RM${subtotal.toFixed(2)};
        subtotalDisplay.textContent = RM${subtotal.toFixed(2)};

        // Total to pay = Subtotal + Freight Charges
        const totalToPay = subtotal + freightCharges;
        totalDisplay.textContent = RM${totalToPay.toFixed(2)};
    }

    // Handle quantity increase
    plusBtn.addEventListener("click", function () {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateTotals();
    });

    // Handle quantity decrease
    minusBtn.addEventListener("click", function () {
        if (parseInt(quantityInput.value) > 1);
            quantityInput.value = parseInt(quantityInput.value) - 1;
            updateTotals();
        }
    });

    // Handle manual quantity input change
    quantityInput.addEventListener("input", function () {
        updateTotals();
    });

    // Initialize totals on page load
    updateTotals();

    const locationData = {
        "Johor": {
            "Ayer Baloi": ["", ""],
            "Ayer Hitam": ["", ""],
            "Ayer Tawar 2": ["", ""],
            "Ayer Tawar 3": ["", ""],
            "Ayer Tawar 4": ["", ""],
            "Ayer Tawar 5": ["", ""],
            "Bandar": ["", ""],
            "Bandar Penawar": ["", ""],
            "Bandar Tenggara": ["", ""],
            "Batu Anam": ["", ""],
            "Batu Pahat": ["", ""],
            "Bekok": ["", ""],
            "Benut": ["", ""],
            "Bukit Gambir": ["", ""],
            "Bukit Pasir": ["", ""],
            "Chaah": ["", ""],
            "Endau": ["", ""],
            "Gelang Patah": ["", ""],
            "Gerisek": ["", ""],
            "Gugusan Taib Andak": ["", ""],
            "Jementah": ["", ""],
            "Johor Bahru": ["", ""],
            "Johor Bharu": ["", ""],
            "Kahang": ["", ""],
            "Kelapa Sawit Kulai Jaya": ["", ""],
            "Kluang": ["", ""],
            "Kota Tinggi": ["", ""],
            "Kukup": ["", ""],
            "Kulai": ["", ""],
            "Kulai Jaya": ["", ""],
            "Kulaijaya": ["", ""],
            "Labis": ["", ""],
            "Layang-layang": ["", ""],
            "Ledang": ["", ""],
            "Masai": ["", ""],
            "Mersing": ["", ""],
            "Muar": ["", ""],
            "Nusajaya": ["", ""],
            "Pagoh": ["", ""],
            "Paloh": ["", ""],
            "Panchor": ["", ""],
            "Parit Jawa": ["", ""],
            "Parit Raja": ["", ""],
            "Parit Sulong": ["", ""],
            "Pasir Gudang": ["", ""],
            "Pekan Nenas": ["", ""],
        },
        "Kedah": {
            "": ["", ""],
        },
        "Kelantan": {
            "": ["", ""],
        },
        "Melaka": {
            "": ["", ""],
        },
        "Negeri Sembilan": {
            "": ["", ""],
        },
        "Pahang": {
            "": ["", ""],
        },
        "Penang": {
            "": ["", ""],
        },
        "Perak": {
            "": ["", ""],
        },
        "Perlis": {
            "": ["", ""],
        },
        "Sabah": {
            "": ["", ""],
        },
        "Sarawak": {
            "": ["", ""],
        },
        "Selangor": {
            "": ["", ""],
        },
        "Terengganu": {
            "": ["", ""],
        },
        "Kuala Lumpur": {
            "": ["", ""],
        },
        "Putrajaya": {
            "": ["", ""],
        },
        "Labuan": {
            "": ["", ""],
        },
    };
    // Get the select elements
    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");
    const postcodeSelect = document.getElementById("postcode");
    
    // Populate the state dropdown on page load
    document.addEventListener("DOMContentLoaded", function () {
        for (let state in locationData) {
            let option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        }
    });
    
    // Update city dropdown when a state is selected
    stateSelect.addEventListener("change", function () {
        let selectedState = this.value;
        citySelect.innerHTML = '<option value="">Select City</option>';
        postcodeSelect.innerHTML = '<option value="">Select Postcode</option>';
    
        if (selectedState && locationData[selectedState]) {
            Object.keys(locationData[selectedState]).forEach(city => {
                let option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        }
    });
    
    // Update postcode dropdown when a city is selected
    citySelect.addEventListener("change", function () {
        let selectedState = stateSelect.value;
        let selectedCity = this.value;
        postcodeSelect.innerHTML = '<option value="">Select Postcode</option>';
    
        if (selectedState && selectedCity && locationData[selectedState][selectedCity]) {
            locationData[selectedState][selectedCity].forEach(postcode => {
                let option = document.createElement("option");
                option.value = postcode;
                option.textContent = postcode;
                postcodeSelect.appendChild(option);
            });
        }
    });

/* script for index */
document.addEventListener("DOMContentLoaded", function () {
    let images = [
        "banner.jpg",
        "AgelessWand.jpg",
    ];

    let index = 0;
    let heroImage = document.getElementById("heroImage");

    function changeImage() {
        index = (index + 1) % images.length;
        heroImage.style.opacity = "0";

        setTimeout(() => {
            heroImage.src = images[index];
            heroImage.style.opacity = "1";
        }, 1000);
    }

    setInterval(changeImage, 50000);
});

    let cart = [];

    function addToCart(productName, price) {
        // Add product to the cart array
        cart.push({ name: productName, price: price });

        // Update Cart Notification
        alert(productName + " has been added to your cart!");

        // Update Cart Counter (if available)
        let cartCounter = document.getElementById("cart-counter");
        if (cartCounter) {
            cartCounter.textContent = cart.length;
        }
    }

// Function to Add to Cart
function addToCart(productName, price) {
    let cartCount = document.getElementById("cart-count");
    let currentCount = parseInt(cartCount.textContent);
    cartCount.textContent = currentCount + 1;

    // Save to localStorage (for persistence)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: productName, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(productName + " has been added to cart!");
}

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.nav-icon')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/* script for login */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login successful!");
    });

    document.querySelector('.login-btn').addEventListener('click', function() {
        window.location.href='login.html';
    });
    
    document.querySelector('.cancel-btn').addEventListener('click', function() {
        window.location.href='index.html';
    });
});

/* script for signup */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    document.getElementById("mobile").addEventListener("input", function() {
        let mobileInput = this.value.trim();
        let otpButton= document.getElementById("requestOtpBtn");

        otpButton.disabled = mobileInput.length < 10;
    });

    document.getElementById("requestOtpBtn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevents page reload
    
        let mobile = document.getElementById("mobile").value.trim();
        if (mobile.length < 10) {
            alert("Please enter a valid mobile number.");
            return;
        }
    
        alert("OTP sent to: " + mobile);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Account created successfully!");
    });
});

/* script for product */
function increaseQty() {
    let qty = document.getElementById("quantity");
    qty.value = parseInt(qty.value) + 1;
}

function decreaseQty() {
    let qty = document.getElementById("quantity");
    if (parseInt(qty.value) > 1) {
        qty.value = parseInt(qty.value) - 1;
    }
}

/* script for cart */
// Sample cart items
const cartItems = [
    {
        id: 1,
        name: "LCD Monitor",
        image: "images/lcd-monitor.png",
        price: 650,
        quantity: 1
    },
    {
        id: 2,
        name: "HI Gamepad",
        image: "images/gamepad.png",
        price: 550,
        quantity: 2
    }
];

function loadCart() {
    let cartHTML = "";
    let subtotal = 0;

    cartItems.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        cartHTML += `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td>
                    <select onchange="updateQuantity(${index}, this.value)">
                        ${[...Array(10).keys()].map(i => <option value="${i + 1}" ${item.quantity === i + 1 ? "selected" : ""}>${i + 1}</option>).join("")}
                    </select>
                </td>
                <td>$${itemTotal}</td>
            </tr>
        `;
    });

    document.getElementById("cart-items").innerHTML = cartHTML;
    document.getElementById("subtotal").innerText = $${subtotal};
    document.getElementById("total").innerText = $${subtotal};
}

function updateQuantity(index, quantity) {
    cartItems[index].quantity = parseInt(quantity);
    loadCart();
}

// Load cart on page load
document.addEventListener("DOMContentLoaded", loadCart);

// Redirect to checkout page
document.getElementById("checkout-btn").addEventListener("click", function () {
    window.location.href = "checkout.html";
});

// Redirect to account page when clicking the user icon
document.querySelector(".cart-icons img[alt='User']").addEventListener("click", function () {
    window.location.href = "account.html";
});