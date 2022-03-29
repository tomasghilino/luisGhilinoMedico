import React from 'react';
import { CustomIFrame } from './MapElements';

const Map = () => {

  return ( 
    <>
      <CustomIFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.4256578579775!2d-58.71018228423829!3d-34.54277656178428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd0e6fcd61dd%3A0x4fdb8a3fac89b970!2sMaestro%20%C3%81ngel%20D&#39;El%C3%ADa%201367%2C%20B1663GOE%20San%20Miguel%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1648577950965!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></CustomIFrame>
    </> 
  );
}

export default Map;