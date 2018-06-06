// Business logic

// translator will take a word input as a string, translate it to pig latin, and return the translated word
// @parameter = string
// @return = string
var translator = function(string){
  var splitArrays = string.split(" ");
  var string = "";

  for(i = 0; i < splitArrays.length; i += 1){
debugger;
    if(splitArrays[i] === undefined || splitArrays[i] === null || splitArrays[i] === "" || splitArrays[i] === " "){
      splitArrays.splice(i,1);
      i -= 1;
    }
  };

  var translatedArrays = splitArrays.map(function(word){
    return translateWord(word);
  });
  // return makeString(translatedArrays);

  for (i = 0; i < translatedArrays.length; i += 1){
    string = string.concat(translatedArrays[i] + " ");
  };
  return string;
};

// translateWord will take a word input as a string, translate it to pig latin, and return the translated word
// @parameter = string
// @return = string
var translateWord = function(string){
  var splitArrays = string.split("");

  if(!isAlpha(splitArrays[0])){
    // check if it's an alphabet character
    return string;
  } else if(splitArrays.length === 1 && isVowel(splitArrays[0])) {
    // check if the string is a single character and if it's a vowel
    splitArrays.push("ay");
    return makeString(splitArrays);
  } else if(isVowel(splitArrays[0])) {
    // check if the string start with a vowel
    splitArrays.push("way");
    return  makeString(splitArrays);
  } else {
    // else it's a consonant
    var count = consonantCount(splitArrays);
    var consonantString = "";
    if(splitArrays[count].toUpperCase() === "U" && splitArrays[count-1].toUpperCase() === "Q"){
      //check for the special case of q follow by u
      consonantString = makeString(splitArrays.splice(0,(count+1)));
    } else {
      consonantString = makeString(splitArrays.splice(0,count));
    };
    splitArrays.push(consonantString + "ay");
    return makeString(splitArrays);
  };

};

// makeString will take in an array and return a string
// @parameter array
// @return string
var makeString = function(stringArray){
  var string = "";
  for (i = 0; i < stringArray.length; i += 1){
    string = string.concat(stringArray[i]);
  };
  return string;
};

// isVowel will take a char and check to see if it's a, e, i, o, or u
// @paremeter characters
// @return true or false
var isVowel = function(char){
  if( char.toUpperCase() ==="A" || char.toUpperCase() ==="E" || char.toUpperCase() ==="I" || char.toUpperCase() ==="O" || char.toUpperCase() ==="U"){
    return true;
  } else {
    return false;
  };
};

// consonantCount will count the number of consonants in the string from the beginning to the first vowel
// @parameter array
// @return integer
var consonantCount = function(myArray){
  var count = 0;
  for(var i = 0; i < myArray.length; i+=1){
    if(!isVowel(myArray[i])){
      count += 1;
    } else{
      return count;
    };
  };
  return count;
};

// isAlpha will take an input and return if it's an alphabet character or not
// @parameter characters
// @return true or false
const isAlpha = ch => {
	return ch.match(/^[a-z]+$/i) !== null;
}

const isAlphaNumeric = ch => {
	return ch.match(/^[a-z0-9]+$/i) !== null;
}




// User interface
$(document).ready(function() {
  $("#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#user-input").val();

  var output = translator(userInput);
  $("#output-area").fadeIn();
  $("#user-output").text(output);

  });


});
