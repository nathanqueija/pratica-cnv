import React, { useState } from "react";

interface RandomizerProps {
  title: string;
  words: string[];
}

export const Randomizer = ({ title, words }: RandomizerProps) => {
  const [selectedWord, setSelectedWord] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const pickRandomWord = () => {
    setIsAnimating(true);
    setIsFinished(false);
    let counter = 0;
    let intervalTime = 50; // Start with a faster interval

    const changeWord = () => {
      setSelectedWord(words[Math.floor(Math.random() * words.length)]);
      counter += intervalTime;

      // Gradually increase the interval time to slow down the animation
      if (intervalTime < 500) {
        // Cap the interval at 500ms for a smoother end
        intervalTime *= 1.1; // Increase the interval time by 10%
      }

      if (counter >= 5000) {
        clearInterval(intervalId);
        setIsAnimating(false);
        setIsFinished(true); // Set finished state to true
      } else {
        setTimeout(changeWord, intervalTime);
      }
    };

    const intervalId = setTimeout(changeWord, intervalTime);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center gap-4 justify-between">
        <h1 className="font-bold">{title}</h1>
        <button
          onClick={pickRandomWord}
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Escolher
        </button>
      </div>
      <div className="border rounded shadow-lg p-4 bg-white overflow-hidden h-20">
        {isAnimating || isFinished ? (
          <p className={!isFinished ? "animate-pulse" : "font-bold"}>
            {isFinished ? "✅ Opção escolhida:" : "Escolhendo..."}
          </p>
        ) : (
          <p className="h-full text-center flex align-center justify-center items-center text-sm text-gray-400">
            Clique no botão acima para iniciar a escolha
          </p>
        )}

        <div className={`word-display ${isAnimating ? "animate" : ""}`}>
          {selectedWord}
        </div>
      </div>
    </div>
  );
};
