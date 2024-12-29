"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

//animações
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";
import { useActiveSectionContext } from "@/containers/active-section";

export default function Intro() {
  const {ref} = useSectionInView("#Home", 0.5);
  const { setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
  return (
    <section
    ref={ref} 
     id="Home"
      className="mb-28 max-w-[75rem] text-center sm:mb-0 ">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <Image
              src="/matheusPerfil.png"
              width="480"
              height="480"
              alt="portrait"
              quality="100"
              priority={true}
              className="rounded-full shadow-xl object-cover"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
            className="text-6xl absolute bottom-8 right-12"
          >
            👋
          </motion.span>
        </div>
      </div>

      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>

     
      <h1 className="mb-10 mt-4 text-2xl sm:text-4xl">
        <span className="font-medium font !leading-[1.5]">
          Alavanque seus negócios com um novo WebSite
        </span>{" "}
        <p className="text-[14px]">
          Desenvolvendo soluções inovadoras com foco em evolução constante e
          compromisso com a excelência tecnológica.
        </p>
      </h1>
      </Fade>
      {/* contatos */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex sm:flex-row items center justify-center gap-4 px-4 text-lg font-medium"
      >
        <Link
          href="#"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
        >
          Contato <Mail color={"#9ca3af"} />
        </Link>
        {/* GMAIL LINK */}

        <a
          href="https://www.linkedin.com/in/matheus-ursino/"
          className="group bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        {/* Linkedin LINK */}

        <a
          href="https://github.com/MatheusUrsino"
          className="group bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
          target="_blank"
        >
          <FaGithub />
        </a>
        {/* GITHUB LINK */}
      </motion.div>
    </section>
  );
}
