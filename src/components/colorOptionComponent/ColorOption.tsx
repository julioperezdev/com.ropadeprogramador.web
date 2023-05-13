import styles from '../../styles/components/ColorOption.module.css'
export default function ColorOption() {
    return (
        <div className={styles.colorBase}>
            <div className={styles.red}></div>
            <div className={styles.blue}></div>
            <div className={styles.pink}></div>
            <div className={styles.yellow}></div>
            <div className={styles.black}></div>
            <div className={styles.gray}></div>
        </div>
    )
}