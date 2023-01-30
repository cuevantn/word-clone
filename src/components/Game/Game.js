import React from "react";

import GuessesGrid from "../GuessesGrid/GuessesGrid";

function Game({ wordLength, maxGuesses, correctWord, guesses }) {
  return (
    <div>
      <GuessesGrid
        numCols={wordLength}
        numRows={maxGuesses}
        guesses={guesses}
        correctWord={correctWord}
      />
    </div>
  );
}

export default Game;
