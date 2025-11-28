/** Компонент отображения текущей даты и времени */
const DateTimeDisplay = () => {
  const date = new Date();
  const options = { day: 'numeric', month: 'long', weekday: 'long' };
  const time = date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  
  return (
    <div className="datetime">
      {date.toLocaleDateString('ru-RU', options)}, {time}
    </div>
  );
};

export default DateTimeDisplay;
