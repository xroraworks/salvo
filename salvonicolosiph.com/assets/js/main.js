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

/* ==================================================
   CURRENT YEAR
================================================== */

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

/* ==================================================
   HERO SLIDER
================================================== */

const heroSlider = document.querySelector(".hero-slider");

if (heroSlider) {
    const heroSlides = Array.from(
        heroSlider.querySelectorAll(".hero-slide")
    );

    const previousButton = document.querySelector(".hero-prev");
    const nextButton = document.querySelector(".hero-next");

    const currentSlideElement = document.querySelector(".current-slide");
    const totalSlidesElement = document.querySelector(".total-slides");

    let currentSlideIndex = heroSlides.findIndex((slide) =>
        slide.classList.contains("is-active")
    );

    // Se nessuna slide ha la classe is-active,
    // viene considerata attiva la prima.
    if (currentSlideIndex === -1) {
        currentSlideIndex = 0;
        heroSlides[0]?.classList.add("is-active");
    }

    /**
     * Converte un numero nel formato a due cifre.
     * Esempio: 1 diventa "01".
     */
    const formatSlideNumber = (number) => {
        return String(number).padStart(2, "0");
    };

    /**
     * Mostra la slide corrispondente all'indice ricevuto.
     */
    const showSlide = (newIndex) => {
        heroSlides[currentSlideIndex].classList.remove("is-active");

        currentSlideIndex = newIndex;

        heroSlides[currentSlideIndex].classList.add("is-active");

        if (currentSlideElement) {
            currentSlideElement.textContent = formatSlideNumber(
                currentSlideIndex + 1
            );
        }
    };

    /**
     * Mostra la slide successiva.
     */
    const showNextSlide = () => {
        const nextIndex =
            (currentSlideIndex + 1) % heroSlides.length;

        showSlide(nextIndex);
    };

    /**
     * Mostra la slide precedente.
     */
    const showPreviousSlide = () => {
        const previousIndex =
            (currentSlideIndex - 1 + heroSlides.length) %
            heroSlides.length;

        showSlide(previousIndex);
    };

    // Aggiorna il numero totale delle slide.
    if (totalSlidesElement) {
        totalSlidesElement.textContent = formatSlideNumber(
            heroSlides.length
        );
    }

    // Imposta correttamente il contatore iniziale.
    if (currentSlideElement) {
        currentSlideElement.textContent = formatSlideNumber(
            currentSlideIndex + 1
        );
    }

    nextButton?.addEventListener("click", showNextSlide);
    previousButton?.addEventListener("click", showPreviousSlide);
}

/* ==================================================
   SERVICES CATEGORY SWITCH
================================================== */

const servicesSwitch = document.querySelector(".services-switch");

if (servicesSwitch) {

    const servicesButtons = Array.from(
        servicesSwitch.querySelectorAll(".services-switch-button")
    );

    const servicesPanels = Array.from(
        document.querySelectorAll(".services-panel")
    );


    /* ==================================================
       ACTIVATE SERVICES PANEL
    ================================================== */

    const activateServicesPanel = (selectedButton) => {

        const targetPanelId =
            selectedButton.dataset.servicesTarget;

        const targetPanel =
            document.getElementById(targetPanelId);

        if (!targetPanel) {
            return;
        }


        /* Update buttons */

        servicesButtons.forEach((button) => {

            const isSelected =
                button === selectedButton;

            button.classList.toggle(
                "is-active",
                isSelected
            );

            button.setAttribute(
                "aria-selected",
                String(isSelected)
            );

        });


        /* Update panels */

        servicesPanels.forEach((panel) => {

            const isTargetPanel =
                panel === targetPanel;

            panel.classList.toggle(
                "is-active",
                isTargetPanel
            );

            panel.hidden = !isTargetPanel;

        });


        /* Move switch indicator */

        const isPublicCategory =
            targetPanelId === "public-events-panel";

        servicesSwitch.classList.toggle(
            "is-public",
            isPublicCategory
        );

    };


    /* ==================================================
       BUTTON EVENTS
    ================================================== */

    servicesButtons.forEach((button) => {

        button.addEventListener("click", () => {

            activateServicesPanel(button);

        });

    });


    /* ==================================================
       KEYBOARD NAVIGATION
    ================================================== */

    servicesSwitch.addEventListener("keydown", (event) => {

        const currentIndex =
            servicesButtons.indexOf(document.activeElement);

        if (currentIndex === -1) {
            return;
        }

        let newIndex = currentIndex;

        if (
            event.key === "ArrowRight" ||
            event.key === "ArrowDown"
        ) {
            newIndex =
                (currentIndex + 1) %
                servicesButtons.length;
        }

        else if (
            event.key === "ArrowLeft" ||
            event.key === "ArrowUp"
        ) {
            newIndex =
                (
                    currentIndex -
                    1 +
                    servicesButtons.length
                ) %
                servicesButtons.length;
        }

        else {
            return;
        }

        event.preventDefault();

        servicesButtons[newIndex].focus();

        activateServicesPanel(
            servicesButtons[newIndex]
        );

    });

}