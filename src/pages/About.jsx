import React from 'react'
import about from "../compontnt/images/about.png";
import { motion } from "framer-motion";


const About = () => {
  return (
    <>
     <motion.div className="text-center text-white text-4xl font-semibold mb-14 mt-5 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration:0.5}}
     >
        About <span className="text-[#08d665]">Me</span>
      </motion.div>
      <div className="flex">
        <motion.div className="w-[50%] h-[70vh] pl-10 pe-10 "
         initial={{ x: '-100%' }}
         whileInView={{ x: '0%' }}
         transition={{duration:0.5}}
        >
          <img src={about} alt="" className="w-full h-full mt-5 rounded-2xl overflow-hidden shadowImg" />
        </motion.div>
        <motion.div className="w-[50%]  text-white"
         initial={{ x: '100%' }}
         whileInView={{ x: '0%' }}
         transition={{duration:0.5}}
        >
          <div className="text-[30px] font-semibold mb-3 pl-5 mt-5">Hello, I Am <span className="text-[#08d665]"> Web Developer</span></div>
          <div className="text-[15px] font-semibold mb-3 pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere. Ut aliquam metus quis laoreet elementum. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Aliquam porta faucibus arcu, et consequat velit vestibulum in. Donec quis tellus ut urna volutpat posuere quis consectetur quam.</div>
          <div className="flex gap-5 mb-3 pl-5">
            <div>Name</div>
            <div>:</div>
            <div>Sonu Sharma</div>
          </div>
          <div className="flex gap-5 mb-3 pl-5">
            <div>Phone</div>
            <div>:</div>
            <div>+91 8209950683</div>
          </div>
          <div className="flex gap-5 mb-3 pl-5">
            <div>E-mail</div>
            <div>:</div>
            <div>sonusharma30.09.2004@gmail.com</div>
          </div>
          <div className="flex gap-5 mb-3 pl-5">
            <div>Freelance</div>
            <div>:</div>
            <div>Available</div>
          </div>
          <button className="mb-3 pl-4 pe-4 pt-1 pb-1 button hire about relative overflow-hidden w-[150px] h-[50px] ml-5"></button>

        </motion.div>
      </div>
    </>
  )
}

export default About