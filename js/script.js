//nav menu
$(".navigation").each(function(){
    var inc=$(this);
    $.get(inc.attr("title"), function(data){
        inc.replaceWith(data);
    });
});
//end nav menu

//lightbox for gallery
var $overlay = $('<div id="overlay"></div>')
var $image = $("<img>");
var $caption = $("<p></p>");
//create overlay
$("body").append($overlay);
$overlay.append($image);
$overlay.append($caption);
// capture click event on link to an image
$("#gallery a").click(function(event) {
  //prevent leaving page
  event.preventDefault();
  var imageLocation = $(this).attr("href")
  // update overlay with the clicked image
  $image.attr("src", imageLocation);
  $overlay.show();
  // get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});
// when overlay is clicked
$overlay.click(function() {
  $overlay.hide();
});
//end lightbox
