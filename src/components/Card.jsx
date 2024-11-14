import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import useCard from "../contexts/CardContext";

function Card({ cardData, reference, toggleForm }) {
  const { deleteCard } = useCard();

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ upscale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="flex-shrink-0 relative w-44 h-52 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="mt-5 text-xs font-semibold leading-tight">
        {cardData.description}
      </p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex justify-around items-center px-5 py-1 mb-3">
          <h5>{cardData.fileSize}</h5>
          <button
            onClick={() => deleteCard(cardData.id)}
            className="flex items-center justify-center rounded-full w-7 h-7 bg-zinc-600"
          >
            <IoClose />
          </button>
          <button className="flex items-center justify-center rounded-full w-7 h-7 bg-zinc-600">
            <LuDownload size="0.7em" color="#fff" />
          </button>
        </div>
        {cardData.isTagOpen && (
          <div
            className={`tag w-full py-2 flex items-center justify-center`}
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
