import Image from 'next/image'
import styles from '../../styles/components/ParticularImage.module.css'
import {DesignByShop, GetDesignByDescriptionRequest} from '../../context/design/DesignContextInterface'
import { useDesign } from '@/context/design/UseDesign';

export default function ParticularImage({particularDesign}:{particularDesign:DesignByShop}) {

    const {getDesignByDescription, designSelected} = useDesign();
    
    async function handleDesign(particularDesign:DesignByShop){
        const request:GetDesignByDescriptionRequest = {
            description:particularDesign.slug,
            designUrl:particularDesign.settings.image
        }
        await getDesignByDescription(request)
    }

    function isSelected(){
        return designSelected.description === particularDesign.slug;
    }

    return (
        <div 
        className={styles.particularDesign} 
        style={{background : isSelected() ? "#E1E1E1" : "#FFFFFF" }} 
        onClick={()=>handleDesign(particularDesign)}>
            <Image
                src={particularDesign.settings.image}
                alt={particularDesign.name}
                width={180}
                height={180} />
            <div className={styles.buttonBase}>
                <p>👀</p>
            </div>
        </div>
    )
}