import React, { useState } from 'react';
import { Navbar, Searchbar, Userprofile } from './components'
import ThemeProvider from './theme/ThemeProvider';

import { getUser } from './util';
import './App.css'

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  const { data, error } = getUser(user || "Mondara");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username) {
      setUser(username);
    }
  }

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Searchbar username={username} setUsername={setUsername} handleSearch={handleSearch} error={error} />
        {data && <Userprofile user={data} />}
      </div>
    </ThemeProvider>
  )
}

export default App
