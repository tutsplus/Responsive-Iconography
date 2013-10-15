
$(document).ready(function () {
  prettyPrint();

  $('#icon-size-range').change(function() {
    $('.iconic-mic').attr( 'height', $(this).val() );
  });

});
