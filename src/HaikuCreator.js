import { useState } from "react";
const syllables = require("syllables");
const randomWord = require("random-words");


const HaikuCreator = () => {
  let line = "";
//   let [wordSearch, changeWordSearch] = useState("");

  function pushLine(num, total) {
    let count = 0;
    let newWord = randomWord();
    count = parseInt(syllables(`${newWord}`));
    // if (count > parseInt(syllables(`${wordSearch}`))) {
    //     changeWordSearch(newWord);
    // }
    total = total + count;
    if (total > num) {
      total = total - count;
      pushLine(num, total);
    } else if (total < num) {
      line = line + `${newWord} `;
      pushLine(num, total);
    } else {
      line = line + `${newWord} `;
    }
  }

  function createLine(num) {
    let total = 0;
    line = "";
    pushLine(num, total);
    line = line.charAt(0).toUpperCase() + line.slice(1);
    return line;
  }

  let haiku = (
    <div>
      {createLine(5)}
      <br/>
      {createLine(7)}
      <br/>
      {createLine(5)}
      <br/>
    </div>
  );

  return haiku;
};

export default HaikuCreator;
