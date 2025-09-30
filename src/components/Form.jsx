import { useEffect, useState } from "react";

import Select from "./Select";

const API_KEY = "e722b2ac118dcc46f6d257e2";

export default function Form() {
  const [val, setVal] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [rate, setRate] = useState(null);
  const [error, setError] = useState(null);

  const currencySymbols = {
    AUD: "A$", // австралийский доллар
    USD: "US$", // доллар США
    EUR: "€", // евро
    CAD: "CA$", // канадский доллар
    CNY: "¥", // китайский юань
    MXN: "MX$", // мексиканский песо
    NOK: "Nkr", // норвежская крона
    NZD: "NZ$", // новозеландский доллар
    RUB: "₽", // российский рубль
    SGD: "S$", // сингапурский доллар
    CHF: "CHF", // швейцарский франк
    SEK: "Skr", // шведская крона
    UZS: "so'm", // узбекский сум
    GBP: "£", // фунт стерлингов
    KRW: "₩", // южнокорейская вона
    JPY: "¥", // японская иена
    HKD: "HK$", // гонконгский доллар
  };

  let currencySign = currencySymbols[toCurrency] || toCurrency;

  useEffect(() => {
    if (!val || val <= 0) return;

    const url = `https://hexarate.paikama.co/api/rates/latest/${fromCurrency}?target=${toCurrency}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (json.data && typeof json.data.mid === "number") {
          setRate(json.data.mid);
          setError(null);
        } else {
          setError("Не удалось получить курс");
        }
      })
      .catch((err) => setError(err.message));
  }, [val, fromCurrency, toCurrency]);

  let converted = rate !== null ? Number(val) * Number(rate) : "";

  return (
    <form className="form" method="get">
      <div className="fieldset flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-[auto] items-center">
        <input
          value={val.toLocaleString("ru-RU")}
          onChange={(e) => setVal(e.target.value)}
          className="currency-input"
          type="number"
          placeholder="1.0"
        />

        <Select
          className={"currency-select lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3"}
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-10 mx-auto opacity-50 bg-gray-300 rounded-full p-1 sm:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>

        <Select
          className={"currency-select sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 lg:col-start-3"}
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-10 bg-gray-300 p-1 rounded-full mx-auto font-bold opacity-50 sm:hidden lg:block lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.499 8.248h15m-15 7.501h15"
          />
        </svg>

        <div className="input-wrapper flex justify-between items-center border p-1 sm:p-2 w-full gap-2.5 sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2">
          <input
            className="focus:outline-none w-full"
            type="text"
            value={
              val === "" || val === null
                ? ""
                : converted
                ? Number(converted.toFixed(2)).toLocaleString("ru-RU")
                : ""
            }
            readOnly
            placeholder="0.85"
          />
          <span className="currency-sign block text-xl font-medium border-l pl-2">
            {currencySign}
          </span>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </form>
  );
}
