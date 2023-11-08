import React, { useState } from 'react';
import styles from './Reservation_Head.css'

export default function Reservation_Head() {
    const [selectedNivel, setSelectedNivel] = useState("opcion1"); // Define selectedNivel y su valor inicial

    const handleNivelChange = (event) => {
        setSelectedNivel(event.target.value);
    };

    return (
        <div className="datos_reserva border rounded w-[80%] p-8 font-semibold">
            <h2 className="font-bold text-[18px]">
                DATOS DE RESERVA
            </h2>
            <p className="pt-2 pb-2 font-normal text-[14px]">Complete los siguientes datos para realizar su reserva</p>

            <form>
                <div className="pt-4">
                    <label>Cantidad de comensales
                        <input
                            className="font-normal p-4 w-[100%] h-[50px] text-[14px] bg-[#F4F4F5] rounded-xl"
                            placeholder="Ingrese la cantidad de comensales"
                            type="number"
                        />
                    </label>
                </div>

                <div className="pt-4">
                    <label>Fecha
                        <input
                            className="font-normal p-4 w-[100%] h-[50px] text-[14px] bg-[#F4F4F5] rounded-xl"
                            placeholder="Ingrese una fecha"
                            type="date"
                        />
                    </label>
                </div>

                <div className="pt-4">
                    <label>Hora
                        <div className="bg-[#F4F4F5] rounded-xl h-[50px] w-auto">
                            <select className="font-normal items-center m-auto p-4 bg-transparent text-[14px]" name="" id="">
                                <option className="text-[14px]" value="opcion1">Opción 1</option>
                                <option className="text-[14px]" value="opcion2">Opción 2</option>
                                <option className="text-[14px]" value="opcion3">Opción 3</option>
                                <option className="text-[14px]" value="opcion4">Opción 4</option>
                                <option className="text-[14px]" value="opcion5">Opción 5</option>
                            </select>
                        </div>
                    </label>
                </div>

                <div className="pt-4">
                    <label>Nivel
                        <div className="pt-4">
                            <div className="bg-[#F4F4F5] rounded-xl h-[50px] w-auto">
                                <select
                                    className="font-normal items-center m-auto p-4 bg-transparent text-[14px]"
                                    name="nivel"
                                    value={selectedNivel}
                                    onChange={handleNivelChange}
                                >
                                    <option className="text-[14px]" value="opcion1">Segundo nivel</option>
                                    <option className="text-[14px]" value="opcion2">Tercer nivel</option>
                                </select>
                            </div>
                        </div>
                    </label>
                </div>

                <div className="pt-4 pb-2">
                    <label>Comentario
                        <textarea
                            className="font-normal bg-[#F4F4F5] rounded-xl h-[70px] w-[100%] p-4"
                            placeholder="Esto es opcional"
                            type="text" />
                    </label>
                </div>
                <button className="text-[14px] m-auto text-center text-white font-semibold bg-red-600 rounded h-auto p-2 hover:bg-red-700">
                    Comprobar disponibilidad
                </button>
            </form>
        </div>
    )
};