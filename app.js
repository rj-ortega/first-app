// this is a comment
var image = document.querySelector('img');
// this is another comment
image.addEventListener('click', function (event) {
  window.location.assign("file:///Users/bertoort/workspace/playground/ricardo/index.html")
});

// this is jquery!!
$(function () {
  var $button = $('.myButton')
  $button.click(function () {
    $('.image').show();
    $button.hide();
  })
})
