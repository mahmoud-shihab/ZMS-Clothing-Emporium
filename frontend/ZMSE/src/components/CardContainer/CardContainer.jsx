import React from 'react';
import Card from '../Card/Card.jsx';
import './CardContainer.scss';

const CardContainer = ({ showFourthCard }) => {
  return (
    <div className="card-container">
      <div className="card-container__content">
        <Card
          image="https://via.placeholder.com/300"
          title="Top"
          description="Description for card 1"
          buttonText="Buy now"
        />
        <Card
          image="https://via.placeholder.com/300"
          title="Bottom"
          description="Description for card 2"
          buttonText="Buy now"
        />
        <Card
          image="https://via.placeholder.com/300"
          title="Shoes"
          description="Description for card 3"
          buttonText="Buy now"
        />
        {showFourthCard && (
          <Card
            image="https://via.placeholder.com/300"
            title="Accessory"
            description="Description for card 4"
            buttonText="Buy now"
          />
        )}
      </div>
    </div>
  );
};

export default CardContainer;
