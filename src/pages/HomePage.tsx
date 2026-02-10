import React from "react";
import type { Entry } from "../types";
import { Balance } from "../components/Balance";
import { EntryList } from "../components/EntryList";
import { EntryForm } from "../components/EntryForm";

interface HomePageProps {
  title: string;
  entries: Entry[];
  balance: number;
  addEntry: (entry: Entry) => void;
  deleteEntry: (id: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  title,
  entries,
  balance,
  addEntry,
  deleteEntry,
}) => {
  return (
    <div>
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6 mt-8 tracking-tight">
          {title}
        </h1>
      </header>
      <main>
        <Balance balance={balance} />
        <EntryForm addEntry={addEntry} />
        <EntryList entries={entries} deleteEntry={deleteEntry} />
      </main>
    </div>
  );
};

export default HomePage;
