'use client'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card"
import Table from "../Table"
import TableCanje from "../TableCanje"
import { Divider } from "@nextui-org/react";

import { useGetProfileQuery } from '../../redux/services/userApi'
import { useGetReservaByIdUserQuery } from "../../redux/services/reservaApi";
import { useGetPuntosByIdUserQuery } from "../../redux/services/reservaApi";
import { useGetReadProductosQuery } from "../../redux/services/reservaApi";

export default function Index() {

    const { data: productos } = useGetReadProductosQuery();

    const { data: profile, isLoading: isLoadingProfile } = useGetProfileQuery();
    const idUser = profile?.data?.id;

    const { data: reserva, isLoading } = useGetReservaByIdUserQuery(idUser);

    const { data: puntos, isLoading: isLoadingPuntos } = useGetPuntosByIdUserQuery(idUser);

    return (
        <div className="m-auto">
            <div className="m-auto text-center">
                <div className="contenidoCabecera pb-10">
                    <div className="text-left pl-32 bg-red-600 pb-10 text-white">
                        <h1 className="text-[50px] font-bold text-left pt-32">
                            Reserva hoy, disfruta mañana.
                        </h1>
                        <p className="text-[24px] font-semibold pb-8">
                            ¡Gana puntos con cada visita y haz de cada comida una experiencia para recordar!
                        </p>
                    </div>
                </div>

                <div>
                    <h1 className="text-[18px] font-semibold">¡Hola! <span>{profile?.data?.nombres + " " + profile?.data?.apellidos}</span></h1>
                    <p className="text-[24px] font-bold">Tienes <span>{(puntos?.data?.cantidad) != null ? (puntos?.data?.cantidad) : '0'}</span> puntos disponibles.</p>

                    {(puntos?.data?.fechaVencimiento) != null ? <p>Válidos hasta el: {(puntos?.data?.fechaVencimiento)}</p> : <p></p>}
                </div>

            </div>
            <div>
                <p className="pl-32 pt-16 text-[16px] font-semibold">Mis reservas</p>
                <div className="tabla w-[83%] m-auto pt-8">
                    <Table />
                </div>
            </div>
            <div>
                <p className="pl-32 pt-16 text-[16px] font-semibold">Mis canjes</p>
                <div className="tabla w-[83%] m-auto pt-8">
                    <TableCanje />
                </div>
            </div>
            <div>
                <div>
                    <h2 className="pl-32 pt-16 text-[16px] font-semibold">Puedes canjear tus puntos por lo siguiente:</h2>
                </div>
            </div>
            <div className="cartas pt-8">
                <div className="">

                    <div className="flex flex-wrap justify-center items-center gap-4 pb-4 w-full">
                        {!isLoading &&
                            productos?.data.map((producto, index) => (
                                <div key={producto.idProducto} className="p-4 w-1/5"> {/* Establece el ancho para 25% */}
                                    <Card
                                        className="w-[500px]"
                                        idProducto={producto.idProducto}
                                        titulo={producto.nombre}
                                        precio={"s/" + producto.precio + ".00"}
                                        puntosCosto={producto.costoPuntos + " puntos"}
                                        imagen={producto.imagen}
                                    />
                                </div>
                            ))}
                    </div>



                </div>

                <div className="flex flex-row justify-center items-center gap-4 pb-4">

                </div>
                {/*TRAGOS*/}
                <div className="flex flex-row justify-center items-center gap-4">

                </div>
            </div>
        </div>
    )
};