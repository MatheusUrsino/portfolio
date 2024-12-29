'use client'
import { links } from '@/lib/data'
import Link from 'next/link'
import React, { useState } from 'react'
import { LinkLib } from '@/lib/types'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/containers/active-section'
import { span } from 'framer-motion/client'
import { motion } from 'framer-motion'

type HeaderProps = { links: LinkLib[] }

export default function Header ({ links }: HeaderProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  return (
    <header className='hidden md:flex items-center justify-center fixed z-[999] w-full mt-4'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className='flex p-1 rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:rouned-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 '
      >
        <ul className='flex flex-wrap items-center justify-center gap-y-1 font-medium text-gray-500 text-[1rem] gap-4 p-1'>
          {links.map(linkLib => (
            <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
              className='flex items-center justify-center relative '
              key={linkLib.hash}
            >
              <Link
                href={linkLib.hash}
                className={clsx(
                  'flex w-full items-center justify-center hover:text-gray-950 hover:font-bold transition dark: text-gray-500 dark:hover:text-gray-300 p-3',
                  {
                    'text-black opacity-90 dark:text-gray-200 font-bold':
                      activeSection === linkLib.hash
                  }
                )}
                onClick={() => {
                  setActiveSection(linkLib.hash)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {linkLib.nameEng}
                {linkLib.hash === activeSection && (
                  <motion.span
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30
                    }}
                    layoutId='activeSection'
                    className='bg-gray-300 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </header>
  )
}
