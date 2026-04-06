"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Cloud Architecture",
    desc: "Scalable, secure cloud infrastructure designed around your workloads and budget.",
  },
  {
    title: "Cloud Migration",
    desc: "Seamless migration of your existing systems to the cloud with minimal downtime.",
  },
  {
    title: "DevOps & Automation",
    desc: "CI/CD pipelines, infrastructure as code, and monitoring to keep your deployments fast and reliable.",
  },
  {
    title: "Managed Services",
    desc: "Ongoing cloud management, optimization, and support so your team can focus on what matters.",
  },
];

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-gray-950/70 border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <div />
          <ul className="flex gap-5 text-sm text-gray-400 sm:gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center">
          {/* Gradient glow */}
          <div className="pointer-events-none absolute -top-40 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[120px] sm:h-[600px] sm:w-[600px] sm:blur-[160px]" />

          <motion.div initial="hidden" animate="visible" className="relative z-10 flex flex-col items-center gap-4 sm:gap-6">
            <motion.div custom={0} variants={fadeUp}>
              <Image src="/Swift3.svg" alt="Swift Solutions logo" width={280} height={280} className="w-40 sm:w-56 md:w-72" priority />
            </motion.div>
            <motion.h1 custom={1} variants={fadeUp} className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Cloud Solutions, Built for You
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="max-w-md text-base text-gray-400 sm:max-w-lg sm:text-lg">
              We design, build, and manage cloud infrastructure so you can focus on growing your business.
            </motion.p>
            <motion.a
              custom={3}
              variants={fadeUp}
              href="#contact"
              className="mt-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:brightness-110 hover:shadow-primary/40 sm:px-8 sm:py-3 sm:text-base"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 px-5 sm:py-28 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="mb-8 text-center text-2xl font-bold text-primary sm:mb-14 sm:text-4xl"
            >
              Our Services
            </motion.h2>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  variants={fadeUp}
                  className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur transition-all hover:border-primary/30 hover:bg-white/[0.06] sm:p-8"
                >
                  <h3 className="mb-3 text-xl font-semibold">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 px-5 sm:py-28 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="mb-4 text-2xl font-bold text-primary sm:mb-6 sm:text-4xl"
            >
              Let&apos;s Talk
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="mb-8 text-gray-400"
            >
              Have a cloud project in mind? Let&apos;s build something great together.
            </motion.p>
            <motion.a
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              href="mailto:info@swift.ac.nz"
              className="inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:brightness-110 hover:shadow-primary/40 sm:px-8 sm:py-3 sm:text-base"
            >
              info@swift.ac.nz
            </motion.a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Swift Solutions. All rights reserved.</p>
      </footer>
    </>
  );
}
