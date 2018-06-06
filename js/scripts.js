// Business logic
var translator = function(string){
  var splitArrays = string.split("");
  if(splitArrays.length === 1 && isVowel(splitArrays[0])) {
    splitArrays.push("ay");
    return joinString(splitArrays);
  } else if(isVowel(splitArrays[0])) {
    splitArrays.push("way");
    return  joinString(splitArrays);
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

var isVowel = function(char){
  if( char.toUpperCase() ==="A" || char.toUpperCase() ==="E" || char.toUpperCase() ==="I" || char.toUpperCase() ==="O" || char.toUpperCase() ==="U"){
    return true;
  } else {
    return false;
  };
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
