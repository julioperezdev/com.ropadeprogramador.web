import ColorOption from '../colorOptionComponent/ColorOption'
import SizeComponent from '../sizeComponent/SizeComponent'
import ShirtPositionComponent from '../shirtPositionComponent/ShirtPositionComponent'
import CounterCartComponent from '../counterCartComponent/CounterCartComponent'
import styles from '../../styles/components/Previsualizer.module.css'
import Image from 'next/image'

export default function PrevisualizerComponent() {
    return (
        <div className={styles.preSelectedProductBase}>
            <p>
                modelo seleccionado
            </p>
            <div className={styles.preSelectedProduct}>
                <Image
                    src='/model2.png'
                    alt="models mockup2"
                    width={400}
                    height={400} />
                <div>
                    <ColorOption />
                    <SizeComponent />
                    <ShirtPositionComponent />
                    <CounterCartComponent />
                    <div>
                        <p className={styles.confirmButton}>AGREGAR</p>
                    </div>
                </div>

            </div>

        </div>
    )
}