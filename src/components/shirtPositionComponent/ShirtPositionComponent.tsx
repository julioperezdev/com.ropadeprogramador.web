import styles from '../../styles/components/ShirtPosition.module.css'
import Image from 'next/image'

export default function ShirtPositionComponent() {
    return (
        <div className={styles.shirtPosition}>
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
    )
}