'use client'
import { useEffect} from 'react';
import styles from '../../styles/components/ImagesPanel.module.css'
import ParticularImage from '../particularImageComponent/ParticularImage';
import { DesignByShop } from '@/context/design/DesignContextInterface';
import {useDesign} from '../../context/design/UseDesign'

export default function ImagePanel() {

    const {designs, getAllDesigns} = useDesign();

    useEffect(()=>{
        getAllDesigns();
    },[])


    return (
        <div className={styles.imagePanel}>
            <div className={styles.imagesList}>
                {!designs
                    ? <p>no hay valores</p>
                    : designs && designs.map((particularDesign: DesignByShop) => (
                        <ParticularImage
                            particularDesign={particularDesign}
                            key={particularDesign.id} />
                    ))}
            </div>
        </div>
    )
}