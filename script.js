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