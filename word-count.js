//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (param) => {
  // send lowercase string to string_to_array function
  let stringArray = clean_string_to_array(param.toLowerCase());

  // variable for final object
  let counts = {};

  stringArray.forEach(function(i) { 
    // removes encompassing quotes
    i = i.replace(/(^')|('$)/g, '');
    // create final object w word count
    counts[i] = (counts[i] || 0)+1; 
  });

  return counts;
};

const clean_string_to_array = (str) => {
  // add space after commas
  let spaceCommas = str.replace(/,/g, ', ');
  // remove punctuation
  let punctuationless = spaceCommas.replace(/[.,"@\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  //remove spaces
  let finalString = punctuationless.replace(/\s{2,}/g," ");
  // returns an array with the strings
  return finalString.trim().split(" ");
};
