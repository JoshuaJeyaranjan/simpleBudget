import React, {useState} from "react";
import type { Entry } from "../types";
interface HomePageProps {
    title?: string;
}

const HomePage: React.FC<HomePageProps> = ({ title = "SimpleBudget" }) => {
  const [entries, setEntries] = useState<Entry[]>([]);

  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
            <main>
                
            </main>
        </div>
    );
};

export default HomePage;