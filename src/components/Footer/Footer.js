import React from "react";

import GuessInput from "../GuessInput/GuessInput";
import EndGameMessage from "../EndGameMessage/EndGameMessage";

function Footer({
  wordLength,
  maxGuesses,
  numGuesses,
  guesses,
  setGuesses,
  handleAddGuess,
  correctWord,
  settingGame,
  setSettingGame,
}) {
  const win = guesses[numGuesses - 1] === correctWord;
  const gameEnded = win || numGuesses === maxGuesses;

  return (
    <footer className="flex flex-col justify-between sticky bottom-0 bg-white border-t border-t-zinc-600">
      {settingGame || gameEnded ? (
        gameEnded ? (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSettingGame(true);
                setGuesses([]);
              }}
            >
              <button
                type="submit"
                className="font-bold h-16 flex items-center justify-center mx-auto"
              >
                Jugar otra vez
              </button>
            </form>
            <EndGameMessage
              win={win}
              numGuesses={numGuesses}
              correctWord={correctWord}
            />
          </>
        ) : (
          <h1 className="h-16 flex items-center justify-center">
            <span className="mr-1">Sígueme en</span>
            <a href="https://twitter.com/cuevantn" target="_blank">
              twitter
            </a>
          </h1>
        )
      ) : (
        <GuessInput
          disabled={gameEnded}
          handleAddGuess={handleAddGuess}
          guessLength={wordLength}
        />
      )}
    </footer>
  );
}

export default Footer;
