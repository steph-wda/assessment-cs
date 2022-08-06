//Sum Zero//

const addToZero = (numArray) => {
  for (let i = 0; i < numArray.length; i++) {
    for (let j = 1; j < numArray.length; j++) {
      if (numArray[i] - numArray[j] === 0 && i !== j) {
        return true;
      }
    }
  }
  return false;
};

//time complexity: O(n^2)
//space complexity: O(1)

console.log(addToZero([1, 2, 3, 3]));
console.log(addToZero([1, 2, 3, 4]));

//Uniqiue Characters//

const hasUniqueChars = (word) => {
  let wordArray = word.split("");
  for (let i = 0; i < wordArray.length; i++) {
    for (let j = 1; j < wordArray.length; j++) {
      //the i!==j prevents a letter being compared to itself
      if (wordArray[i] === wordArray[j] && i !== j) {
        return false;
      }
    }
  }
  return true;
};

//time complexity: O(n^2)
//space complexity: O(n)

console.log(hasUniqueChars("Moonday"));
console.log(hasUniqueChars("Monday"));

//Pangram Sentence//
const isPangram = (sentence) => {
  let sentenceArray = sentence.replace(/[^a-zA-Z]/g, "").split(""); //removing all chars that are not letters
  alaphabet = [];
  sentenceArray.forEach((letter) => {
    if (!alaphabet.includes(letter)) {
      alaphabet.push(letter);
    }
  });
  if (alaphabet.length === 27) {
    //26 letters, array length should be 27
    return true;
  } else {
    return false;
  }
};

//time complexity:O(n)
//space complexity:O(n)

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

//Longest Word//

const longestWord = (wordArray) => {
  let longestLength = 0;
  wordArray.forEach((word) => {
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  });
  return longestLength;
};

//time complexity: O(n)
//space complexity:O(n)

console.log(
  longestWord([
    "Be",
    "sure",
    "to",
    "push",
    "your",
    "code",
    "to",
    "Github",
    "for",
    "this",
    "assignment",
  ])
);

console.log(
  longestWord([
    "The",
    "quick",
    "brown",
    "fox",
    "jumps",
    "over",
    "the",
    "lazy",
    "dog",
  ])
);
