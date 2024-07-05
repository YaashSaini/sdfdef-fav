window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
// Function to check if an element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight &&
        rect.right <= window.innerWidth
    );
}

// Event listener for scroll
window.addEventListener("scroll", function() {
    var c1 = document.querySelector(".c1");
    var c2 = document.querySelector(".c2");
    var c3 = document.querySelector(".c3");
    var c4 = document.querySelector(".c4");
    var bb = document.querySelector(".bb");

    // Check if c1 is in viewport
    if (isInViewport(c1)) {
        // Add animation class
        c1.classList.add("animation");

        // Remove the scroll event listener after animation is triggered
        window.removeEventListener("scroll", scrollHandler);
    }
    if (isInViewport(c2)) {
        // Add animation class
        c2.classList.add("animation");

        // Remove the scroll event listener after animation is triggered
        window.removeEventListener("scroll", scrollHandler);
    }
    if (isInViewport(c3)) {
        // Add animation class
        c3.classList.add("animation");

        // Remove the scroll event listener after animation is triggered
        window.removeEventListener("scroll", scrollHandler);
    }
    if (isInViewport(c4)) {
        // Add animation class
        c4.classList.add("animation");

        // Remove the scroll event listener after animation is triggered
        window.removeEventListener("scroll", scrollHandler);
    }
    if (isInViewport(bb)) {
        // Add animation class
        bb.classList.add("animation");

        // Remove the scroll event listener after animation is triggered
        window.removeEventListener("scroll", scrollHandler);
    }
});

// Initial check on page load
window.addEventListener("load", function() {
    var c1 = document.querySelector(".c1");
    if (isInViewport(c1)) {
        c1.classList.add("animation");
    }
});
window.addEventListener("load", function() {
    var c2 = document.querySelector(".c2");
    if (isInViewport(c2)) {
        c2.classList.add("animation");
    }
});
window.addEventListener("load", function() {
    var c3 = document.querySelector(".c3");
    if (isInViewport(c3)) {
        c3.classList.add("animation");
    }
});
window.addEventListener("load", function() {
    var c4 = document.querySelector(".c4");
    if (isInViewport(c4)) {
        c4.classList.add("animation");
    }
});
window.addEventListener("load", function() {
    var bb = document.querySelector(".c4");
    if (isInViewport(bb)) {
        bb.classList.add("animation");
    }
});