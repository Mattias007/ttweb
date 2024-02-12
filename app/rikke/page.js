
import ProblemFormImg from "@/components/images/rikkeformImg"
import ProblemForm from "@/components/problemform"
import Image from "next/image"

export default function Rikke() {
    return (
    <div className="max-w-5xl w-full min-h-screen">
        <ProblemFormImg />
    <h1 className="w-full text-center text-red-400">Rikkeid likvideeritakse tööajal, laekumise järjekorras, hiljemalt teatamisele järgneva tööpäeva jooksul. </h1>
      <ProblemForm />

    </div>
    )}
