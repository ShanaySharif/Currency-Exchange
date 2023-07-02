//Buisness Logic

function getConversion(number, currencyToConvertTo) {
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/f194a6e559fb7e78773e8f2d/latest/USD`;

  request.addEventListener("loadend", function () {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response, number, currencyToConvertTo);
    } else {
      printError(request, currencyToConvertTo);
    }
  });

  request.open("GET", url, true);
  request.send();
}

function handleFormSubmission(event) {
  event.preventDefault();
  const number = Number(document.querySelector("#amountUSD").value);
  const currencyToConvertTo = document.querySelector("#currency").value;
  getConversion(number, currencyToConvertTo);
}

//UI Logic

function printElements(apiResponse, number, currencyToConvertTo) {
  const convertedNumber =
    apiResponse.conversion_rates[currencyToConvertTo] * number;
  const roundedConvertedNumber = Math.round(convertedNumber * 100) / 100;
  document.querySelector(
    "#showResponse"
  ).innerText = `$${number} in USD converted to ${currencyToConvertTo} is $${roundedConvertedNumber}`;
}
function printError(request, currencyToConvertTo) {
  document.querySelector(
    "#showResponse"
  ).innerText = `There was an error accessing the currency data for ${currencyToConvertTo}:  ${request.status} ${request.statusText}`;
}
// function handleFormSubmission(event) {
//   event.preventDefault();
//   const number = Number(document.querySelector("#amountUSD").value);
//   const currencyToConvertTo = document.querySelector("#currency").value;
//   getConversion(number, currencyToConvertTo);
// }
