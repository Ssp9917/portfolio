import React from "react";
import Container from "../container/Container";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <Container>
      
      <div className="pt-2 flex  items-center justify-between  top-0 bg-black z-50">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1 }}
        >
          <h1 className="md:text-[32px] text-[20px] font-bold text-[#08d665] ml-4">sspDesigns</h1>
        </motion.div>
        <div>

          {/* desktop menu */}
          <ul className="md:flex md:items-center md:gap-5 md:pe-2  text-white font-semibold text-xl hidden">
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
          <IoMenu size={40} color="white" className="block md:hidden"/>

          {/* mobail menu */}
          <div>

          </div>
        </div>
      </div>
     
    </Container>
  );
};

export default Navbar;
