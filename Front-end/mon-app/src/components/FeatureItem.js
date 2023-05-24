import React from 'react';
import Data from "../Lists/features.json";
import "../styles/pages.css";



function FeatureItem({ item }) {
    return (

        <div className="feature-item">
            <img src={item.picture} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{item.title}</h3>
            <p>
                {item.text}
            </p>
        </div>



    )
}

export default FeatureItem
