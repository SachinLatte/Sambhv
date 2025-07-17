        const productsToggle = document.getElementById('productsToggle');
        const megaMenu = document.getElementById('megaMenu');
        // Toggle mega menu on mobile
        productsToggle.addEventListener('click', function (e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                megaMenu.classList.toggle('show');
            }
        });
        // Hide menu on outside click (mobile)
        document.addEventListener('click', function (e) {
            if (
                window.innerWidth < 992 &&
                !e.target.closest('#megaMenu') &&
                !e.target.closest('#productsToggle')
            ) {
                megaMenu.classList.remove('show');
            }
        });
        // Hover functionality for desktop tabs
        const tabButtons = document.querySelectorAll('#desktopTabs .nav-link');
        tabButtons.forEach(btn => {
            btn.addEventListener('mouseenter', function () {
                const target = this.getAttribute('data-bs-target');
                tabButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const tabPanes = document.querySelectorAll('.tab-pane');
                tabPanes.forEach(pane => {
                    pane.classList.remove('show', 'active');
                });
                const activePane = document.querySelector(target);
                activePane.classList.add('show', 'active');
            });
        });
        // Toggle About dropdown on mobile
        document.querySelectorAll('.nav-item.dropdown > .nav-link').forEach(link => {
            link.addEventListener('click', function (e) {
                if (window.innerWidth < 992) {
                    e.preventDefault();
                    const dropdown = this.nextElementSibling;
                    const isOpen = dropdown.classList.contains('show');
                    // Close any other open dropdowns
                    document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                        menu.classList.remove('show');
                    });
                    // Toggle current
                    if (!isOpen) {
                        dropdown.classList.add('show');
                    }
                }
            });
        });
        // Close dropdown if clicked outside
        document.addEventListener('click', function (e) {
            if (
                window.innerWidth < 992 &&
                !e.target.closest('.nav-item.dropdown')
            ) {
                document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        });