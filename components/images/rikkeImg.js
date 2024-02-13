import Image from "next/image";
import Link from "next/link";
import gears from "@/public/gears.jpg"

const ProblemImg = () => {
return (
    <div className="relative lg:mb-2">
    <Image
        src={gears}
        width={1024}
        height={683}
        placeholder="blur"
        alt="Picture of the author"
        className="lg:rounded-xl"
      />
      <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 text-center bg-gradient-to-r from-black to-transparent lg:rounded-xl"></div>
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="sm:text-lg text-base mb font-bold text-white mb-4">Kontakt Telefon :</h2>
        <p className=" text-white sm:text-base text-sm mb-4">45 20 200 ja 50 97 415</p>
        <Link href="/kontakt" className="bg-gradient-to-r from-blue-950 from-50% to-indigo-900 text-xs sm:text-xl text-white px-4 py-2 hover:text-cyan-100 rounded-xl">Võta Ühendust</Link>
      </div>
    </div>
);}

export default ProblemImg