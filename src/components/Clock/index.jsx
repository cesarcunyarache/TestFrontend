// Cronometro.js
import React, { useState, useEffect } from 'react';
import ModalClock from '../ModalClock';
const Cronometro = () => {
    const [tiempoRestante, setTiempoRestante] = useState(299); // 4 minutos en segundos
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    useEffect(() => {
        let intervalo;

        if (tiempoRestante > 0) {
            intervalo = setInterval(() => {
                setTiempoRestante(prev => (prev > 0 ? prev - 1 : 0));
            }, 1000);
        } else {
            setMostrarMensaje(true);
        }

        return () => clearInterval(intervalo);
    }, [tiempoRestante]);

    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    return (
        <div className="pt-4 text-center flex flex-row justify-center gap-1 mx-auto">
            <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className="text-xl">
                {minutos < 10 ? '0' + minutos : minutos}:
                {segundos < 10 ? '0' + segundos : segundos}
            </div>
            {mostrarMensaje &&
                <ModalClock
                    valor={{ valor: true }}
                />}
        </div>
    );
};

export default Cronometro;
