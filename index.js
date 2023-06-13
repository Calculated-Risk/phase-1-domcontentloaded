//Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"
document.addEventListener('DOMContentLoaded', () => {
let p = document.getElementById('text');
p.textContent = 'This is really cool!'
})