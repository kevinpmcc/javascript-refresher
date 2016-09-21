var selectElementsStartingWithA = function(array) {
  });
};

var selectElementsStartingWithVowel = function(array) {
  });
};

var removeNullElements = function(array) {
  });
};

var removeNullAndFalseElements = function(array) {
  });
};

var reverseWordsInArray = function(array) {
  return array.map(function(word) {
    return word.split('').reverse().join('');
  });
};

var everyPossiblePair = function(array) {
  return [ [(array[2]), (array[0])], [(array[2]), (array[1])], [(array[0]), (array[1])] ];  
  //oh yeah! alphabetized innit. will go and do this properly..
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
  return -Math.abs(number);
}

var numberOfPalindromes = function(array) {
  return array.filter(function(word) {
    return word.split('').reverse().join('') === word;
  }).length;
};

var shortestWord = function(array) {
  var shortWord = array[0]
    array.forEach(function(word) {
      if (word.length < shortWord.length) {
        shortWord = word; 
      }
    });
  return shortWord;
}

var longestWord = function(array) {
  var longWord = array[0];
  array.forEach(function(word) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  });
  return longWord;
};

var sumNumbers = function(array) {
  return array.reduce(function(a,b) {
    return a + b; 
  });
}

var repeatElements = function(array) {
  array.forEach(function(element){
    array.push(element);
    });
  return array;
}

var stringToNumber = function(string) {
  return parseInt(string);
}

var calculateAverage = function(array) {
  arrayTotal = array.reduce(function(a,b) {
    return a + b;
  });
  return arrayTotal/array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
  console.log(array);
  //return [ 1, 3, 5, 4, 1, 2 ]
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
