const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    });
  });
}


// Scroll reveal animation
const io = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  }
);

document.querySelectorAll('.reveal').forEach(el => {
  io.observe(el);
});


// Automatically update copyright year
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}


// NobleVeyra site configuration
const cfg = window.NOBLEVEYRA || {};


// Connect configured website buttons
document.querySelectorAll('[data-link]').forEach(el => {
  const key = el.getAttribute('data-link');
  const value = cfg[key];

  if (value && !value.includes('PASTE_YOUR_')) {
    el.href = value;

    // Open social links externally
    if (key === 'instagramUrl' || key === 'threadsUrl') {
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    }
  } else {
    el.addEventListener('click', event => {
      event.preventDefault();

      document.querySelector('#contact')?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
});


// Connect email links
document.querySelectorAll('[data-email]').forEach(el => {
  if (cfg.email && !cfg.email.includes('PASTE_YOUR_')) {
    el.href = `mailto:${cfg.email}`;
  } else {
    el.href = '#contact';
  }
});


// Optional booking links
document.querySelectorAll('[data-booking]').forEach(el => {
  if (cfg.bookingUrl && !cfg.bookingUrl.includes('PASTE_YOUR_')) {
    el.href = cfg.bookingUrl;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  } else {
    el.href = '#contact';
  }
});
