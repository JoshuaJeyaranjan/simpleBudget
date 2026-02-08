import React from "react";
import type { Entry, Category } from "../types";

interface EntryFormProps {
  addEntry: (entry: Entry) => void;
}

const CATEGORIES: Category[] = [
  "Rent",
  "Groceries",
  "Transport",
  "Entertainment",
  "Income",
  "Other",
];

export const EntryForm: React.FC<EntryFormProps> = ({ addEntry }) => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const amount = Number(formData.get("amount"));
    const date = formData.get("date");
    const notes = formData.get("notes") || undefined;
    const category = formData.get("category");

    if (
      typeof date !== "string" ||
      typeof category !== "string" ||
      !CATEGORIES.includes(category as Category) ||
      Number.isNaN(amount) ||
      amount <= 0
    ) {
      alert("Please provide valid input.");
      return;
    }

let entry: Entry;

if (category === "Income") {
  entry = {
    id: crypto.randomUUID(),
    amount,
    date,
    notes: typeof notes === "string" ? notes : undefined,
    category: "Income",
    kind: "income",
  };
} else {
  entry = {
    id: crypto.randomUUID(),
    amount,
    date,
    notes: typeof notes === "string" ? notes : undefined,
    category: category as Exclude<Category, "Income">,
    kind: "expense",
  };
}

addEntry(entry);
    e.currentTarget.reset();
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Entry</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="amount" className="mb-1 text-gray-600 font-medium">
            Amount
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="mb-1 text-gray-600 font-medium">
            Category
          </label>
          <select
            id="category"
            name="category"
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          >
            <option value="" disabled>
              Select a category
            </option>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="mb-1 text-gray-600 font-medium">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="notes" className="mb-1 text-gray-600 font-medium">
            Notes
          </label>
          <input
            id="notes"
            name="notes"
            type="text"
            placeholder="Optional"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Add Entry
        </button>
      </form>
    </section>
  );
};
