// ===============================
// 🌗 Theme toggle (dark/light)
// ===============================
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeBtn.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});


// ===============================
// 👀 Reveal sections on scroll
// ===============================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card').forEach(s => observer.observe(s));


// ===============================
// 💫 3D tilt for project cards
// ===============================
document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', (ev) => {
    const r = card.getBoundingClientRect();
    const x = ev.clientX - r.left;
    const y = ev.clientY - r.top;
    const cx = r.width / 2, cy = r.height / 2;
    const rx = (y - cy) / cy * -8;
    const ry = (x - cx) / cx * 8;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});


// ===============================
// 🌀 3D hover effect on profile photo
// ===============================
const photoWrap = document.querySelector('.photo-wrap');
if (photoWrap) {
  photoWrap.addEventListener('mousemove', (e) => {
    const r = photoWrap.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const cx = r.width / 2, cy = r.height / 2;
    const rx = (y - cy) / cy * -6;
    const ry = (x - cx) / cx * 6;
    photoWrap.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
  });
  photoWrap.addEventListener('mouseleave', () => photoWrap.style.transform = '');
}


// ===============================
// 💌 "Message Me" form functionality
// ===============================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('messageText').value.trim();
    const status = document.getElementById('form-status');

    if (!name || !email || !message) {
      status.textContent = '⚠️ Please fill in all fields.';
      status.style.color = 'red';
      return;
    }

    // Simulate sending process
    status.textContent = '⏳ Sending...';
    status.style.color = 'var(--accent)';

    setTimeout(() => {
      status.textContent = '✅ Message sent successfully!';
      status.style.color = 'limegreen';
      contactForm.reset();
    }, 1200);
  });
}
