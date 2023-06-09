import React from 'react';
import Chat from "../assets/img/icon-chat.png";
import Money from "../assets/img/icon-money.png";
import Security from "../assets/img/icon-security.png";
import Data from "../Lists/features.json";

function Features() {
    console.log(Data);
    console.log(Data.features)
    const Tab = Data.features;
    
  
  return (
    <div>
         <section className="features">
        <h2 className="sr-only">Features</h2>
        <div className="feature-item">
            <img src={Chat} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{Tab[0].title}</h3>
            <p>
                {Tab[0].text}
            </p>
        </div>
          <div className="feature-item">
            <img src={Money} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{Tab[1].title}</h3>
            <p>
                {Tab[1].text}
            </p>
        </div>
        <div className="feature-item">
            <img src={Security} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{Tab[2].title}</h3>
            <p>
                {Tab[2].text}
            </p>
        </div>
      </section>
    </div>
  )
}

export default Features
