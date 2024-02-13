import Link from "next/link";

const Footer = () => {
    return (
        <div className="h-fit p-4 text-center text-white flex flex-col items-center justify-center gap-5 font-bold bg-gradient-to-r from-blue-950 from-50% to-indigo-900 min-w-full">
            <h1>Telefon: 45 20 200  e-mail: info@tt.ee</h1>
            <h1>Address: Rohu 6A, Kuressaare, 93819 Saare maakond</h1>
            <Link href="https://www.facebook.com/teetormaja/">Facebook: Teetormaja  </Link>
        </div>
    );
};

export default Footer;
