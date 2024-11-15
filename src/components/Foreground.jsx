import React, { useRef } from "react";
import Card from "./Card";
import FormBtn from "./FormBtn";
import DockForm from "./DockForm";

function Foreground({ cards, toggleForm, isFormOpen }) {
  const ref = useRef(null);

  return (
    <div ref={ref} className=" w-full h-full">
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

      {/* Responsive card display area */}
      <div className="flex flex-wrap gap-6 justify-center p-5">
        {cards.map((card) => (
          <Card key={card.id} cardData={card} reference={ref} />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
