import React from "react";

interface BalanceProps {
  balance: number;
}

export const Balance: React.FC<BalanceProps> = ({ balance }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto mt-6">
      <h2 className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
        Balance
      </h2>
      <p
        className={`mt-2 text-3xl font-bold ${
           balance < 0
            ? "text-red-500"
            : "text-green-500"
        }`}
      >
        ${balance.toFixed(2)}
      </p>
    </div>
  );
};
