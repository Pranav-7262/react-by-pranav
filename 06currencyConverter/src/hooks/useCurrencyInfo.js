import { useEffect, useState } from "react";

function useCurrencyInfo(currecy) {
  const [data, setData] = useState({});
  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currecy}.json`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json()) // Fetching the JSON data from the URL
      .then((res) => setData(res[currecy]));
  }, [currecy]); // Dependency array to re-run effect when 'currecy' changes
  console.log(data);
  return data;
}
export default useCurrencyInfo;
// This custom hook fetches currency information based on the provided currency code
