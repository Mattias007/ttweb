import Card from "@/components/card";
import PackageImg from "@/components/images/packageimg";
import Image from "next/image";

export default function Paketid() {
    return (
        <div className="max-w-5xl w-full min-h-screen">
          <PackageImg />
        <div className="p-2">

        <h1 className="text-lg text-center">Pakketii</h1>
        <div className="flex gap-2 flex-wrap p-2">

          <Card title="Kortermaja Internet" conntent="Kiirusega kuni 200Mbit/s." conntent1="Hind: 36€/Kuus" conntent2="TV + Lisateenused" path="/internet/telli" option="Kortermaja200" butname="Telli Pakett"></Card>
          <Card title="Kortermaja Internet" conntent="Kiirusega kuni 100Mbit/s." conntent1="Hind: 22€/Kuus" conntent2="TV + Lisateenused" path="/internet/telli" option="Kortermaja100" butname="Telli Pakett"></Card>
        </div>
        <div className="flex gap-2 p-2 flex-wrap">
          <Card title="Raadio Internet" conntent="Kuni 32Mbit/s Alla*  //  8Mbit/s Üles* " conntent1="Hind: 36€/Kuus" conntent2="TV + Lisateenused" path="/internet/telli" option="Raadio32" butname="Telli Pakett"></Card>
          <Card title="Raadio Internet" conntent="Kuni 16Mbit/s Alla*  //  4Mbit/s Üles* " conntent1="Hind: 29€/Kuus" conntent2="TV + Lisateenused" path="/internet/telli" option="Raadio16" butname="Telli Pakett"></Card>
          <Card title="Raadio Internet" conntent="Kuni 12Mbit/s Alla*  //  2Mbit/s Üles* " conntent1="Hind: 26€/Kuus" conntent2="TV + Lisateenused" path="/internet/telli" option="Raadio12"butname="Telli Pakett"></Card>
        </div>
        </div>
        </div>
    )

}
