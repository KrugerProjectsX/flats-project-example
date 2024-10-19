
document.addEventListener('DOMContentLoaded', function() {
  const user_logged= JSON.parse(localStorage.getItem('user_logged'));
  if (user_logged == null) {
      window.location.href = 'index.html'
  }
})
