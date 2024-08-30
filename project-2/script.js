document.getElementById("convert").addEventListener("click", function () {
  const currencyFrom = document.getElementById("currency-from").value;
  const currencyTo = document.getElementById("currency-to").value;
  const amount = document.getElementById("amount").value;

  // Simple conversion rates (for demo purposes)
  const conversionRates = {
    USD: { INR: 83.24, EUR: 0.91, GBP: 0.79, JPY: 146.98 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095, JPY: 1.77 },
    EUR: { USD: 1.1, INR: 91.57, GBP: 0.87, JPY: 160.78 },
    GBP: { USD: 1.26, INR: 105.35, EUR: 1.15, JPY: 184.52 },
    JPY: { USD: 0.0068, INR: 0.56, EUR: 0.0062, GBP: 0.0054 },
  };

  // Convert the amount
  const convertedAmount = (
    amount * conversionRates[currencyFrom][currencyTo]
  ).toFixed(2);

  // Display the result
  document.getElementById("result").value = convertedAmount;
});
