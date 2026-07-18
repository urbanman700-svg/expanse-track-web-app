document.addEventListener('DOMContentLoaded', function () {
    // ---- View Switching ----
    var tabs = document.querySelectorAll('.bottom-tabs .tab');
    var views = document.querySelectorAll('.view');
    var pageTitle = document.getElementById('page-title');

    function showView(viewName) {
        views.forEach(function (v) {
            v.classList.remove('active');
        });
        tabs.forEach(function (t) {
            t.classList.remove('active');
        });
        var target = document.getElementById('view-' + viewName);
        if (target) {
            target.classList.add('active');
        }
        var activeTab = document.querySelector('.tab[data-view="' + viewName + '"]');
        if (activeTab) {
            activeTab.classList.add('active');
        }
        var titles = {
            dashboard: 'Dashboard',
            transactions: 'Transactions',
            budget: 'Budget',
            settings: 'Settings'
        };
        if (pageTitle && titles[viewName]) {
            pageTitle.textContent = titles[viewName];
        }
    }

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var view = tab.getAttribute('data-view');
            if (view) {
                showView(view);
            }
        });
    });

    // ---- FAB (Add Transaction) ----
    var fab = document.getElementById('fab');
    if (fab) {
        fab.addEventListener('click', function () {
            openModal('<h3>Add Transaction</h3><p>Form coming soon.</p>');
        });
    }

    // ---- View All link ----
    var viewAll = document.getElementById('view-all-link');
    if (viewAll) {
        viewAll.addEventListener('click', function (e) {
            e.preventDefault();
            showView('transactions');
        });
    }

    // ---- Modal ----
    var modal = document.getElementById('modal');
    var modalBody = document.getElementById('modal-body');
    var modalClose = document.getElementById('modal-close');

    function openModal(html) {
        if (modal && modalBody) {
            modalBody.innerHTML = html;
            modal.classList.remove('hidden');
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // ---- Settings buttons (safe no-ops if not implemented) ----
    function bind(id, fn) {
        var el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', fn);
        }
    }

    bind('theme-toggle', function () {
        document.body.classList.toggle('dark');
    });
    bind('add-category-btn', function () {
        openModal('<h3>Add Category</h3><p>Category form coming soon.</p>');
    });
    bind('add-budget-btn', function () {
        openModal('<h3>Set Budget</h3><p>Budget form coming soon.</p>');
    });
    bind('export-btn', function () {
        alert('Export not yet implemented');
    });
    bind('import-btn', function () {
        var f = document.getElementById('import-file');
        if (f) f.click();
    });
    bind('clear-btn', function () {
        if (confirm('Clear all data?')) {
            alert('Data cleared (stub)');
        }
    });

    // Default view
    showView('dashboard');
});