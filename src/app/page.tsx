import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
    <div className="absolute inset-0">
      <Image 
        src="/images/background.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
    </div>
    <div className="relative z-10 max-w-4xl p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4 text-center transition duration-500 ease-in-out transform hover:scale-110">
        Bienvenido a Mi Portafolio
      </h1>
      <p className="text-lg leading-relaxed text-center mb-6">
        Este es un espacio donde comparto mis proyectos, habilidades y experiencias. Mi objetivo es proporcionar una visión clara y concisa de mi trabajo y capacidades. Explora y descubre más sobre lo que hago y cómo puedo contribuir a tus proyectos.
      </p>
      <p className="text-lg leading-relaxed text-center">
        Aquí encontrarás ejemplos de mis trabajos recientes, información sobre mis habilidades técnicas y una manera de contactarme. Estoy emocionado de compartir mi trayectoria profesional contigo.
      </p>
    </div>
  </div>
);
}

  
