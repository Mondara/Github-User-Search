import { useState } from 'react'
import Navbar from './Navbar/Navbar';
import SearchBar from './Searchbar/Searchbar';
import './App.css'

function App() {
  const [username, setUsername] = useState("");

  const updateUsername = (username: string) => setUsername(username);

  return (
    <div className="app">
      <Navbar />
      <SearchBar input={username} onChange={updateUsername} />
    </div>
  )
}

export default App
