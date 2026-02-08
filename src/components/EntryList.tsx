import React from "react";
import type { Entry } from "../types";
import { EntryItem } from "./EntryItem";

interface EntryListProps {
  entries: Entry[];
  deleteEntry: (id: string) => void;
}

export const EntryList: React.FC<EntryListProps> = ({ entries, deleteEntry }) => {
  if (!entries || entries.length === 0) {
    return <p className="text-gray-500 mt-4 text-center">No entries yet.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-center mb-4">Entry Log</h2>
      <ul>
        {entries.map((entry) => (
          <EntryItem key={entry.id} entry={entry} deleteEntry={deleteEntry} />
        ))}
      </ul>
    </div>
  );
};
