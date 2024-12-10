export default function Score(props) {
  return (
    <ul>
      {props.scores.length &&
        props.scores.map((score) => {
          return (
            <li>
              <h3>
                {score.date}: score: {score.score}
              </h3>
            </li>
          );
        })}
    </ul>
  );
}
