/** Список текущих трансляций с каналами */
export const LiveBroadcast = ({ broadcasts }) => (
  <div className="live-broadcast">
    <h3>Эфир</h3>
    <ul>
      {broadcasts.map((broadcast, index) => (
        <li key={index}>
          <a href={broadcast.link}>{broadcast.title}</a>
          <span className="channel">{broadcast.channel}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default LiveBroadcast;
