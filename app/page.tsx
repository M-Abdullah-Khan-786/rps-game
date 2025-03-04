"use client"

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Rock Paper Scissors</h1>
      <div className="flex space-x-4">
        {choices.map((choice) => (
          <button
            key={choice}
            className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700"
            onClick={() => playGame(choice as Choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      {userChoice && computerChoice && (
        <div className="mt-6 text-xl">
          <p>You chose: {userChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <p className="font-bold mt-2">Result: {result}</p>
        </div>
      )}
    </div>
  );
}
