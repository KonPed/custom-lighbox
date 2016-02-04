//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image.

var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//2. Add an overlay
$("body").append($overlay);
  //2.1 An image
  $overlay.append($image);
  //2.2 Caption
  $overlay.append($caption);

//1. Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  var alt = $(this).children().attr("alt");

  //1.1 Show the overlay
  $overlay.fadeIn();
  $image.animate({
    top: "200px",
    height: "fadeIn"
  }, 300).attr("src", imageLocation); //1.2 Update overlay with the image linked in the link
  //1.3 Get child's alt attribute and set caption
  $caption.text(alt);
});

//3. When overlay is clicked
  //3.1 Hide the overlay
  $overlay.click(function() {
    $(this).fadeOut();
    $image.delay(350).animate({
      top: "541px",
      height: "fadeOut"
    })
  });
