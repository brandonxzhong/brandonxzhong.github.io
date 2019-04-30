$(document).ready(function() {
	const distanceToNextImage = -768;
	let currentImageNumber = 0;
	let currentWebPage = "aboutme";
	let galleryOpen = 0;

	$("#lightbox").hide();

	$(".project-container").click(function() {
		currentImageNumber = parseInt($(this).attr("id"), 10);
		let newLeft = distanceToNextImage * currentImageNumber;
		$("#carousel-strip").css("left", newLeft);
		$("#lightbox").show();
		galleryOpen = 1;
	});

	$("#right").click(function() {
		currentImageNumber = (currentImageNumber + 1) % 4;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");
	});

	$("#left").click(function() {
		currentImageNumber = currentImageNumber == 0 ? 3 : (currentImageNumber - 1);
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");
	});

	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
		galleryOpen = 0;
	})

	$(".button").on("click", function() {
		let webPageWidth = $(document).width() * -1;
		let goToPage = $(this).attr("id")

		if (goToPage === currentWebPage) {
		}
		else if (goToPage === "aboutme") {
			currentWebPage = "aboutme";
			$("#lightbox").hide();
			$("#page-container").css("left", 0 + "px");
			$("#about-me-page .main-content-container").fadeIn(".6s");
			$("#projects-page .main-content-container").fadeOut(".6s");
		}
		else {
			currentWebPage = "projects";
			$("#page-container").css("left", webPageWidth + "px");
			$("#projects-page .main-content-container").fadeIn(".6s");
			$("#about-me-page .main-content-container").fadeOut(".6s");
		}
	})

	$(window).on("resize", function() {
		if (currentWebPage === "projects") {
			let webPageWidth = $(document).width() * -1;
			$("#page-container").css("left", webPageWidth + "px");
		}
	})
});
