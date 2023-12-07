import { useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useGetProfileQuery } from '../../redux/services/userApi'
import { useGetPuntosByIdUserQuery } from "../../redux/services/reservaApi";
import ModalCanjear from "../ModalCanjear"

export default function Index({ idProducto, titulo, precio, puntosCosto, imagen }) {
    const { data: profile, isLoading: isLoadingProfile } = useGetProfileQuery();
    const idUser = profile?.data?.id;

    const { data: puntos, isLoading: isLoadingPuntos } = useGetPuntosByIdUserQuery(idUser);
    const puntosDisponible = puntos?.data?.cantidad;
    const fecha = puntos?.data?.fechaVencimiento;

    const idProductoEntero = parseInt(idProducto, 10);
    const puntosCostoEntero = parseInt(puntosCosto, 10);
    const canjearHabilitado = puntosDisponible >= puntosCostoEntero;

    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 pl-6 flex-col items-start">
                <p className="titulo text-tiny uppercase font-bold">{titulo}</p>
                <small className="precio text-default-500">Precio en carta: <span className="font-semibold text-[14px]">{precio}</span></small>
                <small className="puntos text-default-500 pb-1">Costo en puntos: <span className="font-semibold text-[14px]">{puntosCosto}</span></small>
                {canjearHabilitado ? (
                    <ModalCanjear
                        idProducto={idProductoEntero}
                        puntosCosto={puntosCostoEntero}
                        puntosDisponible={puntosDisponible}
                        fecha={fecha}
                    />
                ) : (
                    <small className="text-red-500">Puntos insuficientes para canjear</small>
                )}
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={imagen}
                    style={{ width: '270px', height: '150px' }}
                />
            </CardBody>
        </Card >
    );
}
