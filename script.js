function togglePopup() {
    const popup = document.getElementById('popup');
    // Toggle the popup visibility (show or hide)
    if (popup.style.display === 'flex') {
      popup.style.display = 'none';
    } else {
      popup.style.display = 'flex';
    }
  }
  