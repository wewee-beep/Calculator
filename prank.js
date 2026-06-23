window.onload = function () {
    const bang = document.getElementById("bang");
    const flash = document.getElementById("flash");

    if (bang) {
        bang.play().catch(() => {});
    }

    if (flash) {

        setTimeout(() => {
            flash.style.opacity = "0";
        }, 300);

        setTimeout(() => {
            flash.style.display = "none";
        }, 1000);
    }
};