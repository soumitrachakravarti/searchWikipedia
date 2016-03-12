$(document).ready(function() {
  $("#searchInput").keyup(function(event){
    if(event.keyCode == 13){
        $("#searchButton").click();
    }
});
  $('#searchButton').on('click', function() {
    var searchInput = document.getElementById("searchInput").value;
    $.ajax({
      dataType: "jsonp",
      url: "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + searchInput + "&callback=JSON_CALLBACK",
      success: function(res) {

        var results = res.query.pages;
        var render = "";
        $.each(results, function(val) {

          render += '<div class="callout"><a href="https://en.wikipedia.org/?curid=' + results[val].pageid + '" target="_blank"><h3>' + results[val].title + '</h3></a><p>' + results[val].extract + '</p></div>';
          $('#resultsSection').html(render);
        });
      }
    });
  });
});