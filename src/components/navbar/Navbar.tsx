'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/components/Navbar.module.css'
export default function Navbar() {

    const router = useRouter()

    return (
        <header className={styles.navbarBase}>
            <Link href='/'>
                <Image
                src='/logo.png'
                alt='logo ropa de programador'
                width={50}
                height={50}/>
            </Link>
            <a href='#section3'>
                <Image
                src='/cart.png'
                alt='logo ropa de programador'
                width={40}
                height={40}/>
            </a>
        </header>
    )
}