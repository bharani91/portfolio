$(function() {
  $(".pagination a").live("click", function() {
    $(".pagination").html("<span class='loading_text'>Page is Loading...</span>")
    $.get(this.href, null, null, 'script');
    return false;
  });
  

});
