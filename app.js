const menu=documnent.querySelector('#mobile-menu');
const menuLinks=documnent.querySelector('.navbar__menu');

menu.addEventListener('click',function()
{
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
});