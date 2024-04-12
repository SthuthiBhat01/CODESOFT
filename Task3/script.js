// document.addEventListener("DOMContentLoaded", function() {
//   const display = document.querySelector(".display");
//   const buttons = document.querySelectorAll(".button");

//   let isCalculatorOn = true;

//   buttons.forEach(button => {
//     button.addEventListener("click", function() {
//       const buttonText = button.textContent;

//       if (!isCalculatorOn) {
//         return; // Exit the function if calculator is off
//       }

//       if (buttonText === "=") {
//         try {
//           display.value = eval(display.value);
//         } catch (error) {
//           display.value = "Error";
//         }
//       } else if (buttonText === "AC") {
//         display.value = "";
//       } else if (buttonText === "CE") {
//         // Clear the last character from the display
//         display.value = display.value.slice(0, -1);
//       } else if (buttonText === "+/-") {
//         if (display.value.charAt(0) === '-') {
//           display.value = display.value.slice(1);
//         } else {
//           display.value = '-' + display.value;
//         }
//       } else {
//         display.value += buttonText;
//       }
//     });
//   });
  
//   // Toggle calculator on/off
//   // Assuming there is a separate button to toggle the calculator
//   const toggleButton = document.querySelector('.toggle'); // Assuming you have a class named 'toggle' for this button
//   toggleButton.addEventListener('click', function() {
//     if (isCalculatorOn) {
//       display.value = "";
//       display.disabled = true;
//       buttons.forEach(btn => {
//         btn.disabled = true;
//       });
//       isCalculatorOn = false;
//     } else {
//       display.value = "";
//       display.disabled = false;
//       buttons.forEach(btn => {
//         btn.disabled = false;
//       });
//       isCalculatorOn = true;
//     }
//   });

// });
document.addEventListener("DOMContentLoaded", function() {
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll(".button");
  let isCalculatorOn = true;

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const buttonText = button.textContent;

      if (!isCalculatorOn) {
        return; // Exit the function if calculator is off
      }

      if (buttonText === "=") {
        try {
          const result = eval(display.value);
          if (isNaN(result) || !isFinite(result)) {
            display.value = "Invalid exp";
          } else {
            display.value = result;
          }
        } catch (error) {
          display.value = "Invalid exp";
        }
      } else if (buttonText === "AC") {
        display.value = "";
      } else if (buttonText === "CE") {
        display.value = display.value.slice(0, -1);
      } else if (buttonText === "+/-") {
        display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
      } else {
        display.value += buttonText;
      }
    });
  });
});
