// === WAITLIST CONNECTION ===
const form = document.getElementById('waitlistForm');

// Crear un mensaje dinámico bajo el formulario
const msg = document.createElement('p');
msg.id = 'msg';
msg.style.marginTop = '10px';
msg.style.fontSize = '0.95rem';
msg.style.color = '#60a5fa';
form.parentElement.appendChild(msg);

// URL del Apps Script (pegá aquí tu URL pública)
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzNR2lVZ4z2eY_dqjwUcS8u0HYVcS8YONpQtmA_-Qr8z-fZFI5BZu9y1no0KcVP15h8VQ/exec';

form.onsubmit = async (e) => {
  e.preventDefault();
  const email = form.querySelector('input[type="email"]').value.trim();

  if (!email) {
    msg.textContent = "Please enter a valid email.";
    msg.style.color = "#f87171";
    return;
  }

  msg.textContent = "Sending...";
  msg.style.color = "#60a5fa";

  try {
    const res = await fetch(SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      msg.textContent = "✅ Thanks for joining the waitlist!";
      msg.style.color = "#4ade80";
      form.reset();
    } else {
      throw new Error("Network error");
    }
  } catch (err) {
    msg.textContent = "❌ Something went wrong. Try again later.";
    msg.style.color = "#f87171";
    console.error(err);
  }
};
