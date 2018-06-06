// Business logic
var translator = function(string){
  return string;
};









// User interface
$(document).ready(function() {
  $("#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#user-input").val();

  var output = translator(userInput);
  $("#user-output").text(output);
  });


});
