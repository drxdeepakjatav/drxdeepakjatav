const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const form = document.getElementById('signup-form');
const statusEl = document.getElementById('status');

if (form && statusEl) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email')?.value?.trim();

    if (!email) {
      statusEl.textContent = 'Please enter a valid email address.';
      return;
    }

    statusEl.textContent = `Thanks for joining, ${email}! We'll keep you posted.`;
    form.reset();
  });
}
