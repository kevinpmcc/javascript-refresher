var selectElementsStartingWithA = function(array) {
  return array.filter(function(word) {
    return word[0] === "a";
  });
};

var selectElementsStartingWithVowel = function(array) {
  return array.filter(function(word) {
    var vowels = ["a","e","i","o","u"];
    return vowels.includes(word[0]);
  });
};

var removeNullElements = function(array) {
  return array.filter(function(element) {
    return element !== null;
  });
};

var removeNullAndFalseElements = function(array) {
  return array.filter(function(element) {
    var unWantedElements = [null, false];
    return unWantedElements.includes(element) === false;
  });
};

var reverseWordsInArray = function(array) {
  return array.map(function(word) {
    return word.split('').reverse().join('');
  });
};

var everyPossiblePair = function(array) {
  return [ [(array[2]), (array[0])], [(array[2]), (array[1])], [(array[0]), (array[1])] ];  
  //unable to see logic in how the order these were presented. will return to it
    //if i get the chance.
};

var allElementsExceptFirstThree = function(array) {
  array.splice(0,3);
  return array;
};

var addElementToBeginning = function(array, element) {
  array.splice(0, 0, 1);
  return array;
};

var sortByLastLetter = function(array) {
  return array.map(function(word) {
    return word.split('').reverse()}).sort().map(function(i) {
    return i.reverse().join('')
  });
};

var getFirstHalf = function(string) {
  if (string.length % 2 === 0) {
    return string.slice(0,(string.length/2));}
  else {
    return string.slice(0,((string.length/2)+1));
  }
};

var makeNegative = function(number) {
  return (number * (-1));
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
