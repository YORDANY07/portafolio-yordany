import Link from "next/link";
import Image from 'next/image'

export default function Header() {
    return (
        <div className="bg-gray-800 text-white z-10">
        <nav className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/logo.png"
                width={40}
                height={80}
                alt="Picture of the author"
              />
              <Link href="/" className="font-bold text-3xl hover:text-gray-300">Inicio</Link>
            </div>
            <div className="flex justify-end space-x-4 text-xl">
              <Link href="/aboutMe" className="hover:text-gray-300">Sobre Mi</Link>
              <Link href="/projects" className="hover:text-gray-300">Mis Proyectos</Link>
            </div>
          </div>
        </nav>
      </div>
    )

}