import Image from "next/image";
import Link from "next/link";
import cabels from "@/public/cabels.jpg"

const PackageImg = () => {
return (

    <div className="relative lg:mt-2">
    <Image
        src={cabels}
        width={1024}
        height={682}
        placeholder="blur"
        alt="Picture of the author"
        className="lg:rounded-xl"
    />
    <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 text-center bg-gradient-to-r from-black to-transparent lg:rounded-xl"></div>
    <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="sm:text-lg text-base mb font-bold text-white mb-4">Helist Meile et, tellida Pakketii</h2>
        <p className=" text-white sm:text-base text-xs mb-4">Tell : 45 000 00</p>
    </div>
</div>

);}

export default PackageImg