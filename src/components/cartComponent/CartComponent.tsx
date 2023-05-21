'use client'
import CartProductComponent from '../cartProductComponent/CartProductComponent'
import styles from '../../styles/components/Cart.module.css'

export default function CartComponent() {
    return (
        <div className={styles.cartBase}>
            <div className={styles.subTotalCartBase}>
                <CartProductComponent
                design={'/designs/springFramework.png'}
                position={'/options/optionFront.png'}
                designName={'Java Mate design'}
                color={'azul'}
                size={'XL'}/>
                <CartProductComponent
                design={'/designs/subteSQL.png'}
                position={'/options/optionFront.png'}
                designName={'Subte SQL design'}
                color={'rojo'}
                size={'M'}/>
                <CartProductComponent
                design={'/designs/deployEveryday.png'}
                position={'/options/optionBack.png'}
                designName={'Deploy with Jenkins'}
                color={'negro'}
                size={'S'}/>
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