import React from 'react';
import Chat from "../assets/img/icon-chat.png";
import Money from "../assets/img/icon-money.png";
import Security from "../assets/img/icon-security.png";
import Data from "../Lists/features.json";
import FeaturesItem from './FeaturesItem';

function Features() {
    console.log(Data);
    console.log(Data.features)
    const Tab = Data.features;
    
  
  return (
    <div>
         <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeaturesItem title={Tab[0].title} text={Tab[0].text} picture={Chat} />
        <FeaturesItem title={Tab[1].title} text={Tab[1].text} picture={Money} />
        <FeaturesItem title={Tab[2].title} text={Tab[2].text} picture={Security} />

        
      </section>
    </div>
  )
}

export default Features
