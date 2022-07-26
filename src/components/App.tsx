import { useState } from 'react'
import Navbar from './Navbar/Navbar';
import SearchBar from './Searchbar/Searchbar';
import Userprofile from './Userprofile/Userprofile';

import { getUser } from '../util/fetch';
import './App.css'

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  const userInfo = getUser(user || "Microsoft");
  
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
      <Userprofile user={userInfo} />
    </div>
  )
}

export default App
