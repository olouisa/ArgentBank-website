import React from 'react';
// import Chat from "../assets/img/icon-chat.png";
// import Money from "../assets/img/icon-money.png";
// import Security from "../assets/img/icon-security.png";
import Data from "../Lists/features.json";
import FeatureItem from '../components/FeatureItem';

function Features() {
    console.log(Data);
    console.log(Data.features)
    
  
  return (
    <div>
         <section className="features">
        <h2 className="sr-only">Features</h2>

       {Data.features.map((item) => {
        return (
            <FeatureItem  key={item.id} item={item} />

        )
       }) }
      </section>
    </div>
  )
}

export default Features
