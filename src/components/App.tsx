import { useRef, useState } from 'react'
import Navbar from './Navbar/Navbar';
import SearchBar from './Searchbar/Searchbar';
import { getUser } from '../util/fetch';
import './App.css'

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  const userInfo = getUser(user || "Mondara");
  
  const handleSearch = (e) => {
    e.preventDefault();

    if (username) {
      setUser(username);
    }
  }

  return (
    <div className="app">
      <Navbar />
      <SearchBar username={username} setUsername={setUsername} handleSearch={handleSearch}/>
    </div>
  )
}

export default App
