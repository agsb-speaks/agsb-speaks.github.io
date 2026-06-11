import { supabase } from '../supabase.js'

// ── nav active state ──
(function () {
  const links = document.querySelectorAll('.nav-links a')
  const path = window.location.pathname.split('/').pop() || 'index.html'
  links.forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active')
  })

  const toggle = document.querySelector('.nav-toggle')
  const navLinks = document.querySelector('.nav-links')
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('open'))
  }
})()

// ── toast ──
export function showToast(msg, type = 'default') {
  let container = document.querySelector('.toast-container')
  if (!container) {
    container = document.createElement('div')
    container.className = 'toast-container'
    document.body.appendChild(container)
  }
  const toast = document.createElement('div')
  toast.className = 'toast' + (type === 'error' ? ' error' : '')
  toast.textContent = msg
  container.appendChild(toast)
  setTimeout(() => toast.remove(), 3200)
}

// ── get current user ──
export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// ── update nav based on auth state ──
async function updateNav() {
  const user = await getUser()
  const joinLink = document.querySelector('.nav-cta')
  if (joinLink && user) {
    joinLink.textContent = 'Sign out'
    joinLink.href = '#'
    joinLink.addEventListener('click', async (e) => {
      e.preventDefault()
      await supabase.auth.signOut()
      window.location.reload()
    })
  }
}

updateNav()