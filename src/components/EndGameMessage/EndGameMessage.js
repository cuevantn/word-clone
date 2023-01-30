import React from "react";

function EndGameMessage({ numGuesses, win, correctWord }) {
  if (win) {
    return (
      <div className="w-full h-16 flex items-center justify-center bg-green-600 text-white">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numGuesses} guesses</strong>.
        </p>
      </div>
    );
  }
  return (
    <div className="w-full h-16 flex items-center justify-center bg-red-600 text-white">
      <p>
        Sorry, the correct answer is <strong>{correctWord}</strong>.
      </p>
    </div>
  );
}

export default EndGameMessage;
