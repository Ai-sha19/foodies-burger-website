import Link from "next/link";
import Image from 'next/image';
import icon from "../../images/icon.png";

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-red-600 text-white h-16 px-4">
            {/* Logo */}
            <div className="flex justify-center items-center">
            <Image className="w-36" src={icon} alt='image'></Image>
                <h2 className="text-3xl -ml-9">FOODies</h2>
            </div>
            {/* Links */}
            <nav>
                <ul className=" text-[20px] flex gap-10 mr-6">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/">Menus</Link>
                    </li>
                    <li>
                        <Link href="/">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
