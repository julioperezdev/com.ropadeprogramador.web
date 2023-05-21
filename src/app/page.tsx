import Image from "next/image";
import DesignFilter from "@/components/designFilterComponent/DesignFilter";
import styles from '../styles/app/Home.module.css'
import DesignPanel from "@/components/designPanelComponent/DesignPanel";

export default function HomePage() {

  return (
    <>
      <div className={styles.presentationBase}>
        <div className={styles.sloganBase}>
          <h1>Todo al mismo precio</h1>
          <h2>6000</h2>
          <p>*por unidad</p>
          <p>envio gratis</p>
          <p>3 cuotas sin interes</p>
        </div>
        <div>
          <Image
            src='/model1.png'
            alt="models mockup"
            width={350}
            height={350}/>
        </div>
      </div>
      <div>
        <DesignFilter/>
        <DesignPanel/>
      </div>
    </>
  )
}
