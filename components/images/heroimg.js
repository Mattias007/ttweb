import Image from "next/image";
import Link from "next/link";
import pcb from "@/public/pcb.jpg"

const HeroImg = () => {
return (

<div className="relative lg:mt-2">
<Image
  src={pcb}
  priority={true}
  width={1024}
  height={682}
  placeholder="blur"
  alt="Picture of the PCB"
  className="lg:rounded-lg"
/>
<div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 text-center bg-gradient-to-r from-black to-transparent lg:rounded-xl"></div>
<div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
  <h2 className="sm:text-lg text-sm font-bold text-white mb-2">Parimad Pakkumised</h2>
  <p className=" text-white sm:text-sm text-xs mb-4">Kiire Internet, Sobilik Igale Saarlasele</p>
  <Link href="/pakketid" className="bg-gradient-to-r from-blue-950 from-50% to-indigo-900 text-xs sm:text-xl text-white px-2 py-2 hover:text-cyan-100 rounded-xl">Vaata Pakkumisi</Link>
</div>

</div>
);}

export default HeroImg