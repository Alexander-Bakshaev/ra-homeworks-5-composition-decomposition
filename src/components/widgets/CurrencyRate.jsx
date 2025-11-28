/** Блок отображения курсов валют с динамическими значениями */
const CurrencyRate = ({ rates }) => (
  <div className="currency-rates">
    {rates.map((rate, index) => (
      <span key={index} className="rate-item">
        <strong>{rate.name}</strong>
        <span className="value"> {rate.value}</span>
        <span className="change"> {rate.change >= 0 ? '+' : ''}{rate.change}</span>
      </span>
    ))}
  </div>
);

export default CurrencyRate;
