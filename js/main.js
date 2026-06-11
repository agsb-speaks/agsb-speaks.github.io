// ── nav active state ──
(function () {
  const links = document.querySelectorAll('.nav-links a');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // hamburger
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
})();

// ── toast ──
function showToast(msg, type = 'default') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast' + (type === 'error' ? ' error' : '');
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// ── auth guard (placeholder until Supabase) ──
function requireAuth(redirectTo = 'login.html') {
  // Will check Supabase session when wired up
  const fakeUser = sessionStorage.getItem('agsb_user');
  if (!fakeUser) {
    window.location.href = redirectTo;
  }
}

function getUser() {
  const u = sessionStorage.getItem('agsb_user');
  return u ? JSON.parse(u) : null;
}
