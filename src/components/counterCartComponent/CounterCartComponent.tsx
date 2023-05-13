import styles from '../../styles/components/CounterCart.module.css'

export default function CounterCartComponent(){
    return(
        <div className={styles.counterCart}>
                        <p>-</p>
                        <p>2</p>
                        <p>+</p>
                    </div>
    )
}