// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Newsletter signup validation
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('form-message');

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message.textContent = "✅ Thanks for subscribing!";
    message.style.color = "#00ffcc";
    // TODO: send email to backend or Google Form
  } else {
    message.textContent = "❌ Please enter a valid email.";
    message.style.color = "#ff4444";
  }
});

// Airdrop wallet validation
document.getElementById('airdrop-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const wallet = document.getElementById('wallet').value.trim();
  const msg = document.getElementById('airdrop-message');

  if (wallet.length >= 32) {
    msg.textContent = "✅ Registered! Stay tuned for airdrop results.";
    msg.style.color = "#00ffcc";
  } else {
    msg.textContent = "❌ Invalid Solana address.";
    msg.style.color = "#ff4444";
  }
});
