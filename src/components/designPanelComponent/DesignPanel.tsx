'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import ImagePanel from '../imagePanelComponent/ImagePanel';
import PrevisualizerComponent from '../previsualizerComponent/PrevisualizerComponent';
import CartComponent from '../cartComponent/CartComponent';
import ShippingFormComponent from '../shippingFormComponent/ShippingFormComponent';
import styles from '../../styles/components/DesignPanel.module.css'

export default function DesignPanel() {

    function buildDesigns(): Array<string> {
        return [
            '/designs/C_.png',
            '/designs/GOPHER_STAR_WARS.png',
            '/designs/RipLanguages.png',
            '/designs/anyTypescript.png',
            '/designs/backAndFrontJs.png',
            '/designs/cloudFamily.png',
            '/designs/deployEveryday.png',
            '/designs/designThinking.png',
            '/designs/developmentRegex.png',
            '/designs/frontendArmor2.png',
            '/designs/gopher_vacations.png',
            '/designs/mapTransparentEditedLimit.png',
            '/designs/mapaDeEmpatia2.png',
            '/designs/merchandising-JavaMate2.png',
            '/designs/mirrorGopher.png',
            '/designs/modern-merlin-960x960.png',
            '/designs/namingVariables.png',
            '/designs/springFramework.png',
            '/designs/subteSQL.png',
            '/designs/undergroundSQL.png',
            '/designs/unitTesting.png',
            '/designs/youtubeUniversity.png'
        ]
    }
    const itemsPerPage: number = 6;

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = buildDesigns().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(buildDesigns().length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % buildDesigns().length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div className={styles.designPanelBase}>
            <ImagePanel/>
            <div className={styles.line}></div>
            <PrevisualizerComponent/>
            <CartComponent/>
            <div className={styles.line}></div>
            <ShippingFormComponent/>
        </div>
    )
}