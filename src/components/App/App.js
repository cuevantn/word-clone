import React from "react";

import Game from "../Game";
import GameSettings from "../GameSettings/GameSettings";
import Header from "../Header";
import Footer from "../Footer";

import { WORDS } from "../../data";

function App() {
  const [settingGame, setSettingGame] = React.useState(true);

  const [wordLength, setWordLength] = React.useState(5);
  const [maxGuesses, setMaxGuesses] = React.useState(6);

  const [correctWord, setCorrectWord] = React.useState("");

  const [guesses, setGuesses] = React.useState([]);
  const numGuesses = guesses.length;

  const handleAddGuess = (newGuess) => {
    if (WORDS[wordLength].includes(newGuess)) {
      const nextGuesses = [...guesses, newGuess];
      setGuesses(nextGuesses);
    } else {
      alert("That's not a valid word!");
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="grow">
        {settingGame ? (
          <GameSettings
            wordLength={wordLength}
            setWordLength={setWordLength}
            maxGuesses={maxGuesses}
            setMaxGuesses={setMaxGuesses}
            setCorrectWord={setCorrectWord}
            setSettingGame={setSettingGame}
          />
        ) : (
          <Game
            wordLength={wordLength}
            maxGuesses={maxGuesses}
            correctWord={correctWord}
            guesses={guesses}
          />
        )}
      </div>
      <Footer
        handleAddGuess={handleAddGuess}
        wordLength={wordLength}
        maxGuesses={maxGuesses}
        numGuesses={numGuesses}
        guesses={guesses}
        setGuesses={setGuesses}
        correctWord={correctWord}
        setSettingGame={setSettingGame}
        settingGame={settingGame}
      />
    </div>
  );
}

export default App;
