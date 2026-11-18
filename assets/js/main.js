(() => {
    "use strict";

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = String(new Date().getFullYear());
    }

    if (menuToggle && navigation) {
        const closeMenu = () => {
            navigation.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        };

        menuToggle.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

        document.addEventListener("click", event => {
            if (!navigation.contains(event.target) &&
                !menuToggle.contains(event.target)) {
                closeMenu();
            }
        });
    }
})();
