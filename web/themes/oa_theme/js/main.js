(function($) {
  "use strict"; // Start of use strict
  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });
  // Show the navbar when the page is scrolled up
  var $documentHeight = $(document).outerHeight();
  var $windowHeight = $(window).height();
  var dimensions = { documentHeight : $documentHeight, windowHeight : $windowHeight };
  console.log(dimensions);
  if ($documentHeight > ($windowHeight+162)) {
    $(document).scroll(function () {
      var $nav = $("#mainNav");
      $nav.toggleClass('scrolled shadow-sm', $(this).scrollTop() > $nav.height());
    });
  }
})(jQuery); // End of use strict
