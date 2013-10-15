$(document).ready(function () {



  prettyPrint();

  $('#icon-size-range').change(function() {
    $('.iconic').css( 'width', $(this).val()+'px' );
    window.dispatchEvent(new Event('resize'));
  });

});