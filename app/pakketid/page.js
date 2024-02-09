import Card from "@/components/card";
import HeroImg from "@/components/heroimg";

export default function Paketid() {
    return (
        <div className="max-w-full min-h-screen">
        <HeroImg />
        <div className="p-2">

        <h1 className="text-lg text-center">Paketid</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 grid-flow-row">

          <Card title="Saaremaa Kortermajadele" conntent="Kuni 200Mbit/s." conntent1="Üles/Alla Hind: 36€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" butname="Telli Pakket"></Card>
          <Card title="Saaremaa Kortermajadele" conntent="Kuni 100Mbit/s." conntent1="Üles/Alla Hind: 18€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" butname="Telli Pakket"></Card>
          <Card title="Raadjointernet" conntent="Kuni 32Mbit/s Alla*  //  8Mbit/s Üles* " conntent1="Üles/Alla Hind: 36€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" butname="Telli Pakket"></Card>
          <Card title="Raadjointernet" conntent="Kuni 16Mbit/s Alla*  //  4Mbit/s Üles* " conntent1="Üles/Alla Hind: 29€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" butname="Telli Pakket"></Card>
          <Card title="Raadjointernet" conntent="Kuni 12Mbit/s Alla*  //  2Mbit/s Üles* " conntent1="Üles/Alla Hind: 26€/Kuus" conntent2="TV + Lisateenused" path="/pakketid/telli" butname="Telli Pakket"></Card>
        </div>
        </div>
        </div>
    )

}
