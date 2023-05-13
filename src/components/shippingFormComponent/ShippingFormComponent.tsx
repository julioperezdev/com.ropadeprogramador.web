

import styles from '../../styles/components/ShippingForm.module.css'

export default function ShippingFormComponent(){
    return(
        <div className={styles.shippingDataBase} id="section3">
                <div>
                    datos personales
                    <input type="text" placeholder='nombre'/>
                    <input type="text" placeholder='apellido'/>
                    <input type="text" placeholder='telefono'/>
                    <input type="text" placeholder='email'/>
                    <input type="text" placeholder='dni'/>
                </div>
                <div>
                    datos del envio
                    <input type="text" placeholder='calle'/>
                    <input type="text" placeholder='numero'/>
                    <input type="text" placeholder='piso'/>
                    <input type="text" placeholder='depto'/>
                    <input type="text" placeholder='referencia_domicilio'/>
                    <input type="text" placeholder='codigo_postal'/>
                    <select name="" id="">
                        <option value="1">CABA</option>
                        <option value="5">Cordoba</option>
                        <option value="4">Jujuy</option>
                    </select>
                    <select name="" id="">
                        <option value="102">Almagro</option>
                        <option value="114">San Nicolas</option>
                        <option value="555">San Vicente</option>
                    </select>
                </div>
            </div>
    )
}