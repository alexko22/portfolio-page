// Alex Olson | alexko22222@gmail.com
// src/components/Card.tsx

// imports
import React from "react";
import "../styles/Card.css";

// defining card types
interface Stat {
    value: string;
    label: string;
    color?: string;
}

interface CardProps {
    type?: "default" | "stat";
    title?: string;
    description: React.ReactNode;
    imageUrl?: string;
    stat?: Stat | Stat[];
}

// defining Card...
const Card: React.FC<CardProps> = ({ type = "default", title, description, imageUrl, stat }) => {
    const statsArray = Array.isArray(stat) ? stat : stat ? [stat] : [];

    return (
        <div className="card">
            {type === "stat" && statsArray.length > 0 ? (
                <>
                    <div className="card-top-row">
                        {imageUrl && <img src={imageUrl} alt="icon" className="card-image" />}
                        <div className="stat-texts">
                            {statsArray.map((s, i) => (
                                <div key={i} className="stat-text">
                                    <h2 style={{ color: s.color || "#4f46e5" }}>{s.value}</h2>
                                    <p>{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="card-description">{description}</p>
                </>
            ) : (
                <>
                    <div className="card-top-row">
                        {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
                        {title && <h3>{title}</h3>}
                    </div>
                    <p className="card-description">{description}</p>
                </>
            )}
        </div>
    );
};

// default function
export default Card;




