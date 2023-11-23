import React from 'react';
import styles from './Events_Content.css';
import Image from 'next/image'

export default function Events_Content() {
    return (
        <div className="event_content pb-4">
            <div className="pt-4">
                <h2 className="text-[18px] font-bold pb-2">
                    Eventos
                </h2>
                <div id="Eventos" className="flex flex-row border rounded p-4 items-center">
                    <div className="imagen_evento w-[200px]">
                        <img className="rounded" src="evento1.jpg" alt="Evento image" width={200} height={150} />
                    </div>
                    <div className="pl-[5%]">
                        <h3 className="text-[18px] font-bold pb-2">
                            Evento del día
                        </h3>
                        <p className="text-[16px]">
                            Ven y disfruta de un día BRAVAZO con las mejores orquestas y los mejores Djs de la región.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};