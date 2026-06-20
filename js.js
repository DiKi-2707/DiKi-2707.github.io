const glow = document.querySelector(".cursor-glow");

// Курсор теперь следует за мышкой мгновенно, без лагов
document.addEventListener("mousemove", (e) => {
    // Сдвигаем кружок так, чтобы его центр был ровно под курсором
    glow.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
});

// Анимация появления блоков при прокрутке страницы (оставляем как было)
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();