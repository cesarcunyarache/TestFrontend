import React, { useState, useEffect } from 'react';
import styles from './title.css';

export default function Information_Order() {
    const [text, setText] = useState("los Platillos");
    const [text2, setText2] = useState("los Platillos");

    useEffect(() => {
        // Definir una lista de textos alternativos
        const alternateTexts = ["los Platillos", "los Tragos", "los Momentos"];
        const alternateTexts2 = ["más Irresistibles", "más Innovadores", "más Memorables"];
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % alternateTexts.length;
            setText(alternateTexts[currentIndex]);
            setText2(alternateTexts2[currentIndex]);
        }, 3000); // Cambiar cada 3 segundos (3000 milisegundos)

        return () => {
            clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
        };
    }, []);

    return (
        <div className="contenedor w-[900px] h-auto font-bold text-[60px] text-center p-4 m-auto pt-8">
            <p>
                ¡Eleva tu experiencia
                <span className="p-2">con</span>
                <span className="text-red-600">
                    {text}
                </span>
                <span className="p-2">{text2}</span>
                de la ciudad!
            </p>
        </div>
    );
}
