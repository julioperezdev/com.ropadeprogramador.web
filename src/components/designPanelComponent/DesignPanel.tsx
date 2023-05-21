'use client'
import ImagePanel from '../imagePanelComponent/ImagePanel';
import PrevisualizerComponent from '../previsualizerComponent/PrevisualizerComponent';
import CartComponent from '../cartComponent/CartComponent';
import ShippingFormComponent from '../shippingFormComponent/ShippingFormComponent';
import styles from '../../styles/components/DesignPanel.module.css'

export default function DesignPanel() {

    return (
        <div className={styles.designPanelBase}>
            {/* @ts-expect-error Server Component */}
            <ImagePanel/>
            <div className={styles.line}></div>
            <PrevisualizerComponent/>
            <CartComponent/>
            <div className={styles.line}></div>
            <ShippingFormComponent/>
        </div>
    )
}