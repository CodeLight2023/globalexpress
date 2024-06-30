var loader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    loader.classList.add("loader-end");
    loader.addEventListener("transitionend", function() {
        document.body.removeChild(document.querySelector(".preloader"));
    })
})
document.querySelector("#header nav ul li .fa-search").addEventListener("click", () => {
    document.querySelector("#header nav form").classList.toggle('active');
});
window.addEventListener("scroll", () => {
    document.querySelector("#header nav form").classList.remove('active');
})