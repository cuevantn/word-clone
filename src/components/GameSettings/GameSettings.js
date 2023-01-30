import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";


function GameSettings({
  wordLength,
  setWordLength,
  maxGuesses,
  setMaxGuesses,
  setCorrectWord,
  setSettingGame,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const word = sample(WORDS[wordLength]);
        setCorrectWord(word);
        setSettingGame(false);
      }}
      className="max-w-lg mx-auto flex flex-col justify-center items-center"
    >
      <div className="flex flex-col mb-4 items-center">
        <label htmlFor="word-length" className="font-bold">
          Longitud de palabra
        </label>
        <input
          type="number"
          className="p-2 w-32 border-2 rounded border-zinc-600 outline-offset-4"
          id="word-length"
          value={wordLength}
          required
          min={3}
          max={7}
          onChange={(e) => setWordLength(parseInt(e.target.value))}
        />
      </div>

      <div className="flex flex-col mb-4 items-center">
        <label htmlFor="num-guesses" className="font-bold">
          Máximo número de intentos
        </label>
        <input
          type="number"
          className="p-2 w-32 border-2 rounded border-zinc-600 outline-offset-4"
          id="num-guesses"
          value={maxGuesses}
          required
          min={5}
          max={10}
          onChange={(e) => setMaxGuesses(parseInt(e.target.value))}
        />
      </div>
      <button type="submit" className="font-bold text-xl bg-yellow-600 h-12 w-64 text-center rounded-lg">Start Game</button>
    </form>
  );
}

export default GameSettings;
