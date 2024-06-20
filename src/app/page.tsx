"use client";

import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-start">
      <Head>
        <title>Swift - We Build Your Software</title>
        <meta name="description" content="We build your software" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" />
      </Head>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 -mt-48"
        >
          <Image src="/logo.png" alt="Logo" width={600} height={240} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-1"
          style={{ color: '#002F6C', fontFamily: 'Poppins, sans-serif' }}
        >
          WE BUILD YOUR SOFTWARE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xl mb-1"
          style={{ color: '#002F6C', fontFamily: 'Poppins, sans-serif' }}
        >
          We help companies transform ideas into cutting-edge software solutions. Your vision, our expertise.
        </motion.p>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full flex flex-col items-center py-24 bg-gray-100 mt-32">
        <h2 className="text-4xl font-bold mb-8 mt-16 text-center" style={{ color: '#002F6C', fontFamily: 'Poppins, sans-serif' }}>Our Services</h2>
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center p-4 bg-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#002F6C', fontFamily: 'Poppins, sans-serif' }}>App Development</h3>
            <p style={{ color: '#002F6C', fontFamily: 'Poppins, sans-serif' }}>
              We specialize in creating robust, scalable, and user-friendly mobile applications tailored to your needs.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#002F6C', fontFamily: 'Poppins, sans-serif' }}>Personalized Software Solutions</h3>
            <p style={{ color: '#002F6C', fontFamily: 'Poppins, sans-serif' }}>
              We develop personalized software solutions to meet the unique needs of your business, ensuring efficiency and innovation.
            </p>
          </div>
          {/* Add more services as needed */}
        </div>
      </section>

      {/* Past Projects Section */}
      <section id="past-projects" className="w-full flex flex-col items-center py-24 bg-white mt-32">
        <h2 className="text-4xl font-bold mb-8 mt-16 text-center" style={{ color: '#002F6C', fontFamily: 'Poppins, sans-serif' }}>Our Past Work</h2>
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center p-4 bg-gray-100 shadow-lg">
            <Image src="/multiplay.png" alt="Project 1" width={300} height={200} />
            <h3 className="text-2xl font-bold mt-4" style={{ color: '#002F6C', fontFamily: 'Poppins, sans-serif' }}>Multiplay</h3>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-100 shadow-lg">
            <Image src="/project2.png" alt="Project 2" width={300} height={200} />
            <h3 className="text-2xl font-bold mt-4" style={{ color: '#002F6C', fontFamily: 'Poppins, sans-serif' }}>Project 2</h3>
          </div>
          {/* Add more projects as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full flex flex-col items-center py-24 bg-gray-100 mt-32">
        <h2 className="text-4xl font-bold mb-8 mt-16 text-center" style={{ color: '#002F6C', fontFamily: 'Poppins, sans-serif' }}>Contact Us</h2>
        <p className="max-w-2xl text-center mb-8" style={{ color: '#002F6C', fontFamily: 'Poppins, sans-serif' }}>
        Let's discuss how we can achieve your software goals together
        </p>
        <a href="mailto:your-email@example.com" className="text-xl font-bold" style={{ color: '#002F6C', fontFamily: 'Poppins, sans-serif' }}>
          Matei@swift.ac.nz
        </a>
      </section>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        section {
          padding-top: 0;
          margin-top: 0;
        }
      `}</style>
    </div>
  );
}
