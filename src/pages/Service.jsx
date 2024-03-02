import React from "react";
import first from "../compontnt/images/first.svg";
import second from "../compontnt/images/secon.svg";
import third from "../compontnt/images/icon-lock.svg";
import { motion } from "framer-motion";

const Service = () => {
  const service = [
    {
      image: first,
      heading: "Web Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor et congue felis laoreet ac",
    },
    {
      image: second,
      heading: "Web Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor et congue felis laoreet ac",
    },
    {
      image: third,
      heading: "24X7 Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor et congue felis laoreet ac",
    },
  ];

  return (
    <>
      <motion.div
        className="text-center text-white text-4xl font-semibold mb-14 mt-5 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        MY <span className="text-[#08d665]">SERVICE</span>
      </motion.div>
      <div className="flex  justify-around">
        {service.map((d, i) => {
          return (
            <motion.div
              initial={{ x: "-100%"}}
              whileInView={{ x: "0%"}}
              transition={{ duration: 0.5 }}
              className="border border-white  text-white w-[300px] h-[230px] "
              key={i}
            >
              <div className="pl-5 pe-5 pt-6 pb-6 flex flex-col justify-center text-center items-center gap-2">
                <img src={d.image} alt="" className="block mx-auto" />
                <h2 className="text-[20px] uppercase text-2xl font-bold hover:text-[#08d665]">
                  {d.heading}
                </h2>
                <p>{d.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Service;
