import Card from "@/components/card";
import HeroImg from "@/components/heroimg";

export default function Paketid() {
    return (
        <div className="max-w-full min-h-full">
        <HeroImg />
        <div className="p-2">

        <h1 className="text-lg text-center">Paketid</h1>
        <div className="flex gap-2 flex-wrap p-2">

          <Card title="Kortermaja Internet" conntent="Kiirusega kuni 200Mbit/s." conntent1="Üles/Alla Hind: 36€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" butname="Telli Pakett"></Card>
          <Card title="Kortermaja Internet" conntent="Kiirusega kuni 100Mbit/s." conntent1="Üles/Alla Hind: 22€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" butname="Telli Pakett"></Card>
        </div>
        <div className="flex gap-2 p-2 flex-wrap">
          <Card title="Raadio Internet" conntent="Kuni 32Mbit/s Alla*  //  8Mbit/s Üles* " conntent1="Üles/Alla Hind: 36€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" butname="Telli Pakett"></Card>
          <Card title="Raadio Internet" conntent="Kuni 16Mbit/s Alla*  //  4Mbit/s Üles* " conntent1="Üles/Alla Hind: 29€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" butname="Telli Pakett"></Card>
          <Card title="Raadio Internet" conntent="Kuni 12Mbit/s Alla*  //  2Mbit/s Üles* " conntent1="Üles/Alla Hind: 26€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" butname="Telli Pakett"></Card>
        </div>
        </div>
        </div>
    )

}
