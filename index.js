// function showSidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.style.display = 'flex';
//   }
  
//   function hideSidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.style.display = 'none';
//   }

document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.toggle('hidden');
    document.getElementById('menu').classList.toggle('flex');
});