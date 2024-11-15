import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import useCard from "../contexts/CardContext";
import { jsPDF } from "jspdf";

function Card({ cardData, reference }) {
  const { deleteCard } = useCard();

  const handleDownloadPDF = () => {
    // Create a new PDF document
    const doc = new jsPDF();

    // Add the title as a large heading
    doc.setFontSize(24);
    doc.text(cardData.tagTitle, 20, 30);

    // Add a horizontal line under the heading
    doc.setLineWidth(0.5);
    doc.line(20, 35, 190, 35);

    // Add the description content below the heading
    doc.setFontSize(12);
    doc.text(cardData.description, 20, 50);

    // Save the PDF with a filename
    doc.save("document.pdf");
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ upscale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="flex-shrink-0 relative w-48 h-56 rounded-[45px] bg-zinc-900/90 text-white px-5 py-6 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="mt-5 text-sm font-semibold leading-tight">
        {cardData.description}
      </p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex justify-between items-center px-5 py-1 mb-3">
          <h5 className="text-sm">{cardData.fileSize}</h5>
          <div className="btns-container flex gap-2">
            <button
              onClick={() => deleteCard(cardData.id)}
              className="flex items-center justify-center rounded-full w-6 h-6 bg-zinc-600"
            >
              <IoClose size="0.7em" />
            </button>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center justify-center rounded-full w-6 h-6 bg-zinc-600"
            >
              <LuDownload size="0.7em" color="#fff" />
            </button>
          </div>
        </div>
        {cardData.isTagOpen && (
          <div
            className="w-full py-2 flex items-center justify-center"
            style={{ backgroundColor: cardData.tagColor }}
          >
            <h3 className="text-sm font-semibold">{cardData.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
