// Set the footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form validation + friendly message (no backend)
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // avoid actual submit
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const message = form.elements['message'].value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields before sending.');
    return;
  }
  // very basic email format check
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // pretend to send...
  alert('Thanks ' + name + '! Your message has been received (demo).');
  form.reset();
});

// Show/hide extra project details
const projects = document.getElementById('projects');
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Show more details';
toggleBtn.style.marginTop = '8px';
projects.appendChild(toggleBtn);

let expanded = false;
toggleBtn.addEventListener('click', () => {
  expanded = !expanded;
  if (expanded) {
    const extra = document.createElement('p');
    extra.id = 'extra-info';
    extra.textContent = 'Project A was built with HTML only. Project B uses CSS Grid. Project C will add JavaScript interactions.';
    projects.appendChild(extra);
    toggleBtn.textContent = 'Hide details';
  } else {
    const extra = document.getElementById('extra-info');
    if (extra) extra.remove();
    toggleBtn.textContent = 'Show more details';
  }
});

// Small dark-mode toggle (teaches DOM class toggling)
const header = document.querySelector('header');
const dm = document.createElement('button');
dm.textContent = 'Toggle dark';
dm.style.marginLeft = '10px';
dm.style.background = '#333';
dm.style.color = '#fff';
dm.style.padding = '6px 10px';
dm.style.borderRadius = '6px';
header.appendChild(dm);

dm.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});