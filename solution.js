function solution(input, markers) {
  // splits the input by line, as separated by \n
  let inputArray = input.split('\n');
  // initialize lineCounter variable so we don't add an extra \n at the end
  let lineCounter = inputArray.length;
  // init output string
  let output = '';
  // space tracker - to delete whitespace at end of line
  let space = false;
  // space count init
  let spaceCount = 0;
  // loop thru the lines in inputArray
  let breakFor = false;
  for (let line of inputArray) {
    // splits line into characters
    let splitLine = line.split('');
    // counter for putting \n into the end of the newline
    let counter = splitLine.length;
    //iterate thru the chars in splitLine
    for (let char of splitLine) {
      //iterate thru the markers array
      for (let marker of markers) {
        if (char === marker) {
          space = false;
          // marker will always result in newline - except on last line
          if ( lineCounter > 1) {
            // add newline marker to end of line
            output += '\n'
            // decrement lineCounter cuz we just added a new line
            lineCounter --;
            console.log(lineCounter)
          }
          // pass flag to end splitLine for loop
          breakFor = true;
          break;
        }
      } 
      // check if marker checker did find a marker
      if (breakFor === true) {
        // reset flag to false
        breakFor = false;
        // escape the for loop for splitLine
        break;
      }
      // check for space
      if (char === " ") {
          // set space flag = true
          space = true;
          // increment space counter
          spaceCount ++;
        } else if (space === true && char != " ") {
            space = false;
            // this loop runs until spaceCount === 0
            // to add in all the spaces that were in the original input string
            while (spaceCount > 0) {
              // add a space to the output
              output += ' ';
              // reset spaceCount to zero - only one space will be added
              spaceCount = 0;
            } 
        } 
      if (char !== " ") {
        output += char;
      }
      //decrement counter to ensure that the \n is added on the last loop thru the for...of
      counter --;
      if (counter === 0 && lineCounter > 1) {
        // add newline marker to end of line
        output += '\n'
        // decrement lineCounter cuz we just added a new line
        lineCounter --;
        console.log(lineCounter)
      }

    }
  }
  return output;
};
