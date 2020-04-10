import React from 'react';

export default function Card (props) {
    return (
        <div>
            {props.cardData.map(stuff => (
                <div key={stuff.id}>

                    <h2>{stuff.name}</h2>
                    <h3>{stuff.country}</h3>

                </div>
    ))}
        </div>
    )
}