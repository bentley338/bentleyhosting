document.addEventListener('DOMContentLoaded', () => {
    const toggleModeButton = document.querySelector('.toggle-mode');
    if (toggleModeButton) {
        toggleModeButton.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            // Simpan preferensi mode di localStorage
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Muat preferensi mode dari localStorage saat halaman dimuat
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    const menuToggleButton = document.querySelector('.menu-toggle');
    const bottomNav = document.querySelector('.bottom-nav');

    if (menuToggleButton && bottomNav) {
        menuToggleButton.addEventListener('click', () => {
            bottomNav.classList.toggle('active');
        });
    }

    // Set active class for bottom nav based on current page
    const currentPath = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');

    navItems.forEach(item => {
        item.classList.remove('active');
        const itemHref = item.getAttribute('href');
        if (currentPath === '' && itemHref === 'index.html') { // For home page
            item.classList.add('active');
        } else if (itemHref === currentPath) {
            item.classList.add('active');
        } else if (currentPath === '' && itemHref === '#') { // If home link is just #
             item.classList.add('active');
        }
    });
});

