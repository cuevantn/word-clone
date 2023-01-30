import React from "react";
import { range } from "../../utils";

function GuessSlot({ guessLetter, correctLetter, correctWord }) {
  const backgroundColor = guessLetter
    ? correctWord.includes(guessLetter)
      ? correctLetter === guessLetter
        ? "bg-green-600 border-green-600"
        : "bg-yellow-600 border-yellow-600"
      : "bg-zinc-600 border-zinc-600"
    : "border-zinc-400";

  return (
    <div
      class={
        "aspect-square flex items-center justify-center border rounded " +
        backgroundColor
      }
    >
      <span className="font-bold text-4xl text-white ">
        {guessLetter || ""}
      </span>
    </div>
  );
}

function GuessesGrid({ numCols, numRows, guesses, correctWord }) {
  let gridTemplateRows;
  switch (numRows) {
    case 5:
      gridTemplateRows = "grid-rows-5";
      break;
    case 6:
      gridTemplateRows = "grid-rows-6";
      break;
    case 7:
      gridTemplateRows = "grid-rows-7";
      break;
    default:
      gridTemplateRows = "";
  }

  let gridTemplateColumns;
  switch (numCols) {
    case 3:
      gridTemplateColumns = "grid-cols-3";
      break;
    case 4:
      gridTemplateColumns = "grid-cols-4";
      break;
    case 5:
      gridTemplateColumns = "grid-cols-5";
      break;
    case 6:
      gridTemplateColumns = "grid-cols-6";
      break;
    case 7:
      gridTemplateColumns = "grid-cols-7";
      break;
    default:
      gridTemplateColumns = "";
  }

  return (
    <div className={"max-w-lg mx-auto p-2 grid gap-y-2 " + gridTemplateRows}>
      {range(numRows).map((x) => (
        <div key={`${x}`} className={"grid gap-x-2 " + gridTemplateColumns}>
          {range(numCols).map((y) => (
            <GuessSlot
              key={`${x},${y}`}
              guessLetter={(guesses && guesses[x] && guesses[x][y]) || ""}
              correctLetter={correctWord[y]}
              correctWord={correctWord}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default GuessesGrid;
