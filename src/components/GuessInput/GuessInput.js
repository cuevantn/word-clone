import React from "react";

function GuessInput({ disabled, handleAddGuess, guessLength }) {
  const [newGuess, setNewGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper max-w-lg mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        handleAddGuess(newGuess);
        setNewGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={newGuess}
        disabled={disabled}
        required
        maxLength={guessLength}
        minLength={guessLength}
        onChange={(e) => setNewGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
