import Link from "next/link";
import { lusitana } from "./ui/fonts";
import '../app/ui/global.css';
import styles from '../app/ui/home.module.css';
import AcmeLogo from './ui/acme-logo';
import Image from 'next/image'

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className={styles.shape}>
                <AcmeLogo />
                <div
                    className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
                />
                <p
                    className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
                >
                    <strong>Welcome to Acme.</strong> This is the example for the{' '}
                    <a href="https://nextjs.org/learn/" className="text-blue-500">
                        Next.js Learn Course, brought to you by Vercel.
                    </a>

                </p>
                <Image
                    src="/profile.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
            <Link href="/login">login</Link>
        </main >
    );
}


