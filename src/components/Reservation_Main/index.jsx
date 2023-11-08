import React, { useState } from 'react';
import styles from './Reservation_Main.css'
import Reservation_Head from '../Stepper/Stepps/Reservation_Head'
import Reservation_Body from '../Stepper/Stepps/Reservation_Body'
import Reservation_Final from '../Stepper/Stepps/Reservation_Final';

export default function Reservation_Main() {

    return (
        <div className="contenido_general">
            <div className="contenido_izquierdo p-16 flex flex-row">
                <Reservation_Head />

                <div className="mostrar_datos pl-16">
                    <Reservation_Body />
                    <div className="pt-4 w-[770px] m-auto">
                        <div className="border w-[100%]"></div>
                    </div>

                    <div className="elegirMesero">
                        <Reservation_Final />
                    </div>

                </div>
            </div>
        </div >
    )
};