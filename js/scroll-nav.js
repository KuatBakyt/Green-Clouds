window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	 if (window.innerWidth > 768) {
		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.collapse').clientHeight <= scrollDistance) {
				document.querySelectorAll('.collapse a').forEach((el) => {
					if (el.classList.contains('active')) {
						el.classList.remove('active');
					}
				});

				document.querySelectorAll('.collapse li')[i].querySelector('a').classList.add('active');
			}
		});
	}
});