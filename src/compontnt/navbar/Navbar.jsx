import React, { useState } from "react";
// import Container from "../container/Container";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [togle, setTogle] = useState(false);

  return (
    // <Container>

    <div className="pt-2 flex  items-center justify-between fixed  top-0 bg-black z-50 w-full">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1 }}
      >
        <h1 className="md:text-[32px] text-[20px] font-bold text-[#08d665] ml-4">
          sspDesigns
        </h1>
      </motion.div>
      <div>
        {/* desktop menu */}
        <ul className="md:flex md:items-center md:gap-5 md:pe-2  text-white font-semibold text-xl hidden ">
          <Link to="">
            <motion.li
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1 }}
              className="hover:text-[#08d665] list"
            >
              Home
            </motion.li>
          </Link>
          <Link to="about">
            <motion.li
              className="hover:text-[#08d665] list"
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1 }}
            >
              About
            </motion.li>
          </Link>
          <Link to="service">
            <motion.li
              className="hover:text-[#08d665] list"
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1 }}
            >
              service
            </motion.li>
          </Link>

          <Link to="project">
            <motion.li
              className="hover:text-[#08d665] list"
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1 }}
            >
              Projects
            </motion.li>
          </Link>
          <Link to="contact">
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
        {!togle ? (
          <IoMenu
            size={40}
            color="white"
            className={`block md:hidden ${togle ? "hidden" : "block"}`}
            onClick={() => {
              setTogle(true);
            }}
          />
        ) : (
          <IoMdClose
            size={40}
            color="white"
            className={`block md:hidden ${togle ? "block" : "hidden"}`}
            onClick={() => {
              setTogle(false);
            }}
          />
        )}
        {/* mobail menu */}
        <ul
          className={`w-full h-screen fixed z-50 top-14 transition-all duration-700 morfisim flex flex-col justify-center items-center gap-5 text-white text-2xl  ${
            togle == true ? "left-0" : "-left-full"
          }`}
        >
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
          <button className=" pl-4 pe-4 pt-1 pb-1 rounded-full  border-white duration-500 hover:border-[#08d655] border-2 w-[150px] h-[50px]">
            Resume
          </button>
        </ul>
        <div></div>
      </div>
    </div>

    // </Container>
  );
};

export default Navbar;
