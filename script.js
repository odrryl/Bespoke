function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
	document.getElementById("headerBackdrop").classList.toggle("_active");
}

//COPYRIGHT
document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#copyright-year").textContent =
		new Date().getFullYear();
});

//HERO IMG CHANGE
document.addEventListener("DOMContentLoaded", () => {
	const previews = document.querySelectorAll(".hero__preview");
	const mainImage = document.querySelector(".hero__img");

	previews.forEach((preview) => {
		preview.addEventListener("click", () => {
			const newSrc = preview.getAttribute("src");
			mainImage.setAttribute("src", newSrc);
		});
	});
});

//SCROLL
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		const target = document.querySelector(this.getAttribute("href"));
		if (target) {
			window.scrollTo({
				top: target.offsetTop,
				behavior: "smooth",
			});
		}
	});
});

// ANIMATION
AOS.init({
	duration: 1300,
	once: false,
});