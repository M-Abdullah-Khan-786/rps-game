"use client";

import { useState } from "react";

const choices = ["rock", "paper", "scissors"];

type Choice = "rock" | "paper" | "scissors";

type Result = "win" | "lose" | "draw";

const getResult = (userChoice: Choice, computerChoice: Choice): Result => {
  if (userChoice === computerChoice) return "draw";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  }
  return "lose";
};

export default function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const playGame = (choice: Choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)] as Choice;
    setUserChoice(choice);
    setComputerChoice(compChoice);
    setResult(getResult(choice, compChoice));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Rock Paper Scissors</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {choices.map((choice) => (
          <button
            key={choice}
            className="px-6 py-3 bg-blue-500 text-lg rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300"
            onClick={() => playGame(choice as Choice)}
          >
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>
      {userChoice && computerChoice && (
        <div className="mt-8 text-center text-xl space-y-2">
          <p className="text-green-400 font-semibold">You chose: {userChoice}</p>
          <p className="text-red-400 font-semibold">Computer chose: {computerChoice}</p>
          <p className="font-bold text-2xl mt-4 p-2 rounded-lg bg-gray-800 shadow-md">
            {result === "win" ? "🎉 You Win!" : result === "lose" ? "😞 You Lose!" : "🤝 It's a Draw!"}
          </p>
        </div>
      )}
    </div>
  );
}
