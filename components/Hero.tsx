import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="https://github.com/zachmillertech/virtual-house-staff/blob/main/about-1.jpg?raw=true"
        alt="Medical professional"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
        <h1 className="mb-4">
          Virtual Mental Health Services
          <br />
          For House Staff
        </h1>
        <p className="text-xl md:text-2xl mb-8">Gloria M Kardong MD DFAPA</p>
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact
        </Link>
      </div>
    </section>
  )
}

