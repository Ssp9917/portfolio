import React from "react";
import Container from "../container/Container";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <Container>
      <div className="h-16 flex justify-between items-center">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[32px] font-bold text-[#08d665]">sspDesigns</h1>
        </motion.div>
        <div>
          <ul className="flex items-center gap-5 text-white font-semibold  text-xl">
            <Link>
              <motion.li
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1 }}
                className="hover:text-[#08d665] list"
              >
                Home
              </motion.li>
            </Link>
            <Link>
              <motion.li
                className="hover:text-[#08d665] list"
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1 }}
              >
                About
              </motion.li>
            </Link>
            <Link>
              <motion.li
                className="hover:text-[#08d665] list"
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1 }}
              >
                Projects
              </motion.li>
            </Link>
            <Link>
              <motion.li
              className="hover:text-[#08d665] list"
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1 }}
              >
                Contact
              </motion.li>
            </Link>
            <button className=" pl-4 pe-4 pt-1 pb-1 button relative overflow-hidden w-[150px] h-[50px]">
              Resume
            </button>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
