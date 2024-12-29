'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { Fade } from 'react-awesome-reveal'
import { useSectionInView } from '@/lib/useInView'
export default function About () {
  const { ref } = useSectionInView('#about')

  return (
    <motion.section
      className='max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id='about'
    >
      <div className='container mx-auto'>
        <Fade
          direction='up'
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <SectionHeading>Sobre Mim</SectionHeading>
        </Fade>

        <div className='grid xl:grid-cols-2 lg:text-start'>
          <div className='flex-1'>
            {/* Content */}
            <div className='text-lg mt-12 xl:mt-3'>
              <div className='flex justify-start flex-col'>
                <Fade
                  direction='up'
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className='font-bold mt-6'>Missão</h3>
                </Fade>
                <Fade
                  direction='up'
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className='mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70'>
                  Desenvolver soluções criativas e eficientes em desenvolvimento web, transformando ideias em resultados concretos e impactantes. Promover a comunicação e organização em equipe, garantindo o sucesso de projetos e contribuindo para causas significativas, como o projeto Noolar, voltado à integração de imigrantes.
                  </p>
                </Fade>
                <Fade
                  direction='up'
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className='font-bold mt-6'>Visão</h3>
                </Fade>
                <Fade
                  direction='up'
                  delay={1000}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className='mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70'>
                  Crescer no mercado de trabalho, adquirindo experiência e aprimoramento contínuo, com o objetivo de liderar projetos inovadores e transformar o setor de desenvolvimento web com soluções modernas e inclusivas.
                  </p>
                </Fade>
                <Fade
                  direction='up'
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className='font-bold mt-6'>Valores</h3>
                </Fade>
                <Fade
                  direction='up'
                  delay={1000}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className='mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70'>
                  Criatividade e resiliência são pilares fundamentais, garantindo uma abordagem aberta a novas ideias e determinação para superar desafios. A comunicação e organização em equipe são vistas como essenciais para o sucesso de qualquer projeto. Além disso, inovação e compromisso estão no centro de cada iniciativa, com dedicação em entregar soluções práticas e significativas que façam a diferença.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div>
            <Fade
              direction='right'
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <Image
                src='/about.png'
                width='600'
                height='600'
                alt='portrait'
                quality='100'
                priority={true}
                className='rounded-full mt-8 object-cover'
              />
            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
