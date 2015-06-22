//nav menu
$(".navigation").each(function(){
    var inc=$(this);
    $.get(inc.attr("title"), function(data){
        inc.replaceWith(data);
    });
});


//lightbox for gallery
var $overlay = $('<div id="overlay"></div>')
var $image = $("<img>");
var $caption = $("<p></p>");

$("body").append($overlay);
$overlay.append($image);
$overlay.append($caption);

// Capture click event on link to an image
$("#gallery a").click(function(event) {
  //prevent leaving page
  event.preventDefault();
  var imageLocation = $(this).attr("href")
  // Update overlay with the clicked image
  $image.attr("src", imageLocation);  
  $overlay.show();
  // Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});


// When overlay is clicked
$overlay.click(function() {
  $overlay.hide();
});
// Hide overlay
