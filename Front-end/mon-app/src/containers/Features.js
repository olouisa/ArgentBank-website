import React from 'react';
import Chat from "../assets/img/icon-chat.png";
import Money from "../assets/img/icon-money.png";
import Security from "../assets/img/icon-security.png";
import Data from "../Lists/features.json";
import FeaturesItem from '../components/FeaturesItem';

function Features() {
  console.log(Data);
  console.log(Data.features)
  const Tab = Data.features;


  return (
    <div>
      <section className="features">
        <h2 className="sr-only">Features</h2>

        {Data.features.map((item) => {
          return (
            <FeaturesItem key={item.id} title={item.title} text={item.text} picture={require(`../assets/img/${item.picture}`)} />

          )
        })}

      </section>
    </div>
  )
}

export default Features
