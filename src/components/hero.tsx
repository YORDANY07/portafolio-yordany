import type {StaticImageData} from "next/image";
import Image from "next/image";

interface HeroProps {
      title: string;
      descriptions: string[];
  }
  export default function Hero(props: HeroProps) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-500 rounded-lg ">
            <div className="p-10 md:col-span-1">
                <h2 className="font-bold text-lg bg-gray-800 p-4 rounded-lg">{props.title}</h2>
            </div>
            <div className=" md:col-span-2  p-2 ">
              {props.descriptions.map((description, index)=>(
                <p key={index} className=" bg-gray-800 p-4 rounded-lg mb-2">
                  {description}
                </p>
              ))}
            </div>
        </div>
      );
    }

