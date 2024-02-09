
import Image from "next/image";
import RequestForm from "@/components/requestform";

export default function Tellimus() {
    return (
        <div className="max-w-full min-h-screen">
        <div className="relative md:p-2">
                <Image
                    src="/gears.png"
                    width={1024}
                    height={500}
                    alt="Picture of the author"
                    className="md:rounded-xl"
                />

                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h2 className="sm:text-lg text-base mb font-bold text-white mb-4">Helist Meile et, tellida Pakketii</h2>
                    <p className=" text-white sm:text-base text-xs mb-4">Tell : 45 000 00</p>
        </div>
        </div>
            <RequestForm />

        </div>
    )

}
