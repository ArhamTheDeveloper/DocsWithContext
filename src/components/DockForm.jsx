import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import useCard from "../contexts/CardContext";

export default function DockForm({ closeForm }) {
  const [description, setDescription] = useState("");
  const [tagTitle, setTagTitle] = useState("Download Now");
  const [tagColor, setTagColor] = useState("green");
  const [fileSize, setFileSize] = useState("0.0 KB");
  const [isTagOpen, setIsTagOpen] = useState(true);

  const { addCard } = useCard();

  const calculateSize = (text) => {
    const sizeInBytes = new Blob([text]).size;
    return (sizeInBytes / 1024).toFixed(2) + " KB";
  };

  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    setDescription(text);
    setFileSize(calculateSize(text));
  };

  const handleAddCard = (e) => {
    e.preventDefault();

    if (!description.trim()) {
      alert("Please enter a description!");
      return;
    }
    
    // Add the new card with all the required fields
    addCard({
      description,
      fileSize,
      tagColor,
      tagTitle,
      isTagOpen,
    });

    // Reset form fields
    setDescription("");
    setTagTitle("Download Now");
    setTagColor("green");
    setFileSize("0.0 KB");
    setIsTagOpen(true);
  };

  return (
    <div className="relative max-w-md mx-auto p-6 bg-zinc-700 shadow-lg rounded-lg">
      <button
        onClick={closeForm}
        className="absolute top-2 right-2 text-white hover:text-red-500"
      >
        <IoClose size={24} />
      </button>
      <h3 className="text-xl font-semibold text-white mb-4">
        Enter a Description
      </h3>
      <form className="flex gap-2 flex-col" onSubmit={handleAddCard}>
        <div>
          <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={description}
            onChange={handleDescriptionChange}
          />
          <p className="text-xs text-gray-400">Estimated Size: {fileSize}</p>{" "}
          {/* Display calculated size */}
        </div>
        <div>
          <h3 className="text-md font-semibold text-white mb-4">
            Enter a TagTitle
          </h3>
          <input
            type="text"
            placeholder="Write TagTitle..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={tagTitle}
            onChange={(e) => setTagTitle(e.target.value)}
          />
        </div>
        <div>
          <h3 className="text-md font-semibold text-white mb-4">
            Enter a TagColor
          </h3>
          <input
            type="text"
            placeholder="Write TagColor..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={tagColor}
            onChange={(e) => setTagColor(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={isTagOpen}
            onChange={() => setIsTagOpen(!isTagOpen)}
          />
          <label>TagOpen</label>
        </div>
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </div>
  );
}
