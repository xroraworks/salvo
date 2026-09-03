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

/* ==================================================
   PROJECT GALLERY TOGGLE
================================================== */

const initProjectGalleryToggle = () => {
    const toggleButton = document.querySelector("[data-gallery-toggle]");
    const hiddenGallery = document.querySelector("#project-gallery-more");

    if (!toggleButton || !hiddenGallery) {
        return;
    }

    const label = toggleButton.querySelector(
        ".project-gallery-toggle-label"
    );

    toggleButton.addEventListener("click", () => {
        const isExpanded =
            toggleButton.getAttribute("aria-expanded") === "true";

        toggleButton.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );

        if (isExpanded) {
            hiddenGallery.hidden = true;
            hiddenGallery.classList.remove("is-visible");

            if (label) {
                label.textContent = "View all photographs";
            }

            toggleButton.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            return;
        }

        hiddenGallery.hidden = false;

        requestAnimationFrame(() => {
            hiddenGallery.classList.add("is-visible");
        });

        if (label) {
            label.textContent = "Show fewer photographs";
        }
    });
};

initProjectGalleryToggle();

/* ==================================================
   CONTACT FAQ
================================================== */

const initContactFaq = () => {

    const faqQuestions = document.querySelectorAll(
        ".contact-faq-question"
    );

    if (!faqQuestions.length) {
        return;
    }

    faqQuestions.forEach((question) => {

        question.addEventListener("click", () => {

            const answerId =
                question.getAttribute("aria-controls");

            const answer =
                document.getElementById(answerId);

            if (!answer) {
                return;
            }

            const isExpanded =
                question.getAttribute("aria-expanded") === "true";

            question.setAttribute(
                "aria-expanded",
                String(!isExpanded)
            );

            if (isExpanded) {

                answer.hidden = true;
                answer.classList.remove("is-opening");

                return;
            }

            answer.hidden = false;

            answer.classList.remove("is-opening");

            requestAnimationFrame(() => {
                answer.classList.add("is-opening");
            });

        });

    });

};

initContactFaq();

(function () {
    var prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || !("IntersectionObserver" in window)) {
        return;
    }

    document.body.classList.add("reveal-ready");

    var targets = document.querySelectorAll("[data-reveal]");

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach(function (target) {
        observer.observe(target);
    });
})();

/* ==================================================
   COOKIE CONSENT MANAGER
================================================== */

const cookieConsent = (() => {

    /* ==================================================
       CONFIGURATION
    ================================================== */

    const STORAGE_KEY = "salvo_cookie_consent";
    const CONSENT_VERSION = 1;

    const DEFAULT_CONSENT = {
        necessary: true,
        analytics: false,
        marketing: false
    };


    /* ==================================================
       CREATE CONSENT OBJECT
    ================================================== */

    const createConsent = (preferences = {}) => {

        return {
            version: CONSENT_VERSION,

            necessary: true,

            analytics:
                preferences.analytics === true,

            marketing:
                preferences.marketing === true,

            updatedAt:
                new Date().toISOString()
        };

    };


    /* ==================================================
       READ SAVED CONSENT
    ================================================== */

    const getSavedConsent = () => {

        try {

            const storedConsent =
                localStorage.getItem(STORAGE_KEY);

            if (!storedConsent) {
                return null;
            }

            const parsedConsent =
                JSON.parse(storedConsent);


            /*
             * If the consent structure changes in the future,
             * an old saved consent will no longer be considered valid.
             */

            if (
                !parsedConsent ||
                parsedConsent.version !== CONSENT_VERSION
            ) {
                return null;
            }


            return {
                version: parsedConsent.version,

                necessary: true,

                analytics:
                    parsedConsent.analytics === true,

                marketing:
                    parsedConsent.marketing === true,

                updatedAt:
                    parsedConsent.updatedAt || null
            };

        } catch (error) {

            console.warn(
                "Unable to read cookie consent preferences.",
                error
            );

            return null;

        }

    };


    /* ==================================================
       SAVE CONSENT
    ================================================== */

    const saveConsent = (preferences) => {

        const consent =
            createConsent(preferences);

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(consent)
            );

        } catch (error) {

            console.warn(
                "Unable to save cookie consent preferences.",
                error
            );

        }


        applyConsent(consent);

        return consent;

    };


    /* ==================================================
       APPLY CONSENT
    ================================================== */

    const applyConsent = (consent) => {

        /*
         * GOOGLE CONSENT MODE
         *
         * This will become active when Google Analytics
         * and the Google tag are added to the website.
         */

        if (typeof window.gtag === "function") {

            window.gtag(
                "consent",
                "update",
                {
                    analytics_storage:
                        consent.analytics
                            ? "granted"
                            : "denied",

                    ad_storage:
                        consent.marketing
                            ? "granted"
                            : "denied",

                    ad_user_data:
                        consent.marketing
                            ? "granted"
                            : "denied",

                    ad_personalization:
                        consent.marketing
                            ? "granted"
                            : "denied"
                }
            );

        }


        /*
         * ANALYTICS
         *
         * Google Analytics will be initialised here
         * after its configuration is added.
         */

        if (consent.analytics) {

            document.documentElement.classList.add(
                "consent-analytics"
            );

        } else {

            document.documentElement.classList.remove(
                "consent-analytics"
            );

        }


        /*
         * MARKETING
         *
         * Meta Pixel will be initialised only when
         * marketing consent has been granted.
         */

        if (consent.marketing) {

            document.documentElement.classList.add(
                "consent-marketing"
            );

        } else {

            document.documentElement.classList.remove(
                "consent-marketing"
            );

        }


        /*
         * Custom event.
         *
         * Other website components can listen to this
         * event without depending directly on this manager.
         */

        window.dispatchEvent(
            new CustomEvent(
                "cookieConsentUpdated",
                {
                    detail: consent
                }
            )
        );

    };


    /* ==================================================
       ACCEPT ALL
    ================================================== */

    const acceptAll = () => {

        return saveConsent({
            necessary: true,
            analytics: true,
            marketing: true
        });

    };


    /* ==================================================
       REJECT NON-ESSENTIAL
    ================================================== */

    const rejectNonEssential = () => {

        return saveConsent({
            necessary: true,
            analytics: false,
            marketing: false
        });

    };


    /* ==================================================
       SAVE CUSTOM PREFERENCES
    ================================================== */

    const savePreferences = ({
        analytics = false,
        marketing = false
    } = {}) => {

        return saveConsent({
            necessary: true,
            analytics,
            marketing
        });

    };


    /* ==================================================
       CHECK CONSENT
    ================================================== */

    const hasConsent = (category) => {

        const consent =
            getSavedConsent();

        if (!consent) {
            return false;
        }


        if (category === "necessary") {
            return true;
        }


        return consent[category] === true;

    };


    /* ==================================================
       CHECK IF USER HAS MADE A CHOICE
    ================================================== */

    const hasUserChoice = () => {

        return getSavedConsent() !== null;

    };


    /* ==================================================
       RESET CONSENT
    ================================================== */

    const resetConsent = () => {

        try {

            localStorage.removeItem(
                STORAGE_KEY
            );

        } catch (error) {

            console.warn(
                "Unable to reset cookie consent preferences.",
                error
            );

        }


        applyConsent(
            createConsent(DEFAULT_CONSENT)
        );


        window.dispatchEvent(
            new CustomEvent(
                "cookieConsentReset"
            )
        );

    };


    /* ==================================================
       INITIALISE CONSENT
    ================================================== */

    const init = () => {

        const savedConsent =
            getSavedConsent();


        if (savedConsent) {

            applyConsent(savedConsent);

            return;

        }


        /*
         * No choice has been made yet.
         *
         * Only necessary functionality is allowed.
         */

        applyConsent(
            createConsent(DEFAULT_CONSENT)
        );


        /*
         * The cookie banner will listen to this event
         * and open itself when no saved choice exists.
         */

        window.dispatchEvent(
            new CustomEvent(
                "cookieConsentRequired"
            )
        );

    };


    /* ==================================================
       PUBLIC API
    ================================================== */

    return {

        init,

        acceptAll,

        rejectNonEssential,

        savePreferences,

        getConsent:
            getSavedConsent,

        hasConsent,

        hasUserChoice,

        resetConsent

    };

})();


/* ==================================================
   INITIALISE COOKIE CONSENT
================================================== */

cookieConsent.init();


/* ==================================================
   EXPOSE COOKIE CONSENT API
================================================== */

window.cookieConsent =
    cookieConsent;

/* ==================================================
   COOKIE CONSENT INTERFACE
================================================== */

const initCookieConsentInterface = () => {

    const consentDialog =
        document.querySelector("#cookie-consent");

    if (
        !consentDialog ||
        !window.cookieConsent
    ) {
        return;
    }


    /* ==================================================
       ELEMENTS
    ================================================== */

    const mainView =
        consentDialog.querySelector(
            '[data-cookie-view="main"]'
        );

    const preferencesView =
        consentDialog.querySelector(
            '[data-cookie-view="preferences"]'
        );

    const customizeButton =
        consentDialog.querySelector(
            "[data-cookie-customize]"
        );

    const backButton =
        consentDialog.querySelector(
            "[data-cookie-back]"
        );

    const acceptButton =
        consentDialog.querySelector(
            "[data-cookie-accept]"
        );

    const rejectButtons =
        consentDialog.querySelectorAll(
            "[data-cookie-reject]"
        );

    const saveButton =
        consentDialog.querySelector(
            "[data-cookie-save]"
        );

    const analyticsInput =
        consentDialog.querySelector(
            "[data-cookie-analytics]"
        );

    const marketingInput =
        consentDialog.querySelector(
            "[data-cookie-marketing]"
        );


    /* ==================================================
       OPEN DIALOG
    ================================================== */

    const openConsentDialog = (
        view = "main"
    ) => {

        consentDialog.hidden = false;

        document.body.classList.add(
            "cookie-consent-open"
        );

        if (view === "preferences") {

            showPreferences();

        } else {

            showMainView();

        }

    };


    /* ==================================================
       CLOSE DIALOG
    ================================================== */

    const closeConsentDialog = () => {

        consentDialog.hidden = true;

        document.body.classList.remove(
            "cookie-consent-open"
        );

    };


    /* ==================================================
       MAIN VIEW
    ================================================== */

    const showMainView = () => {

        if (!mainView || !preferencesView) {
            return;
        }

        mainView.hidden = false;
        preferencesView.hidden = true;

        requestAnimationFrame(() => {

            customizeButton?.focus();

        });

    };


    /* ==================================================
       PREFERENCES VIEW
    ================================================== */

    const showPreferences = () => {

        if (!mainView || !preferencesView) {
            return;
        }


        const savedConsent =
            window.cookieConsent.getConsent();


        if (analyticsInput) {

            analyticsInput.checked =
                savedConsent?.analytics === true;

        }


        if (marketingInput) {

            marketingInput.checked =
                savedConsent?.marketing === true;

        }


        mainView.hidden = true;
        preferencesView.hidden = false;


        requestAnimationFrame(() => {

            backButton?.focus();

        });

    };


    /* ==================================================
       ACCEPT ALL
    ================================================== */

    const acceptAll = () => {

        window.cookieConsent.acceptAll();

        closeConsentDialog();

    };


    /* ==================================================
       REJECT NON-ESSENTIAL
    ================================================== */

    const rejectNonEssential = () => {

        window.cookieConsent.rejectNonEssential();

        closeConsentDialog();

    };


    /* ==================================================
       SAVE PREFERENCES
    ================================================== */

    const savePreferences = () => {

        window.cookieConsent.savePreferences({

            analytics:
                analyticsInput?.checked === true,

            marketing:
                marketingInput?.checked === true

        });

        closeConsentDialog();

    };


    /* ==================================================
       BUTTON EVENTS
    ================================================== */

    customizeButton?.addEventListener(
        "click",
        showPreferences
    );


    backButton?.addEventListener(
        "click",
        showMainView
    );


    acceptButton?.addEventListener(
        "click",
        acceptAll
    );


    rejectButtons.forEach((button) => {

        button.addEventListener(
            "click",
            rejectNonEssential
        );

    });


    saveButton?.addEventListener(
        "click",
        savePreferences
    );


    /* ==================================================
       OPEN COOKIE SETTINGS
    ================================================== */

    document.addEventListener(
        "click",
        (event) => {

            const settingsButton =
                event.target.closest(
                    "[data-cookie-settings]"
                );

            if (!settingsButton) {
                return;
            }

            event.preventDefault();

            openConsentDialog(
                "preferences"
            );

        }
    );


    /* ==================================================
       INITIAL STATE
    ================================================== */

    if (
        !window.cookieConsent.hasUserChoice()
    ) {

        openConsentDialog(
            "main"
        );

    }


    /* ==================================================
       PUBLIC OPEN EVENT
    ================================================== */

    window.addEventListener(
        "cookieConsentRequired",
        () => {

            openConsentDialog(
                "main"
            );

        }
    );

};


/* ==================================================
   INITIALISE COOKIE CONSENT INTERFACE
================================================== */

initCookieConsentInterface();