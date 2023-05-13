import styles from '../../styles/components/Previsualizer.module.css'
import Image from 'next/image'

export default function PrevisualizerComponent() {
    return (
        <div className={styles.preSelectedProductBase}>
            <p>
                modelo seleccionado
            </p>
            <div className={styles.preSelectedProduct}>
                <Image
                    src='/model2.png'
                    alt="models mockup2"
                    width={400}
                    height={400} />
                <div>
                    <div className={styles.colorBase}>
                        <div className={styles.red}></div>
                        <div className={styles.blue}></div>
                        <div className={styles.pink}></div>
                        <div className={styles.yellow}></div>
                        <div className={styles.black}></div>
                        <div className={styles.gray}></div>
                    </div>
                    <div className={styles.shirtSize}>
                        <p>S</p>
                        <p>M</p>
                        <p>XL</p>
                    </div>
                    <div className={styles.shirtSize}>
                        <Image
                            src='/options/optionFront.png'
                            alt='modelo de camiseta con diseño frontal'
                            width={50}
                            height={50} />
                        <Image
                            src='/options/optionBack.png'
                            alt='modelo de camiseta con diseño reves'
                            width={50}
                            height={50} />
                        <Image
                            src='/options/optionSmall.png'
                            alt='modelo de camiseta con diseño en el pecho'
                            width={50}
                            height={50} />
                    </div>
                    <div className={styles.shirtSize}>
                        <p>-</p>
                        <p>2</p>
                        <p>+</p>
                    </div>
                    <div>
                        <p className={styles.confirmButton}>AGREGAR</p>
                    </div>
                </div>

            </div>

        </div>
    )
}