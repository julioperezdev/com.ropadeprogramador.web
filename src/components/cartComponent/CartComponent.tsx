
import Image from 'next/image'
import styles from '../../styles/components/Cart.module.css'

export default function CartComponent() {
    return (
        <div className={styles.cartBase}>
            <div className={styles.subTotalCartBase}>
                <div className={styles.particularCartBase}>
                    <Image
                        src='/designs/springFramework.png'
                        alt='modelo de camiseta con diseño frontal'
                        width={50}
                        height={50} />
                    <Image
                        src='/options/optionFront.png'
                        alt='modelo de camiseta con diseño frontal'
                        width={40}
                        height={40} />
                    <div className={styles.descriptionParticularCart}>
                        <p>Java Mate design</p>
                        <p>color: azul  talla: XL</p>
                    </div>
                    <div className={styles.cartSize}>
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                    </div>
                    <p>30500 $</p>
                </div>
                <div className={styles.particularCartBase}>
                    <Image
                        src='/designs/subteSQL.png'
                        alt='modelo de camiseta con diseño frontal'
                        width={50}
                        height={50} />
                    <Image
                        src='/options/optionFront.png'
                        alt='modelo de camiseta con diseño frontal'
                        width={40}
                        height={40} />
                    <div className={styles.descriptionParticularCart}>
                        <p>Java Mate design</p>
                        <p>color: rojo  talla: XL</p>
                    </div>
                    <div className={styles.cartSize}>
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                    </div>
                    <p>30500 $</p>
                </div>
                <div className={styles.particularCartBase}>
                    <Image
                        src='/designs/deployEveryday.png'
                        alt='modelo de camiseta con diseño frontal'
                        width={50}
                        height={50} />
                    <Image
                        src='/options/optionBack.png'
                        alt='modelo de camiseta con diseño frontal'
                        width={40}
                        height={40} />
                    <div className={styles.descriptionParticularCart}>
                        <p>Java Mate design</p>
                        <p>color: negro  talla: S</p>
                    </div>
                    <div className={styles.cartSize}>
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                    </div>
                    <p>30500 $</p>
                </div>
            </div>
            <div className={styles.totalPriceBase}>
                <p className={styles.totalPriceDescription}>Total</p>
                <div className={styles.totalPriceData}>
                    <p className={styles.totalPrice}>40500 $</p>
                    <p className={styles.totalPriceCurrency}>pesos argentinos</p>
                </div>
                <button>{'>'}</button>
            </div>
        </div>
    )
}