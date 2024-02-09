import Image from "next/image";
import Link from "next/link";

const HeroImg = () => {
return (

<div className="relative md:p-2">
<Image
  src="/hero_image.png"
  width={1024}
  height={500}
  alt="Picture of the author"
  className="md:rounded-lg"
/>

<div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
  <h2 className="sm:text-lg text-sm font-bold text-white mb-2">Parimad Pakkumised</h2>
  <p className=" text-white sm:text-sm text-xs mb-2">Kiire Internet, Sobilik Igale Saarlasele</p>
  <Link href="/pakketid" className="bg-gradient-to-r from-blue-950 from-50% to-indigo-900 text-xs sm:text-xl text-white px-2 py-1 hover:text-cyan-100 rounded-xl">Vaata Pakkumisi</Link>
</div>

</div>
);}

export default HeroImg