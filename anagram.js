// Anagram Challenge using Frequency Counters
const anagram = function (strOne, strTwo) {
  /* This function receives two strings to check if the second string
    is an anagram of the first string, and return true or false. 
    */

  // Check the length of the strings
  if (strOne.length !== strTwo.length) return false;

  // Check if both of them are empty string
  if (strOne === "" && strTwo === "") return true;

  // Count the letters in the first word
  const countStrOne = {};
  for (let i = 0; i < strOne.length; i++) {
    const letter = strOne[i];
    countStrOne[letter] = (countStrOne[letter] || 0) + 1;
  }

  for (let i = 0; i < strTwo.length; i++) {
    const letter = strTwo[i];
    // If it returned 0, then we can use it as a falsey value
    if (!countStrOne[letter]) return false;
    else countStrOne[letter] -= 1;
  }

  // Return True
  return true;
};

// Sample
// True Case
console.log(anagram("cinemam", "icemann"));

// False Case
console.log(anagram("car", "aar"));
