'use client'
import ColorOption from '../colorOptionComponent/ColorOption'
import SizeComponent from '../sizeComponent/SizeComponent'
import ShirtPositionComponent from '../shirtPositionComponent/ShirtPositionComponent'
import CounterCartComponent from '../counterCartComponent/CounterCartComponent'
import styles from '../../styles/components/Previsualizer.module.css'
import Image from 'next/image'
import { useDesign } from '@/context/design/UseDesign'
import { useEffect, useState } from 'react'

export default function PrevisualizerComponent() {

    const { availableSizeColor } = useDesign();
    const [size, setSize] = useState<string[]>([])
    const [colors, setColors] = useState<string[]>([])
    const [colorSelected, setColorSelected] = useState<string>('')

    async function updateColorToFirstRender(availableSizeColor: Map<string, string[]>) {
        updateColor(availableSizeColor.values().next().value);
    }

    function updateColor(keyToSearch: string) {
        const colorFound = availableSizeColor.get(keyToSearch);
        if (colorFound) setColors(colorFound)
    }

    function updateSizes(mapSizeColor: Map<string, string[]>) {
        const newSizes = Array.from(mapSizeColor.keys());
        setSize(newSizes);
    }

    useEffect(() => {
        console.log('esta cambiando')
        updateSizes(availableSizeColor);
        if (colors.length == 0) updateColorToFirstRender(availableSizeColor)
    }, [availableSizeColor])

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
                    <SizeComponent
                        sizes={size} 
                        updateColor={updateColor}
                        />
                    <ColorOption
                        colors={colors}
                        colorSelected={colorSelected} 
                        setColorSelected ={setColorSelected}/>
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