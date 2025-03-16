import React, { useState } from 'react';
import './SearchEngine.css';

const SearchEngine = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        // Simulate search results
        setResults([
            'Result 1 for ' + query,
            'Result 2 for ' + query,
            'Result 3 for ' + query,
        ]);
    };

    return (
        <div className="app">
            <div className="quicklinks">
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>

            <div className="main">
                <h1 className="search-form-header">Search through CICD Knowledgebase</h1>
                <div className="search-engine">
                    <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search..."
                            className="search-input"
                        />
                        <button type="submit" className="search-button"></button>
                    </form>
                    <ul className="search-results">
                        {results.map((result, index) => (
                            <li key={index} className="search-result-item">{result}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default SearchEngine;