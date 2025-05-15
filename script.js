const menuItems = document.querySelectorAll('.menu li');
const previewImage = document.getElementById('previewImage');

function toggleSection(section) {
  section.classList.toggle("active");
}

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const imgPath = item.getAttribute('data-img');
    previewImage.src = imgPath;
  });
});
