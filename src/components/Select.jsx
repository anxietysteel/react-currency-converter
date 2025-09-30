export default function Select({ value, onChange, className }) {
  return (
    <select value={value} onChange={onChange} className={className}>
      <option className="currency-options" value="AUD">
        Австралийский доллар (AUD)
      </option>
      <option className="currency-options" value="HKD">
        Гонконгский доллар (HKD)
      </option>
      <option className="currency-options" value="USD">
        Доллар США (USD)
      </option>
      <option className="currency-options" value="EUR">
        Евро (EUR)
      </option>
      <option className="currency-options" value="CAD">
        Канадский доллар (CAD)
      </option>
      <option className="currency-options" value="CNY">
        Китайский юань (CNY)
      </option>
      <option className="currency-options" value="MXN">
        Мексиканское песо (MXN)
      </option>
      <option className="currency-options" value="NOK">
        Норвежская крона (NOK)
      </option>
      <option className="currency-options" value="NZD">
        Новозеландский доллар (NZD)
      </option>
      <option className="currency-options" value="RUB">
        Российский рубль (RUB)
      </option>
      <option className="currency-options" value="SGD">
        Сингапурский доллар (SGD)
      </option>
      <option className="currency-options" value="CHF">
        Швейцарский франк (CHF)
      </option>
      <option className="currency-options" value="SEK">
        Шведская крона (SEK)
      </option>
      <option className="currency-options" value="UZS">
        Узбекский сум (UZS)
      </option>
      <option className="currency-options" value="GBP">
        Фунт стерлингов (GBP)
      </option>
      <option className="currency-options" value="KRW">
        Южнокорейская вона (KRW)
      </option>
      <option className="currency-options" value="JPY">
        Японская иена (JPY)
      </option>
    </select>
  );
}
