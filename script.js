let countdownInterval; // Variable to hold the interval ID for the real-time countdown

// Function to calculate the birthday countdown
function calculateCountdown() {
  const birthdayInput = document.getElementById('birthdayInput').value; // Get the birthday input value

  // Validate if the input field is empty
  if (!birthdayInput) {
    document.getElementById('result').textContent = "Please enter a valid date!";
    return; // Exit the function if no valid input is provided
  }

  clearInterval(countdownInterval); // Clear any existing intervals to prevent multiple intervals

  // Parse the user input (YYYY-MM-DD) into individual components
  const [year, month, day] = birthdayInput.split('-');

  // Set up a real-time countdown that updates every second
  countdownInterval = setInterval(() => {
    const now = new Date(); // Get the current date and time

    // Create a date object for this year's birthday
    const thisYearBirthday = new Date(now.getFullYear(), month - 1, day);

    // Determine if the birthday is in the current year or the next year
    let nextBirthday = thisYearBirthday >= now 
      ? thisYearBirthday 
      : new Date(now.getFullYear() + 1, month - 1, day);

    // Calculate the difference in milliseconds between now and the next birthday
    const timeDifference = nextBirthday - now;

    // Convert the time difference into days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Total days remaining
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Remaining hours
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Remaining minutes
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // Remaining seconds

    // Update the result display with the countdown
    document.getElementById('result').textContent = 
      `🎂 Your next birthday is in ${days} day(s), ${hours} hour(s), ${minutes} minute(s), and ${seconds} second(s)! 🎉`;
  }, 1000); // Repeat the function every 1 second
}

// Add an event listener to trigger the countdown calculation when the Enter key is pressed
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') { // Check if the pressed key is Enter
    calculateCountdown(); // Call the countdown calculation function
  }
});
