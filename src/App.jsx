import React, { useState, useEffect } from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import { CardProvider } from "./contexts";

function App() {
  const [cards, setCards] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const addCard = (cardData) => {
    setCards((prev) => [...prev, { id: Date.now(), ...cardData }]);
    toggleForm();
  };

  const deleteCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("cards"));

    if (cards && cards.length > 0) {
      setCards(cards);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <CardProvider value={{ addCard, deleteCard, cards, toggleForm }}>
      <div className="relative w-full min-h-screen bg-zinc-800">
        <Background />
        <Foreground
          cards={cards}
          toggleForm={toggleForm}
          isFormOpen={isFormOpen}
        />
      </div>
    </CardProvider>
  );
}

export default App;
