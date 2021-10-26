import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleRight,  FaAngleLeft} from "react-icons/fa";
import { wrap } from "popmotion";
import styles from "../styles/Slider.module.css";
import Image from "next/image";


let images = ["/exterior.webp", "/leavingroom-0.webp",  "/hair-drasers.webp"]



export const ImageSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const src = images.length > 0 ? images[imageIndex] : `/exterior.webp`;

  return (
    <>
   <div className=" flex flex-row justify-center w-full ">
      <AnimatePresence initial={true} custom={direction}>
        <motion.div
          className={styles.slide}
          onClick={() => paginate(1)}
          key={page}
          custom={direction}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 300 },
            opacity: { duration: 1 }
          }}
        >
          <Image
            src={src}
            alt="Picture of the author"
            width={1342}
            height={572}
            loading="lazy"
            className={'img'}
          />
        </motion.div>
      </AnimatePresence>
      <motion.div
        className={styles.next}
        onClick={() => paginate(1)}
        whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
        whileTap={{ scale: 0.9 }}
      >
        <FaAngleLeft />
      </motion.div>
      <motion.div
        className={styles.prev}
        onClick={() => paginate(-1)}
        whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
        whileTap={{ scale: 0.9 }}
      >
        <FaAngleRight />
      </motion.div>
    </div>
    </>
  );
};

export default ImageSlider;
