import { useState } from "react";
import { InputBox } from "./components"; // InputBox component
import useCurrencyInfo from "./hooks/useCurrencyInfo"; // Custom hook to fetch currency information

function App() {
  const [amount, setAmount] = useState(0); // Amount to convert
  const [from, setFrom] = useState("usd"); // Currency to convert from
  const [to, setTo] = useState("inr"); // Currency to convert to
  const [convertedAmount, setConvertedAmount] = useState(0); // Converted amount
  // Fetch currency information using the custom hook

  const currencyInfo = useCurrencyInfo(from);
  console.log("value of currencyInfo", currencyInfo);

  const options = Object.keys(currencyInfo); //getting all available currencies from the fetched data
  // console.log("value of options", options);

  const swap = () => {
    // Function to swap the currencies
    setFrom(to);
    setTo(from); // Swap the from and to currencies
    setConvertedAmount(amount); // Set the converted amount to the current amount
    setAmount(convertedAmount); // Set the amount to the converted amount
  };

  const convert = () => {
    // Function to convert the amount,used when the form is submitted
    setConvertedAmount(amount * currencyInfo[to]); // Convert the amount based on the selected currency
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://www.unimoni.in/blog/wp-content/uploads/2024/09/Currencies-of-world.jpg)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent the default form submission
              convert(); //  Call the convert function to convert the amount
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)} // Function to change the 'from' currency
                selectCurrency={from} // Select the 'from' currency
                onAmountChange={(amount) => setAmount(amount)} //  Function to change the amount
                amountDisable={false} // Allow the amount input field for the 'from' currency
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount} // Display the converted amount
                currencyOptions={options} // Pass the available currency options
                onCurrencyChange={(currency) => setTo(currency)} // Function to change the 'to' currency
                selectCurrency={to} // Select the 'to' currency
                onAmountChange={(amount) => setConvertedAmount(amount)} // Function to change the converted amount
                amountDisable // Disable the amount input field for the 'to' currency
                disabled={true} // Disable the input field for the 'to' currency
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {amount} {from.toUpperCase() + " "}
              to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
