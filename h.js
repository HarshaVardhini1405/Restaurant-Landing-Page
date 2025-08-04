function showPage(pageId) {
  const pages = [
    'homePage',
    'loginPage',
    'menuPage',
    'bookingPage',
    'contactPage',
    'aboutPage',
    'blogPage'
  ];
  pages.forEach(id => {
    document.getElementById(id).style.display = id === pageId ? 'block' : 'none';
  });
}

function toggleSelection(item) {
  item.classList.toggle('selected');
}

function submitOrder() {
  alert('Your order has been submitted successfully!');
  showPage('homePage');
}

function submitBooking(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  const date = form.querySelector('input[type="date"]').value;
  const time = form.querySelector('input[type="time"]').value;

  alert(`Thank you, ${name}! Your table has been booked for ${date} at ${time}. We’ll contact you at ${email} or ${phone}.`);
  form.reset();
  showPage('homePage');
}

window.onload = () => showPage('homePage');
