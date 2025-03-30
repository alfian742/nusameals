// Custom navbar
document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('#customNavbar .nav-link');
    const sections = document.querySelectorAll('section');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const offset = 84;

    function updateNavbar() {
        const scrollPosition = window.pageYOffset + offset;

        sections.forEach(function (section) {
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`);

            if (navLink) {
                const isSectionActive = section.offsetTop <= scrollPosition &&
                    section.offsetTop + section.offsetHeight > scrollPosition;

                navLink.classList.toggle('active', isSectionActive);
            }
        });

        // Tampilkan/sembunyikan tombol scrollToTop
        scrollToTopBtn.style.display = window.pageYOffset > 200 ? 'block' : 'none';
    }

    window.addEventListener('scroll', updateNavbar);
    window.addEventListener('resize', updateNavbar);

    function smoothScrollTo(targetOffset) {
        const startPosition = window.pageYOffset;
        const distance = targetOffset - startPosition;
        const duration = 800;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easing = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress;

            window.scrollTo(0, startPosition + distance * easing);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    navbarLinks.forEach(function (link) {
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetOffset = targetSection.offsetTop - offset;
                smoothScrollTo(targetOffset);

                navbarLinks.forEach(function (navLink) {
                    navLink.classList.remove('active');
                });

                link.classList.add('active');
            });
        }
    });

    // Event untuk tombol Scroll to Top
    scrollToTopBtn.addEventListener('click', function () {
        smoothScrollTo(0);
    });

    // Initial update
    updateNavbar();
});

// AOS
AOS.init();

// Mendapatkan Tahun
var currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

