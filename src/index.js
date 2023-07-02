//Buisness Logic 

function getConversion(number, currencyToConvertTo) {
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/f194a6e559fb7e78773e8f2d/latest/USD`;
  
  request.addEventListener("loadend", function() {
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


//UI Logic

