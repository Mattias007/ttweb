import Image from "next/image";

import Link from "next/link";
import Card from "@/components/card";
import HeroImg from "@/components/heroimg";

export default function Home() {
  return (
    <div className="max-w-full min-h-screen">

      <HeroImg />

        <div className="p-2">
        <h1 className="text-lg text-center">Internet</h1>
        <div className="flex justify-center flex-wrap items-center gap-5 p-5 flex-grow">

          <Card title="Kortermaja Internet" conntent="Kuni 200Mbit/s." conntent1="Hind alates : 24€/Kuus" conntent2="Internet ja IPTV" path="/" butname="Vaata Lähemalt"></Card>
          <Card title="Raadio Internet" conntent="Kuni 50Mbit/s." conntent1="Hind alates: 24€/Kuus" conntent2="Internet ja IPTV" path="/" butname="Vaata Lähemalt"></Card>
        
        </div>
        </div>
        <div className="relative md:p-2">
          <Image
            src="/gears.png"
            width={1024}
            height={500}
            alt="Picture of the author"
            className="md:rounded-xl"
          />

          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="sm:text-lg text-base mb font-bold text-white mb-4">Kontakt Telefon :</h2>
            <p className=" text-white sm:text-base text-xs mb-4">45 20 200 ja 50 97 415</p>
            <Link href="/rikke" className="bg-gradient-to-r from-blue-950 from-50% to-indigo-900 text-xs sm:text-xl text-white px-4 py-2 hover:text-cyan-100 rounded-xl">Võta ühendust</Link>
          </div>
        </div>

      </div>

  );
}
