export default function() {

    document.querySelectorAll(".accordion__item").forEach(item => {
        item.querySelector(".accordion__header").addEventListener('click', () => {
            item.querySelector(".accordion__content").classList.toggle("visible");
            item.classList.toggle("active");
        });
    });
}