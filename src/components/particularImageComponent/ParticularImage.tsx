import Image from 'next/image'
import styles from '../../styles/components/ParticularImage.module.css'

interface ParticularImageRequest{
    particularDesign:string
}

export default function ParticularImage({particularDesign}:ParticularImageRequest) {
    return (
        <div className={styles.particularDesign} key={particularDesign}>
            <Image
                src={particularDesign}
                alt={particularDesign.substring(8)}
                width={180}
                height={180} />
            <div className={styles.buttonBase}>
                <p>👀</p>
            </div>
        </div>
    )
}