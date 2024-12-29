'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import Hamburger from 'hamburger-react'
import Link from 'next/link'
import { useActiveSectionContext } from '@/containers/active-section'
import { AnimatePresence, motion } from 'framer-motion'
import { LinkLib } from '@/lib/types'

type HamburguerMenuProps = { links: LinkLib[] }

const HamburguerMenu: React.FC<HamburguerMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()

  const menuTrigger = {
    visible: { scale: 1, opacity: 0.7, y: 0 },
    tap: { scale: 0.85 },
    hover: { scale: 1.2 }
  }

  const menuList = {
    start: { scale: 0.6, opacity: 0.7, y: -20 },
    visible: { scale: 1, opacity: 1, y: 0 }
  }

  return (
    <div className='md:hidden top-5 right-5 fixed w-60 z-[999] flex flex-col items-end gap-2 '>
      <motion.button
        variants={menuTrigger}
        initial='visible'
        whileTap='tap'
        whileHover='hover'
        className='bg-white w-[3rem] h-[3rem] drop-shadow backdrop-blur-[0.5rem] border-slate-400 dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950'
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuList}
            initial='start'
            animate='visible'
            className='w-full bg-gray-200 dark:bg-opacity-60 bg-opacity-60 backdrop-blur-sm drop-shadow border border-slate-400 dark:border-white border-opacity-60  shadow-2xl rounded-2xl flex flex-col items-center  justify-center dark:bg-gray-950 gap-2'
          >
            {links.map((linkLib, index) => (
              <motion.div
                className={clsx(
                  'hover:bg-gray-950  hover:text-white rounded-2xl w-[80%] text-center m-2 p-2 dark:hover:bg-white dark:hover:text-gray-950',
                  {
                    'bg-gray-950 text-white rounded-2xl w-[80%] text-center m-2 p-2 dark:bg-white dark:text-gray-950':
                      activeSection === linkLib.hash
                  }
                )}
                key={linkLib.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={() => {
                  setActiveSection(linkLib.hash)
                  setTimeOfLastClick(Date.now())
                }}
              >
                <Link href={linkLib.hash}>{linkLib.nameEng}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HamburguerMenu
