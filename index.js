function isPalindrome(word) {
  // Write your algorithm here
  const halfWordLength = (word.length)/2
  for (let i=0; i<=halfWordLength; i++){
    if (word[i] !== word[word.length-i-1]){
      return false
    }
    return true
  }
  }

/* 
  Add your pseudocode here

  Define function taking a string arguement
  Loop throuh the string to the halfway point checking if the condition is false otherwise return true
  For each character from index 0 to length/2
    check if character[0] !== character[length-1]  => (0) => length -(i+1)
             character[1] !== character[length-2]  => (1) => length -(i+1)
             character[2] !== character[Length-3]  => (2) => length -(i+1)

             if any is !== return false immediately

             return true by default
*/

/*
  Add written explanation of your solution here
  The variable halfWordLength ensures that the loop stops at the halfway point

  As the function iterates over the string the following condition is checked:
    is the character at index of [1] === to the character at index of [word.length-1-i]

    if any false value is encountered, the execution stops and returns false.
    Otherwise, the loop ends and the function returns true by default
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("")

  console.log("Expecting: true")
  console.log("=>", isPalindrome("huh"))
}

module.exports = isPalindrome;
