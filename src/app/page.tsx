"use client";

import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-start">
      <Head>
        <title>Swift - We Build Your Software</title>
        <meta name="description" content="We build your software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-hero-pattern px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Image
            src="/Swift3.svg"
            alt="Logo"
            width={400}
            height={400}
            className="hero-logo"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl mb-2"
            style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}
          >
            WE BUILD YOUR SOFTWARE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-base sm:text-lg md:text-xl mb-4 max-w-lg mx-auto"
            style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}
          >
            We help companies transform ideas into cutting-edge software solutions. Your vision, our expertise.
          </motion.p>
        </motion.div>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="inline-block px-6 py-3 mt-4 text-base sm:text-lg font-bold text-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
          style={{
            backgroundColor: '#00A89D',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.5)'
          }}
        >
          Get in Touch
        </motion.a>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full flex flex-col items-center py-24 bg-gray-900 mt-24 pt-32">
        <div className="py-5"></div>
        <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#00A89D', fontFamily: 'Poppins, sans-serif' }}>Our Services</h2>
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="box flex flex-col items-center p-8 bg-gradient-to-r from-blue-700 to-blue-900 shadow-md hover:shadow-lg rounded-lg transition-shadow duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif', lineHeight: '1.2' }}>App Development</h3>
            <p className="text-center text-base sm:text-lg" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif', lineHeight: '1.6' }}>
              We specialize in creating robust, scalable, and user-friendly mobile applications tailored to your needs.
            </p>
          </div>
          <div className="box flex flex-col items-center p-8 bg-gradient-to-r from-blue-700 to-blue-900 shadow-md hover:shadow-lg rounded-lg transition-shadow duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif', lineHeight: '1.2' }}>Personalized Software Solutions</h3>
            <p className="text-center text-base sm:text-lg" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif', lineHeight: '1.6' }}>
              We develop personalized software solutions to meet the unique needs of your business, ensuring efficiency and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Past Projects Section */}
      <section id="past-projects" className="w-full flex flex-col items-center justify-center py-24 bg-black mt-24 pt-32"> {/* Centering this section */}
        <div className="py-5"></div>
        <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#00A89D', fontFamily: 'Poppins, sans-serif' }}>Our Past Work</h2>
        <div className="max-w-6xl flex justify-center items-center">
          <div className="box flex flex-col items-center p-6 bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg rounded-xl transition-shadow duration-300 hover:shadow-2xl transform hover:scale-105">
            <div className="w-full h-48 overflow-hidden rounded-t-xl">
              <Image src="/multiplay-home.png" alt="Project 1" width={600} height={400} className="w-full h-full object-cover"/>
            </div>
            <h3 className="text-2xl font-bold mt-4 text-center" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>Multiplay</h3>
            <p className="text-center text-base sm:text-lg mt-2" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>A platform to manage multiplayer games and events seamlessly.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full flex flex-col items-center py-24 bg-gray-900 mt-24 pt-32">
        <div className="py-5"></div>
        <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#00A89D', fontFamily: 'Poppins, sans-serif' }}>Contact Us</h2>
        <p className="max-w-2xl text-center mb-8" style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif' }}>
          Let&apos;s discuss your software goals. If you have any questions or would like to get in touch, please contact us at:
        </p>
        <motion.a
          href="mailto:info@swift.ac.nz"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="text-xl font-bold px-6 py-3 mt-4 text-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
          style={{
            backgroundColor: '#00A89D',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.5)'
          }}
        >
          info@swift.ac.nz
        </motion.a>
      </section>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        section {
          padding-top: 0;
          margin-top: 0;
        }

        .box {
          background: linear-gradient(135deg, #00A89D, #0054A6);
          color: #FFFFFF;
          transition: transform 0.3s, box-shadow 0.3s;
          border-radius: 16px;
          padding: 1.5rem;
          width: calc(100% - 2rem);
          max-width: 500px;
        }

        .box:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .hero-logo {
          width: 100%;
          max-width: 800px;
          height: auto;
        }

        @media (min-width: 640px) {
          .hero-logo {
            max-width: 400px;
          }
        }

        @media (min-width: 1024px) {
          .hero-logo {
            max-width: 800px;
          }
        }

        .box img {
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
        }

        .box h3 {
          margin-top: 1rem;
        }

        .box p {
          margin-top: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .box:hover {
          transform: scale(1.05);
        }

        .bg-hero-pattern {
          background: linear-gradient(135deg, #000000, #000000);
          color: #FFFFFF;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 1rem;
        }

        .bg-hero-pattern::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
