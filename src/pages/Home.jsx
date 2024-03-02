import React from "react";
import Container from "../compontnt/container/Container";
import { ReactTyped } from "react-typed";
import sonu_logo from "../compontnt/images/logo.png";
import Service from "./Service";
import Project from "./Project";
import Contact from "./Contact";
import { FaArrowRight } from "react-icons/fa";
import About from "./About";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Container>
      {/* hero section */}
      <div className="flex flex-wrap">
        <motion.div
          className="md:w-[50%] mt-20 md:h-[90vh] w-full flex flex-col justify-center md:pl-32  gap-4 sm:pl-16 sm:pe-16 ps-4  md:pe-0"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1 }}
        >
          <div className="text-xl font-bold text-[#08d665]">HI THERE,</div>
          <div>
            <ReactTyped
              strings={[
                "I Am Web Designer",
                "I Am Sonu Sharma",
                "I Am Web Developer",
              ]}
              typeSpeed={60}
              backSpeed={50}
              attr="placeholder"
              loop
              // className="text-white"
            >
              <input
                type="text"
                placeholder="I Am"
                className="bg-black text-2xl  font-bold placeholder:text-white w-full"
              />
            </ReactTyped>
          </div>
          <div className="text-white">
            I'm a Web Developer with extensive experience for over 5 years. My
            expertise is to create and Websites design, graphic design and many
            more...
          </div>
          <button className=" md:pl-4 md:pe-4 pt-1 pb-1 pl-2 pe-2  button hire relative overflow-hidden md:w-[150px] h-[50px] w-[100px] ">
            Hire Me <FaArrowRight />
          </button>
        </motion.div>
        <motion.div
          className="md:w-[50%] w-full  md:h-[90vh] sm:w-[300px] sm:mx-auto md:mx-0 "
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1 }}
        >
          <img src={sonu_logo} alt="" className="w-full h-full md:p-20" />
        </motion.div>
      </div>
      {/* About section */}
      <About />
      {/* service section */}
      <Service />

      {/* Project Section */}
      <Project />
      {/* Contact Section */}
      <Contact />
    </Container>
  );
};

export default Home;
