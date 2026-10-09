const barkButtons = [...document.querySelectorAll('.bark-option')];
const result = document.querySelector('.bark-result');
for (const button of barkButtons) {
  button.addEventListener('click', () => {
    button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true'));
    const selected = barkButtons.filter(bark => bark.getAttribute('aria-pressed') === 'true');
    result.textContent = selected.length
      ? selected.map(bark => bark.textContent.trim()).join(' · ') + ' ♡ Extremely good flirting.'
      : 'Select a bark or three. ♡';
  });
}
