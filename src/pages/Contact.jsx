import React from "react";
import { MdAddIcCall } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div className="lg:flex justify-around">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class=" min-h-screen flex flex-col justify-center sm:py-4"
      >
        <div class="py-3 sm:max-w-xl sm:mx-auto">
          <div class="text-white px-4 py-5 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-10">
            <div class="text-center pb-3">
              <h1 class="text-3xl">Contact Us!</h1>

              <p class="text-gray-300">
                Fill up the form below to send us a message.
              </p>
            </div>

            <form>
              <input
                class="shadow mb-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
              />

              <input
                class="shadow mb-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
              />

              <input
                class="shadow mb-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                name="_subject"
              />

              <textarea
                class="shadow mb-3 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Type your message here..."
                name="message"
                // style="height: 121px;"
              ></textarea>

              <div class="flex justify-between">
                <input
                  class="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Send ➤"
                />
                <input
                  class="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                />
              </div>
            </form>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        class=" min-h-screen flex flex-col justify-center sm:py-4"
      >
        <div class="py-3 sm:max-w-xl sm:mx-auto">
          <div class="text-white px-4 py-5 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-10">
            <div>
              <h1 class="text-3xl font-extrabold">Get in touch</h1>

              <div class="mt-12">
                <h2 class="text-lg font-extrabold">Phone</h2>
                <ul class="mt-3">
                  <li class="flex items-center">
                    <div class="bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <MdAddIcCall size={20} color="blue" />
                    </div>
                    <a
                      target="blank"
                      href="https://veilmail.io/e/FkKh7o"
                      class="text-white text-sm ml-3"
                    >
                      <strong>+91 8209950683</strong>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="mt-12">
                <h2 class="text-lg font-extrabold">Email</h2>
                <ul class="mt-3">
                  <li class="flex items-center">
                    <div class="bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <MdAttachEmail size={20} color="blue" />
                    </div>
                    <a
                      target="blank"
                      href="https://veilmail.io/e/FkKh7o"
                      class="text-white text-sm ml-3"
                    >
                      <strong className="textWrap w-[200px] block">
                        sonusharma30.09.2004@gmail.com
                      </strong>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12">
                <h2 class="text-lg font-extrabold">Socials</h2>
                <ul class="flex mt-3 space-x-4">
                  <li class="bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://github.com/Ssp9917" target="_blank">
                    <FaGithub size={20} color="blue" />
                    </a>
                  </li>
                  <li class="bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://www.linkedin.com/in/sonu-sharma9917/" target="_blank">
                    <FaLinkedinIn size={20} color="blue" />
                    </a>
                  </li>
                  <li class="bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Link href="javascript:void(0)">
                    <IoLogoWhatsapp size={20} color="blue" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
