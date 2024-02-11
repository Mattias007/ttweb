import Card from "@/components/card";
import Image from "next/image";

export default function Paketid() {
    return (
        <div className="max-w-full min-h-full">
        <div className="relative md:m-2">
                <Image
                    src="/cabels.jpg"
                    width={1024}
                    height={500}
                    alt="Picture of the author"
                    className="md:rounded-xl"
                />
                <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 text-center bg-gradient-to-r from-black to-transparent md:rounded-xl"></div>
                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="sm:text-lg text-base mb font-bold text-white mb-4">Helist Meile et, tellida Pakketii</h2>
                    <p className=" text-white sm:text-base text-xs mb-4">Tell : 45 000 00</p>
                </div>
        </div>
        <div className="p-2">

        <h1 className="text-lg text-center">Paketid</h1>
        <div className="flex gap-2 flex-wrap p-2">

          <Card title="Kortermaja Internet" conntent="Kiirusega kuni 200Mbit/s." conntent1="Üles/Alla Hind: 36€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" option="Kortermaja200" butname="Telli Pakett"></Card>
          <Card title="Kortermaja Internet" conntent="Kiirusega kuni 100Mbit/s." conntent1="Üles/Alla Hind: 22€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" option="Kortermaja100" butname="Telli Pakett"></Card>
        </div>
        <div className="flex gap-2 p-2 flex-wrap">
          <Card title="Raadio Internet" conntent="Kuni 32Mbit/s Alla*  //  8Mbit/s Üles* " conntent1="Üles/Alla Hind: 36€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" option="Raadio32" butname="Telli Pakett"></Card>
          <Card title="Raadio Internet" conntent="Kuni 16Mbit/s Alla*  //  4Mbit/s Üles* " conntent1="Üles/Alla Hind: 29€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" option="Raadio16" butname="Telli Pakett"></Card>
          <Card title="Raadio Internet" conntent="Kuni 12Mbit/s Alla*  //  2Mbit/s Üles* " conntent1="Üles/Alla Hind: 26€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" option="Raadio32"butname="Telli Pakett"></Card>
        </div>
        </div>
        </div>
    )

}
