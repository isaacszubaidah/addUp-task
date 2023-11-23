document.getElementById('addUpForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting and reloading the page

  // Get the user inputs
 let startInput = document.getElementById('startInput').value;
 let endInput = document.getElementById('endInput').value;

  // Convert the inputs to numbers
let start = parseInt(startInput);
 let end = parseInt(endInput);

  // Check if the inputs are valid integers
  if (isNaN(start) || isNaN(end)) {
      document.getElementById('result').innerText = "Please enter valid integers for both start and end numbers.";
  } else {
      // Call the addUp function and display the result
      const sum = addUp(start, end);
      document.getElementById('result').innerText = ` ${start} add to ${end} is: ${sum}`;
  }
});

function addUp(start, end) {
  // Simply add the two numbers
  return start + end;
}
