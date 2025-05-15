const menuItems = document.querySelectorAll('.menu li');
const previewImage = document.getElementById('previewImage');

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const imgPath = item.getAttribute('data-img');
    previewImage.src = imgPath;
  });
});
