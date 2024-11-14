import React, { useRef, useState } from "react";
import Card from "./Card";
import FormBtn from "./FormBtn";
import DockForm from "./DockForm";

function Foreground({ cards, toggleForm, isFormOpen }) {
  const ref = useRef(null);

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full">
      <FormBtn openForm={toggleForm} />

      {/* Background overlay when form is open */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[4]"></div>
      )}

      {/* The form itself */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[5] flex items-center justify-center">
          <DockForm closeForm={toggleForm} />
        </div>
      )}

      {/* Card display area */}
      <div className="flex flex-wrap gap-8 p-5">
        {cards.map((card) => (
          <div key={card.id}>
            <Card cardData={card} reference={ref} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foreground;
