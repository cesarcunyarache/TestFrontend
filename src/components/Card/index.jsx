import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function index({ titulo, precio, puntos, imagen }) {
    return (
        <Card className="py-4 w-[20%]">
            <CardHeader className="pb-0 pt-2 pl-6 flex-col items-start">
                <p className="titulo text-tiny uppercase font-bold">{titulo}</p>
                <small className="precio text-default-500">Precio en carta: <span className="font-semibold text-[14px]">{precio}</span></small>
                <small className="puntos text-default-500 pb-1">Costo en puntos: <span className="font-semibold text-[14px]">{puntos}</span></small>
                <button className="font-bold text-[14px] bg-red-600 px-2 py-1 rounded text-white">Canjear</button>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={imagen}
                    style={{ width: '270px', height: '150px' }}
                />
            </CardBody>
        </Card>
    );
}
