import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import CardContainer from './components/CardContainer/CardContainer.jsx';

function App() {
  const [showFourthCard, setShowFourthCard] = useState(false);

  const handleCheckboxChange = (event) => {
    setShowFourthCard(event.target.checked);
  };

  return (
    <div id="root">
      <Header />
      <Sidebar onCheckboxChange={handleCheckboxChange} />
      <div className="main-content">
        <CardContainer showFourthCard={showFourthCard} />
      </div>
    </div>
  );
}

export default App;
