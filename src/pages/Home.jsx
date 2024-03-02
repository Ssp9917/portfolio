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
      <div className="flex">
        <motion.div className="w-[50%] h-[90vh]  flex flex-col justify-center pl-32 gap-4"
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
                className="bg-black text-4xl  font-bold placeholder:text-white"
              />
            </ReactTyped>
          </div>
          <div className="text-white">
            I'm a Web Developer with extensive experience for over 5 years. My
            expertise is to create and Websites design, graphic design and many
            more...
          </div>
          <button className=" pl-4 pe-4 pt-1 pb-1 button hire relative overflow-hidden w-[150px] h-[50px]">
            Hire Me <FaArrowRight />
          </button>
        </motion.div>
        <motion.div className="w-[50%] h-[90vh] "
         initial={{ x: "100%" }}
         animate={{ x: "0%" }}
         transition={{ duration: 1 }}
        >
          <img src={sonu_logo} alt="" className="w-full h-full p-20" />
        </motion.div>
      </div>
      {/* About section */}
     <About/>
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
