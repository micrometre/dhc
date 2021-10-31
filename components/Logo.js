import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleRight,  FaAngleLeft} from "react-icons/fa";
import { wrap } from "popmotion";
import Image from "next/image";
const images = ["/exterior.webp"]

export const ImageSlider = () => {
  const src = `/exterior.webp`;
  return (
    <>
   <div className=" flex flex-row justify-center w-full ">
      <AnimatePresence initial={true} >
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 300 },

            opacity: { duration: 1 }
          }}
        >
          <Image
            src={src}
            alt="Picture of the logo"
            width={342}
            height={172}
            loading="lazy"
            className={'image'}
          />
        </motion.div>
      </AnimatePresence>
    </div>
    </>
  );
};

export default ImageSlider;

