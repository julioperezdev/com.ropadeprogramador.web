import styles from '../../styles/components/ColorOption.module.css'
import { v4 as uuid } from 'uuid'
export default function ColorOption({ colors }: { colors: string[] }) {

    return (
        <div className={styles.colorBase}>
            {colors && colors.map((color) => (
                <div
                    key={uuid()}
                    style={{
                        backgroundColor:`${color}`
                    }}>
                </div>
            ))}
        </div>
    )
}