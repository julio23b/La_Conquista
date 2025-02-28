window.addEventListener("load", () => {
    setTimeout(() => {
        hideLoader();
    }, 4000); 
});

const loader = document.getElementById("loaderPagina");

const hideLoader = () => {
    loader.classList.add("hide_loader");
};
