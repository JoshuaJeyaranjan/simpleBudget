import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useMemo } from 'react'
import HomePage from './pages/HomePage'
import type { AppState, Entry } from './types'

function App() {
  
  const [state, setState] = useState<AppState>({
    entriesById: {},
    entryIds: [],
  })

  const entries: Entry[] = useMemo(() => {
    return state.entryIds.map(id => state.entriesById[id])
  }, [state.entryIds, state.entriesById])

  const balance = useMemo(() => {
    return entries.reduce((total, entry) => {
      if (entry.kind === 'income') {
        return total + entry.amount
      }

      return total - entry.amount
    }, 0)
  }, [entries])

  const addEntry = (entry: Entry) => {
    setState(prev => ({
      entriesById: {
        ...prev.entriesById,
        [entry.id]: entry,
      },
      entryIds: [...prev.entryIds, entry.id],
    }))
  }

const deleteEntry = (id: string) => {
  setState((prev) => {
    const { [id]: unused, ...remainingEntries } = prev.entriesById;
    void unused; 

    return {
      entriesById: remainingEntries,
      entryIds: prev.entryIds.filter((entryId) => entryId !== id),
    };
  });
};

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              title='SimpleBudget'
              entries={entries}
              balance={balance}
              addEntry={addEntry}
              deleteEntry={deleteEntry}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
