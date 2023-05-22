'use client'
import { useState } from 'react'
import styles from '../../styles/components/ShirtPosition.module.css'
import Image from 'next/image'

interface ShirtPostion {
    id: number;
    src: string;
    description: string;
}

export default function ShirtPositionComponent() {

    const [selectedId, setSelectedId] = useState<number>(0);

    const shirtPositionData: ShirtPostion[] = [
        {
            id: 1,
            src: '/options/optionFront.png',
            description: 'modelo de camiseta con diseño frontal'
        },
        {
            id: 2,
            src: '/options/optionBack.png',
            description: 'modelo de camiseta con diseño reves'
        },
        {
            id: 3,
            src: '/options/optionSmall.png',
            description: 'modelo de camiseta con diseño en el pecho'
        },
    ]

    function handleClick(id:number){
        setSelectedId(previous =>(id));
    }


    return (
        <div className={styles.shirtPositionBase}>
            {
                shirtPositionData.map(particularShirtPosition => (
                    <Image
                        key={particularShirtPosition.id}
                        src={particularShirtPosition.src}
                        alt={particularShirtPosition.description}
                        width={50}
                        height={50}
                        onClick={() =>handleClick(particularShirtPosition.id)}
                        className={selectedId != particularShirtPosition.id ? styles.shirtPosition : styles.shirtPositionSelected} />
                ))
            }
        </div>
    )
}