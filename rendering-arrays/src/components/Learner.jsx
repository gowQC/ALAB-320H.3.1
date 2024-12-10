import { useState } from "react";
import Score from "./Score";

export default function Learner(props) {
  return (
    <>
      <li>
        <h1>{props.name}</h1>
        <ul>
          <li>
            <h2>{props.bio}</h2>
          </li>
          <Score scores={props.scores} />
        </ul>
      </li>
      <br />
      <br />
    </>
  );
}
