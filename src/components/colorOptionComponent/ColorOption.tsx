import { Dispatch, SetStateAction } from 'react';
import styles from '../../styles/components/ColorOption.module.css'
import { v4 as uuid } from 'uuid'

interface ColorOptionRequest {
    colors: string[];
    colorSelected: string;
    setColorSelected: Dispatch<SetStateAction<string>>;
}

export default function ColorOption({ colors, colorSelected, setColorSelected }: ColorOptionRequest) {

    function handleClick(color: string) {
        setColorSelected(prevent => (color));
    }

    return (
        <div className={styles.colorBase}>
            {colors && colors.map((color) => (
                <div
                    className={colorSelected != color ? styles.color : styles.colorSelected}
                    onClick={() => handleClick(color)}
                    key={uuid()}
                    style={{
                        backgroundColor: `${color}`
                    }}>
                </div>
            ))}
        </div>
    )
}