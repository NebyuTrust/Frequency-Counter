// Frequency Counter - Optimized way
const same = function (arrOne, arrTwo) {
  /* Receive two arrays, and check if all elements of the first array
    squared are avaialbe in the second array, and return true or false. 
  
      But return an error if the two input arrays have different length.
  
      */

  // Check if the arrays have the same length
  if (arrOne.length !== arrTwo.length)
    return "Arrays should be the same length";

  // Count the values in the first array
  const countArrOne = {};
  arrOne.forEach((el) => {
    countArrOne[el] = (countArrOne[el] || 0) + 1;
  });

  // Count the values in the second array
  const countArrTwo = {};
  arrTwo.forEach((el) => {
    countArrTwo[el] = (countArrTwo[el] || 0) + 1;
  });

  // Loop on the first object
  for (let key in countArrOne) {
    // Check if the squared value of the key is avaiable in the second object
    if (!(key ** 2 in countArrTwo)) return false;

    // Check if the number of elements is different
    if (countArrTwo[key ** 2] !== countArrOne[key]) return false;
  }

  // Return True
  return true;
};

// Sample
// False case
console.log(same([1, 2, 3, 4], [1, 4, 9, 8]));

// True case
console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));
