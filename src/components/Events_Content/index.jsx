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
                        <img className="rounded" src="https://scontent.fpiu2-1.fna.fbcdn.net/v/t39.30808-6/382401482_17929489259766346_7987236623914257357_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHXYS5_iEFM7zzw8GxcMj0hvpjvcorRaIS-mO9yitFohNq1E2XV1hAoqRWWVIQJlYn2BGpqG_DH6CWJUB-nAWPt&_nc_ohc=dLWgxlWsP-8AX8iCfqy&_nc_ht=scontent.fpiu2-1.fna&oh=00_AfCLZIwtJO0idz5Swba6_1-2Oj5uTEZaXNWtXtpZmVukZQ&oe=654FCEB7" alt="Evento image" width={200} height={150} />
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