import React from "react";
import "../styles/card.css";

export default function Card({ title, children, tooltip }) {
    return (
        <div className="card" title={tooltip}>
            <h3 className="card-title">{title}</h3>
            {children}
        </div>
    );
}