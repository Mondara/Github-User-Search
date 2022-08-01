import { useState } from 'react';
import './Searchbar.css';

interface Props {
    username: string;
    setUsername: (value: string) => void;
    handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
    error: { 
        status: boolean,
        statusText: string
    };
}

export function Searchbar({ username, setUsername, handleSearch, error }: Props) {

    return (
        <form onSubmit={handleSearch} className={`searchbar-container ${error.status && error.statusText}`}>
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

            {error.status && <span className="searchbar-error"> {error.statusText}</span>}
            <button className="searchbar-btn" type="submit" >Search</button>
        </form>
    )
}
