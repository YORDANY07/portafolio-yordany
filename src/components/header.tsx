import Link from "next/link";
import Image from 'next/image'

export default function Header() {
    return (
        <div className="bg-gray-800 text-white z-10 ">
            <nav className="container mx-auto p-6 ">
                <div className="flex space-x-4  ">
                    <div className="flex w-1/3 space-x-4">
                        <Image
                            src="/images/logo.png"
                            width={40}
                            height={80}
                            alt="Picture of the author"
                        />
                        <Link href="/" className="font-bold text-3xl hover:text-gray-300">Inicio</Link>
                    </div>
                    <div className="space-x-4 text-xl w-2/3 flex justify-end ">
                        <Link href="/aboutMe" className="hover:text-gray-300">Sobre Mi</Link>
                        <Link href="/projects" className="hover:text-gray-300">Mis Proyectos</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
    //  <Link href="/" className="font-bold text-3xl"> Inicio </Link>
}