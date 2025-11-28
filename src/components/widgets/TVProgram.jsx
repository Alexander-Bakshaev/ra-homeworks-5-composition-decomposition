/** Телепрограмма с временем, каналом и названием */
const TVProgram = ({ programs }) => (
  <div className="tv-program">
    <h3>Телепрограмма</h3>
    <ul>
      {programs.map((program, index) => (
        <li key={index}>
          <span className="time">{program.time}</span>
          <span className="channel">{program.channel}</span>
          <span className="title">{program.title}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default TVProgram;
