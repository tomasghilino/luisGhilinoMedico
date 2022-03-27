import React from 'react';
import Map from '../ui/Map';
import Formulario from '../ui/Form';

//styles
import { ContactoContainer, ContactoFormContainer, ContactoMapContainer } from "./ContactoElements";

const Contacto = () => {
    return ( 

        <ContactoContainer>
            <ContactoFormContainer>
                <Formulario />
            </ContactoFormContainer>
            <ContactoMapContainer>
                <Map />
            </ContactoMapContainer>
        </ContactoContainer>

     );
}
 
export default Contacto;