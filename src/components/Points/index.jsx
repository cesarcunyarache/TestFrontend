'use client'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card"
import Table from "../Table"
import { Divider } from "@nextui-org/react";

import { useGetProfileQuery } from '../../redux/services/userApi'
import { useGetReservaByIdUserQuery } from "../../redux/services/reservaApi";
import { useGetPuntosByIdUserQuery } from "../../redux/services/reservaApi";
//import { usePostProductosMutation } from "../../redux/services/productosApi";

export default function index() {

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
                    <p className="pt-4">Válidos hasta el <span>{(puntos?.data?.fechaVencimiento) != null ? (puntos?.data?.fechaVencimiento) : '------'}</span></p>
                </div>

            </div>

            <div>
                <p className="pl-32 pt-16 text-[16px] font-semibold">Mis reservas</p>
                <div className="tabla w-[83%] m-auto pt-8">
                    <Table />
                </div>
            </div>
            <div>
                <div>
                    <h2 className="pl-32 pt-16 text-[16px] font-semibold">Puedes canjear tus puntos por lo siguiente:</h2>
                </div>
            </div>
            <div className="cartas pt-8">
                <div className="flex flex-row justify-center items-center gap-4 pb-4">

                    {/*<div className="">
                        {!isLoading &&
                            data.map((mesa) => {
                                if (mesa.nivel == "S") {
                                    return <Mesas data={mesa} />;
                                }
                            })}
                        </div>*/}

                    <Card
                        titulo={"Ceviche de Conchas Negras"}
                        precio={"s/35.00"}
                        puntos={"34 puntos"}
                        imagen={"imagesPuntos/cevicheconchas.jpg"}
                    />
                    <Card
                        titulo={"Ceviche de Filete - Mediano"}
                        precio={"s/30.00"}
                        puntos={"30 puntos"}
                        imagen={"imagesPuntos/cevichefilete.jpg"}
                    />
                    <Card
                        titulo={"Pollo a la Plancha"}
                        precio={"s/15.00"}
                        puntos={"14 puntos"}
                        imagen={"imagesPuntos/polloplancha.jpg"}
                    />
                    <Card
                        titulo={"Costillas a la BBQ - Mediano"}
                        precio={"s/30.00"}
                        puntos={"28 puntos"}
                        imagen={"imagesPuntos/costillas.jpg"}
                    />
                </div>

                <div className="flex flex-row justify-center items-center gap-4 pb-4">
                    <Card
                        titulo={"Chicharrón de pescado - Mediano"}
                        precio={"s/30.00"}
                        puntos={"28 puntos"}
                        imagen={"imagesPuntos/chicharronpescado.jpg"}
                    />
                    <Card
                        titulo={"Piqueo Parrillero"}
                        precio={"s/40.00"}
                        puntos={"40 puntos"}
                        imagen={"imagesPuntos/piqueo.jpg"}
                    />
                    <Card
                        titulo={"ronda de alitas"}
                        precio={"s/70.00"}
                        puntos={"68 puntos"}
                        imagen={"imagesPuntos/rondaalitas.jpg"}
                    />
                    <Card
                        titulo={"lomo saltado a lo pobre"}
                        precio={"s/25.00"}
                        puntos={"22 puntos"}
                        imagen={"imagesPuntos/lomopobre.jpg"}
                    />
                </div>
                {/*TRAGOS*/}
                <div className="flex flex-row justify-center items-center gap-4">
                    <Card
                        titulo={"Mojadita corona"}
                        precio={"s/28.00"}
                        puntos={"28 puntos"}
                        imagen={"imagesPuntos/mojaditacorona.jpg"}
                    />
                    <Card
                        titulo={"Tequila sunrise"}
                        precio={"s/20.00"}
                        puntos={"18 puntos"}
                        imagen={"imagesPuntos/tequilasunrise.jpg"}
                    />
                    <Card
                        titulo={"Lomo Saltado a lo Pobre"}
                        precio={"s/25.00"}
                        puntos={"22 puntos"}
                        imagen={""}
                    />
                    <Card
                        titulo={"Trio Marino - Grande"}
                        precio={"s/58.00"}
                        puntos={"55 puntos"}
                        imagen={""}
                    />
                </div>
            </div>
        </div>
    )
};