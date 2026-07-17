/* ==================================================
   MAIN NAVIGATION
================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector("#main-navigation");

if (menuToggle && mainNavigation) {
    const navigationLinks = mainNavigation.querySelectorAll(
        ".main-navigation-link"
    );

    const focusableElements = mainNavigation.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
        focusableElements[focusableElements.length - 1];

    const openMenu = () => {
        menuToggle.classList.add("is-open");
        mainNavigation.classList.add("is-open");
        document.body.classList.add("menu-open");

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation menu");
        mainNavigation.setAttribute("aria-hidden", "false");

        if (firstFocusableElement) {
            firstFocusableElement.focus();
        }
    };

    const closeMenu = (restoreFocus = true) => {
        const isMenuOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        if (!isMenuOpen) {
            return;
        }

        menuToggle.classList.remove("is-open");
        mainNavigation.classList.remove("is-open");
        document.body.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        mainNavigation.setAttribute("aria-hidden", "true");

        if (restoreFocus) {
            menuToggle.focus();
        }
    };

    const toggleMenu = () => {
        const isMenuOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    menuToggle.addEventListener("click", toggleMenu);

    navigationLinks.forEach((navigationLink) => {
        navigationLink.addEventListener("click", () => {
            closeMenu(false);
        });
    });

    document.addEventListener("keydown", (event) => {
        const isMenuOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        if (!isMenuOpen) {
            return;
        }

        if (event.key === "Escape") {
            closeMenu();
        }

        if (event.key === "Tab") {
            if (
                event.shiftKey &&
                document.activeElement === firstFocusableElement
            ) {
                event.preventDefault();
                lastFocusableElement.focus();
            }

            if (
                !event.shiftKey &&
                document.activeElement === lastFocusableElement
            ) {
                event.preventDefault();
                firstFocusableElement.focus();
            }
        }
    });
}