/* ==================================================
   MAIN NAVIGATION
================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");

if (menuToggle && mainNavigation) {
    const navigationLinks = mainNavigation.querySelectorAll(
        ".main-navigation-link"
    );

    const openMenu = () => {
        menuToggle.classList.add("is-open");
        mainNavigation.classList.add("is-open");
        document.body.classList.add("menu-open");

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Chiudi il menu di navigazione");
        mainNavigation.setAttribute("aria-hidden", "false");
    };

    const closeMenu = () => {
        menuToggle.classList.remove("is-open");
        mainNavigation.classList.remove("is-open");
        document.body.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Apri il menu di navigazione");
        mainNavigation.setAttribute("aria-hidden", "true");
    };

    const toggleMenu = () => {
        const isMenuOpen = menuToggle.getAttribute("aria-expanded") === "true";

        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    menuToggle.addEventListener("click", toggleMenu);

    navigationLinks.forEach((navigationLink) => {
        navigationLink.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}
