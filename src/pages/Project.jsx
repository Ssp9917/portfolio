import React from "react";
import p1 from "../compontnt/images/p1.jpg";
import p2 from "../compontnt/images/p2.jpg";
import p3 from "../compontnt/images/p3.jpg";
import { motion } from "framer-motion";

const Project = () => {
  const project = [
    {
      image: p1,
      heading: "Latest Trend in Business",
      time: "July 31, 2024",
      category: "Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    },
    {
      image: p2,
      heading: "Latest Trend in Business",
      time: "July 31, 2024",
      category: "Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    },
    {
      image: p3,
      heading: "Latest Trend in Business",
      time: "July 31, 2024",
      category: "Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat",
    },
  ];

  return (
    <>
      <div className="text-center text-white text-4xl font-semibold mb-14 mt-5 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      >
        MY <span className="text-[#08d665]">PROJECTS</span>
      </div>
      <div className="flex flex-wrap gap-5  justify-around mb-5">
        {project.map((d, i) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white w-[320px]   "
              key={i}
              style={{ boxShadow: "0 1px 30px rgba(255, 255, 255, 0.2)" }}
            >
              <div className=" flex flex-col gap-2">
                <img src={d.image} alt="" className="block mx-auto" />
                <h2 className=" uppercase text-xl font-bold hover:text-[#08d665] pl-3">
                  {d.heading}
                </h2>
                <p className="pl-3">
                  {d.time} | {d.category}
                </p>
                <p className="pl-3">{d.desc}</p>
                <div className="flex  justify-around mb-3 font-bold">
                  <button className="pl-3 pe-3 pt-2 pb-2 bg-[#08d665] rounded-full">
                    Live Preview
                  </button>
                  <button className="pl-3 pe-3 pt-2 pb-2 bg-[#08d665] rounded-full">
                    Source Code
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Project;
