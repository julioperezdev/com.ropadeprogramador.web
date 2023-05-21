'use client'
import {useState} from 'react'
import { v4 as uuid } from 'uuid'
import styles from '../../styles/components/SizeCategory.module.css'

interface SizeCategoryRequest {
    sizeCategory: string[];
    updateColor: (keyToSearch: string) => void
}

export default function SizeCategoryComponent({ sizeCategory, updateColor }: SizeCategoryRequest) {


    const viewList = sizeCategory.includes('S') && sizeCategory[0] !== 'S' ? sizeCategory.reverse() : sizeCategory;

    function executeUpdateColor(particularSize:string){
        updateColor(particularSize)
    }

    function updateColorIfAloneSize(){
        if(sizeCategory.length == 1) updateColor(sizeCategory[0])
    }
    
    return (
        <div className={styles.sizeCategoryBase} onClick={()=>updateColorIfAloneSize()}>
            {viewList && viewList.map(particularSize => (
                <p 
                className={styles.size} 
                key={uuid()} 
                onClick={()=>executeUpdateColor(particularSize)}>{particularSize}</p>
            ))}
        </div>
    )
}