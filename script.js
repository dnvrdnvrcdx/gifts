document.getElementById('openGift')?.addEventListener('click', () => {
  const btn = document.getElementById('openGift');
  btn.disabled = true;
  btn.textContent = 'Opening... ♡';
  setTimeout(() => { window.location.href = 'bouquet.html'; }, 650);
});
