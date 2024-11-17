
   // Ensure the script runs after the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('V Bloom Shop Bootstrap.js Loaded!');

    // Enable tooltips across the site
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Enable popovers across the site
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    // Automatically close navbar on mobile after clicking a link
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarLinks = document.querySelectorAll('.nav-link');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true') {
                navbarToggler.click();
            }
        });
    });

    // Product Carousel custom behavior
    const productCarousel = document.querySelector('#productCarousel');
    if (productCarousel) {
        productCarousel.addEventListener('slid.bs.carousel', function (event) {
            console.log(`Product carousel moved to slide: ${event.to}`);
        });
    }

    // Dynamic alerts for adding items to the cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.getAttribute('data-product-name') || 'Item';
            alert(`${productName} has been added to your cart!`);
        });
    });
});