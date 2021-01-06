import React from "react";
import "./styles.css";

export default function Calculator() {
  let song1 = "01:40";
  let song2 = "03:30";

  let minute = 0;
  let second = 0;

  song1 = song1.split(":");
  song2 = song2.split(":");

  second = parseFloat(song1[1]) + parseFloat(song2[1]);
  secondPlus = second % 60;

  minute = parseFloat(song1[0]) + parseFloat(song2[0]);
  minutePlus = minute % 60;
  if (second >= 60) {
    minutePlus++;
  }

  alert("sum of above time= " + minutePlus + ":" + secondPlus);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}