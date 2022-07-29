import { useState } from 'react';
import './Searchbar.css';

interface Props {
    username: string;
    setUsername: (value: string) => void;
    handleSearch: (e: any) => void;
}

export default function Searchbar({ username, setUsername, handleSearch }: Props) {

    return (
        <form onSubmit={handleSearch} className="searchbar-container">
            <div className="searchbar-innercontainer">
                <img src='/src/assets/icon-search.svg' className="searchbar-icon" />
                <input
                    className="searchbar-input"
                    placeholder="Search Github Username..."
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <button className="searchbar-btn" type="submit" >Search</button>
        </form>
    )
}
