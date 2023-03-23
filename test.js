// Define the sample text with blank spaces
const sampleText = "I like to ________ and ________ on the weekends.";

// Ask the user for input
const userInput = prompt("Please enter a verb:");

// Fill the blanks with the user's input
const filledText = sampleText.replace("________", userInput);

// Ask for more input for the second blank
const userInput2 = prompt("Please enter another verb:");

// Fill the second blank with the user's input
const finalText = filledText.replace("________", userInput2);

// Output the final text with the filled blanks
console.log(finalText);

  