'use client'
import { useEffect, useState } from 'react'
import styles from '../../styles/components/Size.module.css'
import SizeCategoryComponent from '../sizeCategoryComponent/SizeCategoryComponent';

interface SizeRequest {
    sizes: string[];
    updateColor: (keyToSearch: string) => void
}

export default function SizeComponent({ sizes, updateColor }: SizeRequest) {

    const [smallSizes, setSmallSizes] = useState<string[]>([])
    const [mediumSizes, setMediumSizes] = useState<string[]>([])
    const [largeSizes, setLargeSizes] = useState<string[]>([])
    const [rendered, setRendered] = useState<boolean>(false)
    const [sizeSelected, setSizeSelected] = useState<string>('')
    const [sizeCategorySelected, setSizeCategorySelected] = useState<string>('')

    const REGEX_SIZE_CATEGORY= /[sSmMlL]/;
    const S_SIZE: string = 'S';
    const M_SIZE: string = 'M';
    const L_SIZE: string = 'L';

    function iterateSize(sizes: string[]) {
        sizes.forEach(particularSize => {
            let sizeCategory = particularSize.match(REGEX_SIZE_CATEGORY)?.[0]
            switch (sizeCategory) {
                case S_SIZE:
                    setSmallSizes(preventList => [...preventList, particularSize]);
                    break;
                case M_SIZE:
                    setMediumSizes(preventList => [...preventList, particularSize]);
                    break;
                case L_SIZE:
                    setLargeSizes(preventList => [...preventList, particularSize]);
                    break;
            }
        })
    }

    useEffect(() => {
        iterateSize(sizes)
        setRendered(true)
    }, [sizes])

    return (
        <div className={styles.shirtSize}>
            {rendered
                ? <>
                    <SizeCategoryComponent category ='S' sizeCategory={smallSizes} updateColor={updateColor} sizeSelected = {sizeSelected} setSizeSelected ={setSizeSelected} sizeCategorySelected = {sizeCategorySelected} setSizeCategorySelected={setSizeCategorySelected}/>
                    <SizeCategoryComponent category ='M' sizeCategory={mediumSizes} updateColor={updateColor} sizeSelected = {sizeSelected} setSizeSelected ={setSizeSelected} sizeCategorySelected = {sizeCategorySelected} setSizeCategorySelected={setSizeCategorySelected}/>
                    <SizeCategoryComponent category ='L' sizeCategory={largeSizes} updateColor={updateColor} sizeSelected = {sizeSelected} setSizeSelected ={setSizeSelected} sizeCategorySelected = {sizeCategorySelected} setSizeCategorySelected={setSizeCategorySelected}/>
                </>
                : <p>loading...</p>}
        </div>
    )
}