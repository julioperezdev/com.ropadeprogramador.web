import Image from "next/image";
import styles from '../../styles/components/DesignsFilter.module.css'

export default function DesignFilter() {
    return (
        <div className={styles.base} id="section2">
            <div className={styles.textButtonBase}>
                <p>Los favoritos</p>
            </div>
            <div className={styles.logosBase}>
                <p>Selecciona tus lenguajes favoritos</p>
                <div>
                <a href="#section2">
                <Image
                    src='/javascript-logo.png'
                    alt='Javascript Logo'
                    width={30}
                    height={30}/>
                </a>
                <a href="#section2">
                <Image
                    src='/go-logo.png'
                    alt='Go Logo'
                    width={30}
                    height={40} />
                </a>
                <a href="#section2">
                <Image
                    src='/java-logo.png'
                    alt='Java Logo'
                    width={30}
                    height={40} />
                </a>
                </div>
            </div>
        </div>
    )
}