// Business logic
var translator = function(string){
  var splitArrays = string.split("");
  if(splitArrays.length === 1 && splitArrays[0].toUpperCase() ==="A" || splitArrays[0].toUpperCase() ==="E" || splitArrays[0].toUpperCase() ==="I" || splitArrays[0].toUpperCase() ==="O" || splitArrays[0].toUpperCase() ==="U") {
    splitArrays.push("ay");
    return joinString(splitArrays);
  }
  return string;
};

var joinString = function(stringArray){
  var string = "";
  for (i = 0; i < stringArray.length; i += 1){
    string = string.concat(stringArray[i]);
  }
  return string;
}









// User interface
$(document).ready(function() {
  $("#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#user-input").val();

  var output = translator(userInput);
  $("#user-output").text(output);
  });


});
