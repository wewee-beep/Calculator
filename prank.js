window.onload = function () {
    const bang = document.getElementById("bang");
    const flash = document.getElementById("flash");

    if (bang) {
        bang.play().catch((error) => {
    console.log(error);
});    
    if (flash) {

        setTimeout(() => {
            flash.style.opacity = "0";
        }, 300);

        setTimeout(() => {
            flash.style.display = "none";
        }, 1000);
    }
};
