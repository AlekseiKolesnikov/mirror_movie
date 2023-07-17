import React from 'react';
import "../styles/input/index.css";

export function SearchInput() {
    return (
        <div id={"search-content-container"}>
            <div className={"search-line"} id={"search-content-input-icon"}></div>
            <input type={"text"}
                   className={"search-line"}
                   id={"search-content-input"}
                   placeholder={"label of the movie"}
            />
        </div>
    );
}

