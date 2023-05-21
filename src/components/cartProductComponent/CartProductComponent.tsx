import styles from '../../styles/components/CartProduct.module.css'
import Image from 'next/image'


interface CartProductRequest{
    design:string
    position:string
    designName:string
    color:string
    size:string
}

export default function CartProductComponent(data:CartProductRequest) {
    return (
        <div className={styles.particularCartBase}>
            <Image
                src={data.design}
                alt={data.designName}
                width={50}
                height={50} />
            <Image
                src={data.position}
                alt='modelo de camiseta con diseño frontal'
                width={40}
                height={40} />
            <div className={styles.descriptionParticularCart}>
                <p>{data.designName}</p>
                <p>color: {data.color}  talla: {data.size}</p>
            </div>
            <div className={styles.cartSize}>
                <p>-</p>
                <p>1</p>
                <p>+</p>
            </div>
            <p>30500 $</p>
        </div>
    )
}