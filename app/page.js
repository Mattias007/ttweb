import Image from "next/image";

import Link from "next/link";
import Card from "@/components/card";
import HeroImg from "@/components/images/heroimg";
import ProblemImg from "@/components/images/rikkeImg";

export default function Home() {
  return (
    <div className="max-w-5xl w-full min-h-screen">

      <HeroImg />

        <div className="p-2">
        <h1 className="text-lg text-center font-bold">Internet</h1>
        <div className="flex justify-center flex-wrap items-center gap-5 p-5 flex-grow">

          <Card title="Kortermaja Internet" conntent="Kuni 200Mbit/s." conntent1="Hind alates : 24€/Kuus" conntent2="Internet ja IPTV" path="/internet" butname="Vaata Lähemalt"></Card>
          <Card title="Raadio Internet" conntent="Kuni 50Mbit/s." conntent1="Hind alates: 24€/Kuus" conntent2="Internet ja IPTV" path="/internet" butname="Vaata Lähemalt"></Card>
        
        </div>
        </div>

      <ProblemImg />

      </div>

  );
}
