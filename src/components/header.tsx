'use client'
import Link from "next/link";
import Image from 'next/image'
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-800 text-white z-10">
      <nav className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/logo.png"
              width={40}
              height={80}
              alt="Logo"
            />
           
          </div>

          {/* Logo sobre el menú en pantallas pequeñas */}
          <div className="md:hidden">
           
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none focus:text-white"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

          {/* Menú desplegable */}
          <div className={`md:flex flex-wrap items-center ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full md:w-auto">
            <Link href="/" className="transition duration-300 ease-in-out transform hover:scale-110 hover:underline md:mx-4 my-2 md:my-0">Inicio</Link>
              <Link href="/aboutMe" className="transition duration-300 ease-in-out transform hover:scale-110 hover:underline md:mx-4 my-2 md:my-0">Sobre Mi</Link>
              <Link href="/projects" className="transition duration-300 ease-in-out transform hover:scale-110 hover:underline md:mx-4 my-2 md:my-0">Mis Proyectos</Link>
            </div>
            <div className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-lg p-2 md:ml-4">
              <a href="mailto:yordany.na04@gmail.com" className="inline-block">
                <button className="text-white font-semibold bg-transparent border border-white py-2 px-4 rounded hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-110">
                  Contratame
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )

}