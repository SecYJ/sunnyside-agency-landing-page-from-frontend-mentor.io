const btn = document.querySelector(".hamburger-btn");

btn.addEventListener("click", e => {
	if (!e.target.closest(".hamburger-btn")) return;
	document.querySelector(".mobile-nav-menu").classList.toggle("open");
});
