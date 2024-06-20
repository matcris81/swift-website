import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="relative h-screen bg-white flex items-start justify-center pt-20"> {/* Adjusted alignment and added padding-top */}
      <Head>
        <title>My Cool Website</title>
        <meta name="description" content="We build your software" />
      </Head>
      <main className="flex flex-col items-center justify-center text-center">
        <div className="mb-12">
          <Image src="/logo.png" alt="Logo" width={480} height={240} /> {/* Increase the size */}
        </div>
        <h1 className="text-6xl font-bold mb-4 text-black">WE BUILD YOUR SOFTWARE</h1>
        <p className="text-xl mb-12 text-black">We help companies lorem ipsum dolor sit amet. Consectetur adipisicing elit, sed do.</p>
        <div className="flex space-x-8">
          <Image src="/adidas.png" alt="Adidas" width={100} height={50} />
          <Image src="/kia.png" alt="Kia" width={100} height={50} />
          <Image src="/goldwell.png" alt="Goldwell" width={100} height={50} />
          <Image src="/honda.png" alt="Honda" width={100} height={50} />
          <Image src="/inbus.png" alt="Inbus" width={100} height={50} />
        </div>
      </main>
    </div>
  )
}
