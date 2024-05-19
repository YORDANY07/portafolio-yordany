import Hero from "@/components/hero";
import Image from 'next/image'
export default function AboutMe() {
    return (
        <div className="container mx-auto bg-white p-6 shadow-md rounded-lg flex items-center">
            <div className="container w-full sm:w-3/4 bg-gray-300 rounded-lg">
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-300 ">
                    <div className="ml-10 mr-10 md:col-span-1 ">
                        <Image className="rounded-lg"
                            src="/images/usuario.png"
                            width={200}
                            height={100}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="md:col-span-2 bg-gray-800 rounded-lg">
                        <h5 className="p-4 text-2xl font-bold">YORDANY NAVARRO HERNANDEZ</h5>
                        <h1 className="ml-4 text-lg font-bold">Informatico</h1>
                    </div>
                </div>
            </div>

            <div className="container bg-gray-300 w-full sm:w-3/4 rounded-lg">
                <Hero title="Sobre mí"
                    descriptions={["Lorem ipsum dolor sit amet",
                 "consectetur adipiscing elit. Phasellus imperdiet...",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet..."]}>
                </Hero>
                <Hero title="Experiencia"
                    descriptions={["Experiencia laboral en Empresa XYZ como Desarrollador Web...","sefsefsef"]}>
                </Hero>

                <Hero title="Educación"
                    descriptions={["Título Universitario en Ingeniería Informática...","sefsefsef"]}>
                </Hero>

                <Hero title="Habilidades"
                    descriptions={["Habilidad 1","Habilidad 2","Habilidad 3"]}>
                </Hero>
            
            </div>

        </div>
    );
}