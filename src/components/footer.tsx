import Link from "next/link";
import Image from 'next/image'

export default function Footer() {
    return (
        <div className="bg-gray-800 text-white z-10 p-6">
      <nav className="container mx-auto ">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 ">
          <div className="w-full md:w-1/3 text-xl flex justify-center md:justify-center items-center space-x-4">
            <Image
              src="/images/logo.png"
              width={100}
              height={80}
              alt="Picture of the author"
            />
           
          </div>
          <div className="w-full md:w-1/3 text-xl">
            <h1 className="font-medium border-b-2 border-gray-500 pb-2 text-center md:text-left">Contacto</h1>
            <br />
            <ul>
              <li className="flex items-center space-x-4">
                <Link href={"tel:89454597"} className="flex items-center">
                  <Image
                    src="/images/phone.png"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                  <p className="font-light text-gray-500 ml-4 hover:text-white">8945-4597</p>
                </Link>
              </li>
              <li className="flex items-center space-x-4 mt-2">
                <Link href={"mailto:yordany.na04@gmail.com"} className="flex items-center">
                  <Image
                    src="/images/mail.png"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                  <p className="font-light text-gray-500 ml-4 hover:text-white">yordany.na04@gmail.com</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-xl">
            <h1 className="font-medium border-b-2 border-gray-500 pb-2 text-center md:text-left">Redes Sociales</h1>
            <br />
            <ul>
              <li className="flex items-center space-x-4">
                <Link href={"https://www.facebook.com/profile.php?id=100006816256748&sk=photos_by"} className="flex items-center">
                  <Image
                    src="/images/facebook.png"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                  <p className="font-light text-gray-500 ml-4 hover:text-white">Facebook</p>
                </Link>
              </li>
              <li className="flex items-center space-x-4 mt-2">
                <Link href={"https://www.facebook.com/profile.php?id=100006816256748&sk=photos_by"} className="flex items-center">
                  <Image
                    src="/images/instagram.png"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                  <p className="font-light text-gray-500 ml-4 hover:text-white">Instagram</p>
                </Link>
              </li>
              <li className="flex items-center space-x-4 mt-2">
                <Link href={"https://www.linkedin.com/in/yordany-navarro-hernandez-18a521243/"} className="flex items-center">
                  <Image
                    src="/images/linkedin.png"
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                  <p className="font-light text-gray-500 ml-4 hover:text-white">Linked In</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-500 text-center mt-6">&copy; 2024 Yordany Navarro Hernandez. Todos los derechos reservados.</p>
      </nav>
    </div>
    )

}