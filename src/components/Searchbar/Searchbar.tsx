import React from 'react';
import './Searchbar.css';

interface Props {
    input: string;
    onChange: (value: string) => void;
}

export default function Searchbar({ input, onChange }: Props) {
    return (
        <div className="searchbar-container">
            <div className="searchbar-innercontainer">
                <img src='../../../public/assets/icon-search.svg' className="searchbar-icon" />
                <input
                    className="searchbar-input"
                    placeholder="Search Github Username..."
                    type="text"
                    value={input}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
            <button className="searchbar-btn">Search</button>
        </div>
    )
}
