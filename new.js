window.onload = function () {
    const slider = document.getElementById("slider");

    window.slideLeft = function () {
        slider.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    };

    window.slideRight = function () {
        slider.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    };
};