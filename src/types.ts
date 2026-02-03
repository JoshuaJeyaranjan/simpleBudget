export type Category = 
  | "Rent"
  | "Groceries"
  | "Transport"
  | "Entertainment"
  | "Income"
  | "Other";

export type EntryBase = {
  id: string;            
  amount: number;        
  date: string;         
  notes?: string;
};

export type Expense = EntryBase & {
  kind: "expense";
  category: Exclude<Category, "Income">;
};

export type Income = EntryBase & {
  kind: "income";
  category: "Income";
};

export type Entry = Expense | Income;

export type AppState = {
  entriesById: Record<string, Entry>;
  entryIds: Entry['id'][]; 
};

