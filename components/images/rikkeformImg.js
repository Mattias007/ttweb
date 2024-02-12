import Image from "next/image";
import gears from "@/public/gears.jpg"

const ProblemFormImg = () => {
return (
<div className="relative md:m-2">
          <Image
            src={gears}
            width={1024}
            height={682}
            placeholder="blur"
            alt="Picture of the author"
            className="md:rounded-xl"
          />
          <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 text-center bg-gradient-to-r from-black to-transparent md:rounded-xl"></div>
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="sm:text-lg text-base mb font-bold text-white mb-4">Kontakt Telefon :</h2>
            <p className=" text-white sm:text-base text-xs mb-4">45 20 200 ja 50 97 415</p>
            <p className=" text-white sm:text-base text-xs mb-4">Või kui võimalik, siis e-posti aadressile: info@tt.ee</p>
          </div>
        </div>
);}

export default ProblemFormImg