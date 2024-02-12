
import Image from "next/image";
import RequestForm from "@/components/requestform";
import PackageImg from "@/components/images/packageimg";



export default function Tellimus() {
    return (
        <div className="max-w-5xl w-full min-h-screen">
            
            <PackageImg />
            <RequestForm />

        </div>
    )

}
