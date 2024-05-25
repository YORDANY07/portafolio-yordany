import Hero from "@/components/hero";
import Image from 'next/image'

export default function AboutMe() {
    return (
       
        <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
        {/* Fondo con imagen*/}
        <div className="absolute inset-0">
          <Image 
            src="/images/background.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 z-10"></div>
        </div>
        
        {/* Contenido */}
        <div className="relative z-20 container mx-auto p-6 shadow-md rounded-lg flex flex-col items-center space-y-8 bg-opacity-80">
          <div className="w-full sm:w-3/4 bg-gray-300 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-300">
              <div className="ml-10 mr-10 md:col-span-1">
                <Image
                  className="rounded-lg"
                  src="/images/usuario.png"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </div>
              <div className="md:col-span-2 bg-gray-800 rounded-lg p-4">
                <h5 className="text-2xl font-bold">YORDANY NAVARRO HERNANDEZ</h5>
                <h1 className="text-lg font-bold">Informatico</h1>
              </div>
            </div>
          </div>
  
          <div className="container bg-gray-300 w-full sm:w-3/4 rounded-lg">
            <Hero 
              title="Sobre mí"
              descriptions={[
                "Soy un informático junior que estudia la carrera de Informatica Empresarial En la Universidad de Costa Rica."
               + " Poseo una sólida formación en desarrollo de software, gestión de bases de datos y administración de redes."
               + " Durante mi carrera académica, he participado en diversos proyectos que me han permitido aplicar mis conocimientos teóricos en entornos prácticos, destacando mi capacidad para resolver problemas y trabajar de manera colaborativa en equipos multidisciplinarios."
              ]}
            />
            <Hero 
              title="Experiencia"
              descriptions={[
                "Participación en el proyecto de desarrollo de Windows", 
                "Participación en la fabricación de la computadora Mackintosh"
              ]}
            />
            <Hero 
              title="Educación"
              descriptions={[
                "Bachiller en Educacion Media, en el Colegio Nocturno Guaycara",
                "Conclusión de Estudios de la Educacion General Básica, en el Colegio Tecnico Profesional Guaycara",
                "Conclusión de Estudios del Primero y Segundo Ciclos de la Educacion General Básica, en Escuela KM 24"
              ]}
            />
            <Hero 
              title="Habilidades"
              descriptions={[
                "Resolución de problemas", 
                "Trabajo en equipo", 
                "Aprendizaje continuo"
              ]}
            />
            <Hero 
              title="Herramientas"
              descriptions={[
                "Java 80%", 
                "SQL 50%", 
                "HTML 40%",
                "JavaScript 20%",
                "CSS 10%"
              ]}
            />
          </div>
        </div>
      </div>
    );
}