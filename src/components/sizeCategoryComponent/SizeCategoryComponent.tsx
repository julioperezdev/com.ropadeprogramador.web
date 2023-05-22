'use client'
import {Dispatch, SetStateAction, useState} from 'react'
import { v4 as uuid } from 'uuid'
import styles from '../../styles/components/SizeCategory.module.css'

interface SizeCategoryRequest {
    category:string;
    sizeCategory: string[];
    updateColor: (keyToSearch: string) => void;
    sizeSelected:string;
    setSizeSelected: Dispatch<SetStateAction<string>>;
    sizeCategorySelected:string;
    setSizeCategorySelected: Dispatch<SetStateAction<string>>;
}

export default function SizeCategoryComponent({ category, sizeCategory, updateColor , sizeSelected, setSizeSelected, sizeCategorySelected, setSizeCategorySelected}: SizeCategoryRequest) {

    const viewList = sizeCategory.includes('S') && sizeCategory[0] !== 'S' ? sizeCategory.reverse() : sizeCategory;

    function executeUpdateColor(particularSize:string){
        setSizeCategorySelected(category)
        setSizeSelected(prevent =>(particularSize))
        updateColor(particularSize)
    }

    function updateColorIfAloneSize(){
        if(sizeCategory.length == 1) {
            setSizeCategorySelected(category)
            setSizeSelected(prevent =>(sizeCategory[0]))
            updateColor(sizeCategory[0])
        }
    }
    
    return (
        <div className={sizeCategorySelected != category ? styles.sizeCategoryBase : styles.sizeCategoryBaseSelected} onClick={()=>updateColorIfAloneSize()}>
            {viewList && viewList.map(particularSize => (
                <p 
                className={sizeSelected != particularSize ? styles.size : styles.sizeSelected} 
                key={uuid()} 
                onClick={()=>executeUpdateColor(particularSize)}>{particularSize}</p>
            ))}
        </div>
    )
}