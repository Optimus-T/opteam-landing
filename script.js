const modal = document.getElementById('modal');
const joinBtn = document.getElementById('joinBtn');
const form = document.getElementById('waitlistForm');
const msg = document.getElementById('msg');

joinBtn.onclick = () => modal.classList.remove('hidden');
modal.onclick = (e) => {
  if (e.target === modal) modal.classList.add('hidden');
};

form.onsubmit = async (e) => {
  e.preventDefault();
  msg.textContent = "Sending...";
  // Aquí luego pondremos el Google Sheets endpoint
  msg.textContent = "✅ Thanks for joining!";
  form.reset();
};
