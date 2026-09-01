/* =========================================================
   MAKKI PORTFOLIO
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. PAGE LOADER
    ===================================================== */

    const loader = document.querySelector(".page-loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader?.classList.add("hidden");
        }, 500);
    });


    /* =====================================================
       2. HEADER SCROLL EFFECT
    ===================================================== */

    const header = document.querySelector(".header");

    const handleHeaderScroll = () => {

        if (window.scrollY > 40) {
            header?.classList.add("scrolled");
        } else {
            header?.classList.remove("scrolled");
        }

    };

    window.addEventListener("scroll", handleHeaderScroll);

    handleHeaderScroll();


    /* =====================================================
       3. MOBILE MENU
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-menu a");

    menuToggle?.addEventListener("click", () => {

        mobileMenu?.classList.toggle("active");

        document.body.classList.toggle("menu-open");

        const icon = menuToggle.querySelector("i");

        if (mobileMenu?.classList.contains("active")) {

            if (icon) {
                icon.className = "fa-solid fa-xmark";
            }

        } else {

            if (icon) {
                icon.className = "fa-solid fa-bars";
            }

        }

    });


    /* Close mobile menu after clicking a link */

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu?.classList.remove("active");

            document.body.classList.remove("menu-open");

            const icon = menuToggle?.querySelector("i");

            if (icon) {
                icon.className = "fa-solid fa-bars";
            }

        });

    });


    /* =====================================================
       4. SCROLL REVEAL ANIMATIONS
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal, .skill-card, .project-card, .service-card, .process-item, .journey-item"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =====================================================
       5. STAGGER CARD ANIMATIONS
    ===================================================== */

    const cardGroups = [
        ".skill-card",
        ".service-card",
        ".project-card",
        ".process-item"
    ];


    cardGroups.forEach(selector => {

        const cards =
            document.querySelectorAll(selector);

        cards.forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 0.08}s`;

        });

    });


    /* =====================================================
       6. ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    const updateActiveNavigation = () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* =====================================================
       7. SMOOTH SCROLLING
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            });

        });


    /* =====================================================
       8. HERO ENTRANCE ANIMATION
    ===================================================== */

    const heroElements = [
        ".status-badge",
        ".hero-small-title",
        ".hero-title",
        ".hero-description",
        ".hero-buttons",
        ".hero-socials"
    ];


    heroElements.forEach((selector, index) => {

        const element =
            document.querySelector(selector);

        if (!element) return;


        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";


        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";


        setTimeout(() => {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";

        }, 300 + index * 120);

    });


    /* =====================================================
       9. HERO IMAGE ENTRANCE
    ===================================================== */

    const heroImage =
        document.querySelector(
            ".hero-image-wrapper"
        );


    if (heroImage) {

        heroImage.style.opacity = "0";

        heroImage.style.transform =
            "translateX(40px) scale(0.96)";


        heroImage.style.transition =
            "opacity 1s ease, transform 1s ease";


        setTimeout(() => {

            heroImage.style.opacity = "1";

            heroImage.style.transform =
                "translateX(0) scale(1)";

        }, 700);

    }


    /* =====================================================
       10. FLOATING CARDS
    ===================================================== */

    const floatingCards =
        document.querySelectorAll(
            ".floating-card"
        );


    floatingCards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(20px)";


        card.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";


        setTimeout(() => {

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }, 1100 + index * 250);

    });


    /* =====================================================
       11. MOUSE PARALLAX EFFECT
    ===================================================== */

    const hero =
        document.querySelector(".hero");

    const heroGlow =
        document.querySelector(".hero-image-glow");


    if (hero && heroGlow) {

        hero.addEventListener(
            "mousemove",
            event => {

                const x =
                    (event.clientX /
                    window.innerWidth - 0.5) * 20;

                const y =
                    (event.clientY /
                    window.innerHeight - 0.5) * 20;


                heroGlow.style.transform =
                    `translate(${x}px, ${y}px)`;

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                heroGlow.style.transform =
                    "translate(0, 0)";

            }
        );

    }


    /* =====================================================
       12. PROJECT IMAGE PARALLAX
    ===================================================== */

    const projectImages =
        document.querySelectorAll(
            ".project-image img"
        );


    projectImages.forEach(image => {

        const container =
            image.closest(".project-image");


        container?.addEventListener(
            "mousemove",
            event => {

                const rect =
                    container.getBoundingClientRect();


                const x =
                    ((event.clientX - rect.left) /
                    rect.width - 0.5) * 8;


                const y =
                    ((event.clientY - rect.top) /
                    rect.height - 0.5) * 8;


                image.style.transform =
                    `scale(1.05)
                     translate(${x}px, ${y}px)`;

            }
        );


        container?.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "scale(1) translate(0, 0)";

            }
        );

    });


    /* =====================================================
       13. NUMBER COUNTER ANIMATION
    ===================================================== */

    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );


    const counterObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const counter =
                        entry.target;


                    const target =
                        parseInt(
                            counter.dataset.counter,
                            10
                        );


                    let current = 0;

                    const duration = 1500;

                    const step =
                        target /
                        (duration / 16);


                    const updateCounter = () => {

                        current += step;


                        if (current < target) {

                            counter.textContent =
                                Math.floor(current);

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            counter.textContent =
                                target;

                        }

                    };


                    updateCounter();

                    counterObserver.unobserve(counter);

                });

            },
            {
                threshold: 0.7
            }
        );


    counters.forEach(counter => {

        counterObserver.observe(counter);

    });


    
    /* =====================================================
       14. CONTACT FORM
    ===================================================== */

    const contactForm =
        document.querySelector(".contact-form");


    contactForm?.addEventListener("submit", async event => {

        event.preventDefault();


        const button =
            contactForm.querySelector(
                "button[type='submit']"
            );


        if (!button) return;


        const originalHTML =
            button.innerHTML;


        /* Show loading state */

        button.disabled = true;

        button.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';


        try {

            const formData =
                new FormData(contactForm);


            const response =
                await fetch(
                    "https://api.web3forms.com/submit",
                    {
                        method: "POST",
                        body: formData
                    }
                );


            const data =
                await response.json();


            if (data.success) {

                /* Success */

                button.innerHTML =
                    '<i class="fa-solid fa-check"></i> Message Sent';


                contactForm.reset();


                setTimeout(() => {

                    button.innerHTML =
                        originalHTML;

                    button.disabled = false;

                }, 2500);


            } else {

                /* Web3Forms returned an error */

                button.innerHTML =
                    '<i class="fa-solid fa-xmark"></i> Failed to Send';


                setTimeout(() => {

                    button.innerHTML =
                        originalHTML;

                    button.disabled = false;

                }, 2500);

            }


        } catch (error) {

            /* Network error */

            console.error(
                "Contact form error:",
                error
            );


            button.innerHTML =
                '<i class="fa-solid fa-wifi"></i> Network Error';


            setTimeout(() => {

                button.innerHTML =
                    originalHTML;

                button.disabled = false;

            }, 2500);

        }

    });


    /* =====================================================
       15. CURRENT YEAR
    ===================================================== */

    const year =
        document.querySelector(
            "#year"
        );


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       16. BACK TO TOP
    ===================================================== */

    const backToTop =
        document.querySelector(
            ".back-to-top"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 600) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            }
        );


        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       17. DISABLE ANIMATIONS IF USER PREFERS REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (reducedMotion.matches) {

        document.documentElement.style
            .scrollBehavior = "auto";

    }

});

