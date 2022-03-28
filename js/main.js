// Initializing Variables
const allInputsEl = document.querySelectorAll(".inputs");
const resultEl = document.getElementById("result");
const options = document.getElementById("currency");

// Formula to calculate
const calculation = (amount, interest, months) => {
  let total = 0;
  let error = false;
  let errorMessage = "";
  if (amount != "" && interest != "" && months != "") {
    error = false;
    if (options.value == "dollar") {
      total = amount * (interest / 100) * months;
      resultEl.textContent = `$${total}`;
    } else if (options.value == "ruppes") {
      total = (amount * interest * months) / 100;
      resultEl.textContent = `₹${total}`;
    }
  } else {
    error = true;
    errorMessage = "Please fill the amount, interest and months inputs.";
    resultEl.textContent = errorMessage;
  }
};

// Calling Function
allInputsEl.forEach((element) => {
  element.addEventListener("change", () => {
    console.log(
      calculation(
        Number(allInputsEl[0].value),
        Number(allInputsEl[1].value),
        Number(allInputsEl[2].value)
      )
    );
  });
});
