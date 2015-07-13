(function( $ ) {
  function show_caption() {
    var caption = $(this).attr('data-caption');
    var display = $(this).attr('data-display');

    $(display).stop();
    $(display).css('opacity', '100.0');
    $(display).text(caption);
  }

  function hide_caption() {
    var display = $(this).attr('data-display');
    $(display).animate({opacity: "0.0"});
  }

  $.fn.set_captions = function() {
    $.each($('[data-caption][data-display]'), function(index, value) {
      var display = $(value).attr('data-display');

      var display_element = $(display).first();
      if (display_element.length > 0) {
        $(this).hover(show_caption, hide_caption);
      }
    });
  };
}( jQuery ));

$(document).ready(function() {
  $(document).set_captions();
});
