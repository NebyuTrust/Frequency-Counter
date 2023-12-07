// Frequency Counter - Brute Force way
const same = function (arrOne, arrTwo) {
  /* Receive two arrays, and check if all elements of the first array squared 
  are avaialbe in the second array, and return true or false. 

    But return an error if the two input arrays have different length.

    */

  // Check if the arrays have the same length
  if (arrOne.length !== arrTwo.length)
    return "Arrays should be the same length";

  for (let i = 0; i < arrOne.length; i++) {
    // Check if there is an element in the second array twice the current element
    const correctIndex = arrTwo.indexOf(arrOne[i] ** 2);
    if (correctIndex === -1) return false;

    // Remove the element found from the second array
    arrTwo.splice(correctIndex, 1);
  }

  return true;
};

// Sample
// False case
console.log(same([1, 2, 3, 4], [1, 4, 9, 8]));

// True case
console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));
