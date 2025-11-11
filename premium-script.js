// Create floating background elements
const floatingElements = document.getElementById('floatingElements');
for (let i = 0; i < 15; i++) {
    const element = document.createElement('div');
    element.classList.add('floating-element');
    
    // Random size and position
    const size = Math.random() * 30 + 10;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.left = `${Math.random() * 100}%`;
    element.style.top = `${Math.random() * 100}%`;
    
    // Random animation duration and delay
    element.style.animationDuration = `${Math.random() * 20 + 10}s`;
    element.style.animationDelay = `${Math.random() * 5}s`;
    
    floatingElements.appendChild(element);
}

// Menu functionality
const menuToggle = document.getElementById('menuToggle');
const overlayMenu = document.getElementById('overlayMenu');
const closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', () => {
    overlayMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    overlayMenu.classList.remove('active');
});

// FAQ functionality
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Product selection and modal
const selectButtons = document.querySelectorAll('.select-btn');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const modalProductTitle = document.getElementById('modalProductTitle');
const priceOptions = document.getElementById('priceOptions');
const orderBtn = document.getElementById('orderBtn');

// Premium Product data with prices
const productData = {
    "WhatsApp Bot": [
        { duration: "1 Month Premium", price: "KSh 500", quality: "Premium Basic" },
        { duration: "3 Months Premium", price: "KSh 1,200", quality: "Premium Standard" },
        { duration: "6 Months Premium", price: "KSh 2,000", quality: "Premium Plus" },
        { duration: "12 Months Premium", price: "KSh 3,500", quality: "Premium Enterprise" }
    ],
    "VPN Service": [
        { duration: "1 Month Premium", price: "KSh 300", quality: "Premium Basic" },
        { duration: "3 Months Premium", price: "KSh 750", quality: "Premium Standard" },
        { duration: "6 Months Premium", price: "KSh 1,300", quality: "Premium Plus" },
        { duration: "12 Months Premium", price: "KSh 2,200", quality: "Premium Ultimate" }
    ],
    "VPS Hosting": [
        { duration: "1 Month Premium", price: "KSh 1,200", quality: "Premium Basic" },
        { duration: "3 Months Premium", price: "KSh 3,200", quality: "Premium Standard" },
        { duration: "6 Months Premium", price: "KSh 5,800", quality: "Premium Plus" },
        { duration: "12 Months Premium", price: "KSh 10,500", quality: "Premium Enterprise" }
    ],
    "Netflix Account": [
        { duration: "1 Month Premium", price: "KSh 150", quality: "4K Ultra HD" },
        { duration: "3 Months Premium", price: "KSh 400", quality: "4K Ultra HD" },
        { duration: "6 Months Premium", price: "KSh 700", quality: "4K Premium" },
        { duration: "12 Months Premium", price: "KSh 1,200", quality: "4K Premium" }
    ],
    "Web Development Class": [
        { duration: "1 Month Premium", price: "KSh 2,500", quality: "Premium Beginner" },
        { duration: "3 Months Premium", price: "KSh 6,500", quality: "Premium Intermediate" },
        { duration: "6 Months Premium", price: "KSh 11,000", quality: "Premium Advanced" },
        { duration: "12 Months Premium", price: "KSh 18,000", quality: "Premium Master" }
    ],
    "Digital Marketing": [
        { duration: "1 Month Premium", price: "KSh 3,500", quality: "Premium Package" },
        { duration: "3 Months Premium", price: "KSh 9,000", quality: "Premium Plus Package" },
        { duration: "6 Months Premium", price: "KSh 16,000", quality: "Premium Pro Package" },
        { duration: "12 Months Premium", price: "KSh 28,000", quality: "Premium Enterprise" }
    ],
    "Spotify Premium": [
        { duration: "1 Month Premium", price: "KSh 200", quality: "Premium Individual" },
        { duration: "3 Months Premium", price: "KSh 500", quality: "Premium Individual" },
        { duration: "6 Months Premium", price: "KSh 900", quality: "Premium Duo" },
        { duration: "12 Months Premium", price: "KSh 1,600", quality: "Premium Family" }
    ],
    "Graphic Design": [
        { duration: "Premium Logo Design", price: "KSh 1,000", quality: "Premium Basic" },
        { duration: "Premium Social Media Kit", price: "KSh 2,500", quality: "Premium Standard" },
        { duration: "Premium Brand Identity", price: "KSh 5,000", quality: "Premium Plus" },
        { duration: "Premium Complete Package", price: "KSh 8,000", quality: "Premium Full Service" }
    ],
    "YouTube Premium": [
        { duration: "1 Month Premium", price: "KSh 250", quality: "Premium Individual" },
        { duration: "3 Months Premium", price: "KSh 650", quality: "Premium Individual" },
        { duration: "6 Months Premium", price: "KSh 1,200", quality: "Premium Family" },
        { duration: "12 Months Premium", price: "KSh 2,200", quality: "Premium Family" }
    ],
    "Cybersecurity": [
        { duration: "Premium Basic Scan", price: "KSh 5,000", quality: "Premium Assessment" },
        { duration: "Premium Penetration Test", price: "KSh 15,000", quality: "Premium Standard" },
        { duration: "Premium Security Audit", price: "KSh 25,000", quality: "Premium Comprehensive" },
        { duration: "Premium Ongoing Protection", price: "KSh 40,000", quality: "Premium Annual Service" }
    ],
    "Mobile App Development": [
        { duration: "1 Month Premium", price: "KSh 4,000", quality: "Premium Beginner" },
        { duration: "3 Months Premium", price: "KSh 10,000", quality: "Premium Intermediate" },
        { duration: "6 Months Premium", price: "KSh 18,000", quality: "Premium Advanced" },
        { duration: "12 Months Premium", price: "KSh 30,000", quality: "Premium Master + Projects" }
    ],
    "AI Tools": [
        { duration: "1 Month Premium", price: "KSh 800", quality: "Premium Access" },
        { duration: "3 Months Premium", price: "KSh 2,000", quality: "Premium Plus Access" },
        { duration: "6 Months Premium", price: "KSh 3,500", quality: "Premium Pro Access" },
        { duration: "12 Months Premium", price: "KSh 6,000", quality: "Premium Full Access" }
    ]
};

let selectedProduct = "";
let selectedOption = null;
let countdownInterval;

selectButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedProduct = button.getAttribute('data-product');
        modalProductTitle.textContent = `${selectedProduct} Premium Options`;
        
        // Clear previous options
        priceOptions.innerHTML = '';
        
        // Add new premium options
        productData[selectedProduct].forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'price-option';
            optionElement.innerHTML = `
                <div>
                    <input type="radio" id="option${index}" name="productOption" value="${index}">
                    <label for="option${index}">${option.duration} - ${option.quality}</label>
                </div>
                <div>${option.price}</div>
            `;
            priceOptions.appendChild(optionElement);
            
            // Add event listener to radio buttons
            const radioBtn = optionElement.querySelector('input');
            radioBtn.addEventListener('change', () => {
                selectedOption = option;
            });
        });
        
        // Show modal
        productModal.style.display = 'flex';
        // Reset to step 1
        document.getElementById('step1').style.display = 'block';
        document.getElementById('step2').style.display = 'none';
        document.getElementById('loadingStep').style.display = 'none';
    });
});

// Order button functionality
orderBtn.addEventListener('click', () => {
    if (!selectedOption) {
        alert('Please select a premium option before ordering.');
        return;
    }
    
    // Hide step 1, show step 2 (contact method selection)
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
});

// Contact method selection
document.getElementById('whatsappBtn').addEventListener('click', () => {
    // Show error message for WhatsApp
    document.getElementById('whatsappMessage').style.display = 'block';
    document.getElementById('telegramMessage').style.display = 'none';
});

document.getElementById('telegramBtn').addEventListener('click', () => {
    // Show success message for Telegram
    document.getElementById('telegramMessage').style.display = 'block';
    document.getElementById('whatsappMessage').style.display = 'none';
    
    // Hide step 2, show loading step after a short delay
    setTimeout(() => {
        document.getElementById('step2').style.display = 'none';
        document.getElementById('loadingStep').style.display = 'flex';
        
        // Start 15-second countdown
        startCountdown();
    }, 1500);
});

// Start 15-second countdown before redirecting
function startCountdown() {
    let seconds = 15;
    const countdownElement = document.getElementById('loadingCountdown');
    countdownElement.textContent = seconds;
    
    countdownInterval = setInterval(() => {
        seconds--;
        countdownElement.textContent = seconds;
        
        if (seconds <= 0) {
            clearInterval(countdownInterval);
            redirectToTelegram();
        }
    }, 1000);
}

// Redirect to Telegram
function redirectToTelegram() {
    // Create premium order message
    const message = `Hello! I would like to order PREMIUM service:\n\nProduct: ${selectedProduct}\nDuration: ${selectedOption.duration}\nQuality: ${selectedOption.quality}\nPrice: ${selectedOption.price}\n\nI'm interested in premium features and support.`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Redirect to Telegram for premium service
    window.location.href = `https://t.me/dxytcv?text=${encodedMessage}`;
}

// Back button functionality
document.getElementById('backToOptions').addEventListener('click', () => {
    // Hide step 2, show step 1
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
    
    // Hide any messages
    document.getElementById('whatsappMessage').style.display = 'none';
    document.getElementById('telegramMessage').style.display = 'none';
    
    // Clear countdown if active
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
});

// Close modal
closeModal.addEventListener('click', () => {
    productModal.style.display = 'none';
    // Reset to step 1 when closing
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('loadingStep').style.display = 'none';
    // Hide any messages
    document.getElementById('whatsappMessage').style.display = 'none';
    document.getElementById('telegramMessage').style.display = 'none';
    
    // Clear countdown if active
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
});

// CTA button scroll to products
document.querySelector('.cta-button').addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// Premium Live Support Button
document.getElementById('liveSupport').addEventListener('click', () => {
    const message = "Hello! I need premium support for SYMOH Premium Shop.";
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/254788729180?text=${encodedMessage}`;
});

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        const description = card.querySelector('.product-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Category filtering
const categoryButtons = document.querySelectorAll('.category-btn');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Premium Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('.newsletter-input').value;
    alert(`Thank you for joining our premium newsletter with ${email}! You'll receive exclusive premium updates and offers.`);
    document.querySelector('.newsletter-input').value = '';
});

// WhatsApp Bot Premium Offer Functionality
const offerPopup = document.getElementById('offerPopup');
const offerTimer = document.getElementById('offerTimer');
const bannerTimer = document.getElementById('bannerTimer');
const offerOrderBtn = document.getElementById('offerOrderBtn');
const closeOffer = document.getElementById('closeOffer');

// Persistent Timer using localStorage for Premium Offer
function initializePremiumOfferTimer() {
    let offerEndTime = localStorage.getItem('premiumOfferEndTime');
    
    // If no timer exists or timer has expired, set a new one for 2 hours
    if (!offerEndTime || parseInt(offerEndTime) < Date.now()) {
        offerEndTime = Date.now() + (2 * 60 * 60 * 1000); // 2 hours from now
        localStorage.setItem('premiumOfferEndTime', offerEndTime.toString());
    }
    
    // Show the popup after a short delay (only if timer is still active)
    if (parseInt(offerEndTime) > Date.now()) {
        setTimeout(() => {
            offerPopup.style.display = 'flex';
        }, 2000);
    }
    
    startPremiumOfferTimer();
}

// Start the premium offer countdown timer
function startPremiumOfferTimer() {
    const offerEndTime = parseInt(localStorage.getItem('premiumOfferEndTime'));
    
    function updateTimer() {
        const now = Date.now();
        const distance = offerEndTime - now;
        
        if (distance < 0) {
            // Offer expired
            offerTimer.textContent = "EXPIRED";
            bannerTimer.textContent = "EXPIRED";
            offerPopup.style.display = 'none';
            
            // Remove expired timer from localStorage
            localStorage.removeItem('premiumOfferEndTime');
            return;
        }
        
        // Calculate hours, minutes, seconds
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Format the timer display
        const timerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        offerTimer.textContent = timerText;
        bannerTimer.textContent = timerText;
        
        // Continue updating
        setTimeout(updateTimer, 1000);
    }
    
    updateTimer();
}

// Order Premium WhatsApp Bot for KSh 100
offerOrderBtn.addEventListener('click', () => {
    const message = "Hello! I would like to purchase the PREMIUM WhatsApp Bot Special Offer for KSh 100! I want premium features and support.";
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/254788729180?text=${encodedMessage}`;
});

// Close the premium offer popup
closeOffer.addEventListener('click', () => {
    offerPopup.style.display = 'none';
});

// Initialize the premium offer system when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializePremiumOfferTimer();
    
    // Add premium badge to all product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const badge = document.createElement('div');
        badge.className = 'premium-badge';
        badge.textContent = 'PREMIUM';
        card.querySelector('.product-image').appendChild(badge);
    });
});
