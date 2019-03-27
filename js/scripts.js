$(function() {
  $("#info").submit(function(event) {

    var name = $("#name").val();
    var music = $("#music").val();
    var food = $("#food").val();
    var book = $("#book").val();
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();

    $("#thanks").show();

    event.preventDefault();
  });

});
