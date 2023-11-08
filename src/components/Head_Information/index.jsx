import React from 'react';
import styles from './Head_Information.css';

export default function Head_Information() {

    return (
        <div className="presentacion">
            <h2 className="slogan text-[30px] font-bold pb-4 inline-block border-b-[1px] border-black">
                BRAVAZO, UN RESTOBAR INNOVADOR INSPIRADO POR EL ESPÍRITU Y SENSUALIDAD DEL NORTE.
            </h2>

            <div className="complemento text-[14px] pt-4">
                <p className="pb-2 icon icon-reloj"> 11:00 am - 2:00 am</p>
                <p className="pb-4 icon icon-reseas"> Sin reseñas</p>
                <p className="mensaje text-[16px] w-80%">
                    Creemos con firmeza que todos merecemos vivir experiencias agradables y únicas, es por ello que nuestro compromiso con cada uno de ustedes lo expresamos con nuestra comida. La dedicación y el esfuerzo se recompensa con sonrisas satisfactorias.
                </p>
            </div>
        </div>
    )
};