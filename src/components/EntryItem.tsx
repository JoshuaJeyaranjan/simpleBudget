import React from "react";
import clsx from "clsx";
import type { Entry } from "../types";

interface EntryItemProps {
  entry: Entry;
  deleteEntry: (id: string) => void;
}

export const EntryItem: React.FC<EntryItemProps> = ({ entry, deleteEntry }) => {
  const isIncome = entry.kind === "income";

  return (
    <li
      className={clsx(
        "flex justify-between items-center p-4 rounded-lg mb-2 shadow-sm",
        {
          "bg-green-50": isIncome,
          "bg-red-50": !isIncome,
        },
      )}
    >
      <div className="flex flex-col">
        <span className="font-medium">{entry.category}</span>
        <span className="text-gray-500 text-sm">{entry.date}</span>
        <span className="text-gray-500 text-sm">{entry.notes}</span>
      </div>
      <div className="flex items-center gap-4">
        <span
          className={clsx("font-bold", {
            "text-green-600": isIncome,
            "text-red-600": !isIncome,
          })}
        >
          ${entry.amount.toFixed(2)}
        </span>
        {deleteEntry && (
          <button
            onClick={() => deleteEntry(entry.id)}
            className="px-3 py-1 rounded-md border border-blue-400 text-blue-500 hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 font-medium"
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
};
