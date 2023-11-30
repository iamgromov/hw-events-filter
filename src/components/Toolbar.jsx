import React from "react";

export default function Toolbar( {filters, selected, onSelectFilter}) {
    return (
        <div className="toolbar">
            {filters.map((item) => 
                <button 
                    onClick={onSelectFilter}
                    key={item}
                    className={item === selected ? "active" : ""}
                >{item}</button>)}
        </div>
    )
}