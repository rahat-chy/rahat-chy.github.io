/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');
		$banner2 = $('#banner2');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

		if ($banner2.length > 0
			&&	$header.hasClass('alt')) {
	
				$window.on('resize', function() { $window.trigger('scroll'); });
	
				$banner2.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});
	
			}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);

const animation_elements = document.querySelectorAll('.float-left-animation, .float-right-animation, .float-up-animation, .fade-in-animation');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate');
		} 
	})
}, {
	threshold: 0.4
});

for (let i = 0; i < animation_elements.length; i++) {
	const el = animation_elements[i];

	observer.observe(el);
}

const projects = [
    {
        title: "E-MART",
        descriptionFile: "projects/texts/emart.txt",
        image: "projects/images/emart.png",
        sourceLink: "https://github.com/rahat-chy/EMart"
    },
	{
        title: "ADMISSION HUB",
        descriptionFile: "projects/texts/admissionHub.txt",
        image: "projects/images/admissionHub.png",
        sourceLink: "https://github.com/Kamrozzaman/AdmissionHub"
    },
	{
        title: "CRAFTY COMMERCE",
        descriptionFile: "projects/texts/craftyCommerce.txt",
        image: "projects/images/craftyCommerce.png",
        sourceLink: "https://github.com/rahat-chy/Crafty-Commerce"
    },
	{
        title: "BIBLIOTHECA",
        descriptionFile: "projects/texts/bibliotheca.txt",
        image: "projects/images/bibliotheca.png",
        sourceLink: "https://github.com/rahat-chy/Bibliotheca"
    },
	{
        title: "COVID-19 HELPLINE",
        descriptionFile: "projects/texts/covid19Helpline.txt",
        image: "projects/images/covid19Helpline.png",
        sourceLink: "https://github.com/rahat-chy/Covid19-Helpline"
    },
	{
        title: "UNIVERSE OF BATTLE",
        descriptionFile: "projects/texts/universeOfBattle.txt",
        image: "projects/images/universeOfBattle.png",
        sourceLink: "https://github.com/rahat-chy/Universe-Of-Battle-"
    }
];

const projectsContainer = document.getElementById("project-container");

if(projectsContainer) {
	projects.forEach(project => {
		const projectBlock = document.createElement("div");

		projectBlock.innerHTML = `
			<div class="row fade-in-animation-without-scroll">
				<div class="col-md-4 projects-sections">
					<img src="${project.image}" style="height: 300px; width: 480px;" class="project-images" />
				</div>
				<div class="col-md-8 projects-sections">
					<h3 class="major">${project.title}</h3>
					<p class="project-section-p" id="${project.title}-description">Loading description...</p>
					<a href="${project.sourceLink}" class="special oj-learn-more-a" target="_blank">Source Code</a>
				</div>
			</div>
		`;

		projectsContainer.appendChild(projectBlock);

		fetch(project.descriptionFile)
			.then(response => response.text())
			.then(description => {
				document.getElementById(`${project.title}-description`).innerHTML = description;
			})
			.catch(error => {
				console.error(`Error fetching description for ${project.title}:`, error);
				document.getElementById(`${project.title}-description`).innerHTML = "Description not available.";
			});
	});
}

const blogs = [
    {
        title: "Software Design Principles — Part 1 (DRY, KISS, YAGNI)",
        descriptionFile: "blogs/texts/Software Design Principles — Part 1 (DRY, KISS, YAGNI).txt",
        image: "blogs/images/Software Design Principles — Part 1 (DRY, KISS, YAGNI).png",
        sourceLink: "https://medium.com/@rht345/software-design-principles-part-1-dry-kiss-yagni-010c810ef140"
    }
];

const blogsContainer = document.getElementById("blog-container");

if(blogsContainer) {
	blogs.forEach(blog => {
		const blogBlock = document.createElement("div");

		blogBlock.innerHTML = `
			<div class="row fade-in-animation-without-scroll">
				<div class="col-md-4 projects-sections">
					<img src="${blog.image}" style="height: 300px; width: 480px;" class="project-images" />
				</div>
				<div class="col-md-8 projects-sections">
					<h3 class="major">${blog.title}</h3>
					<p class="project-section-p" id="${blog.title}-description">Loading description...</p>
					<a href="${blog.sourceLink}" class="special oj-learn-more-a" target="_blank">Read Full Blog</a>
				</div>
			</div>
		`;

		blogsContainer.appendChild(blogBlock);

		fetch(blog.descriptionFile)
			.then(response => response.text())
			.then(description => {
				document.getElementById(`${blog.title}-description`).innerHTML = description;
			})
			.catch(error => {
				console.error(`Error fetching description for ${blog.title}:`, error);
				document.getElementById(`${blog.title}-description`).innerHTML = "Description not available.";
			});
	});
}
