import React from "react";

export default function FormBtn({ openForm }) {
  return (
    <div className="relative z-[1]">
      <button
        className="absolute top-4 right-4 text-white bg-zinc-700 px-2 py-4 rounded-2xl font-semibold hover:bg-zinc-900 transition-colors duration-100"
        onClick={openForm}
      >
        Create New Doc
      </button>
    </div>
  );
}
