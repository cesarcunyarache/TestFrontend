import React, { useState, useMemo } from "react";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Pagination } from "@nextui-org/react";
import { useGetProfileQuery } from "../../redux/services/userApi";
import { useGetReservaByIdUserQuery } from "../../redux/services/reservaApi";
import { usePutUpdateReservaMutation } from "../../redux/services/reservaApi";
import { useGetProductosByIdUserQuery } from "../../redux/services/reservaApi";
import { useGetPuntosByIdUserQuery } from "../../redux/services/reservaApi";

import Load from "../Load";

const statusColorMap = {
    0: { estado: "warning", text: "Pendiente" },
    1: { estado: "success", text: "Canjeado" },
    2: { estado: "danger", text: "Vencido" },
};

export default function App() {

    const { data: profile, isLoading: isLoadingProfile } = useGetProfileQuery();
    const idUser = profile?.data?.id;

    const { data: puntos, isLoading: isLoadingPuntos } = useGetPuntosByIdUserQuery(idUser);
    const idCliente = puntos?.data?.idCliente;

    const { data: productosCanjeados } = useGetProductosByIdUserQuery(idUser);

    return (
        <div>
            <Table aria-label="Example static collection table">

                <TableHeader>
                    <TableColumn>Código</TableColumn>
                    <TableColumn>Estado</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Precio</TableColumn>
                    <TableColumn>Costo en Puntos</TableColumn>
                    <TableColumn>Fecha de Vencimiento</TableColumn>
                </TableHeader>
                <TableBody>
                    {productosCanjeados?.data?.map((productos) =>
                        <TableRow key={productos.idProducto}>
                            <TableCell>{productos.idProducto}</TableCell>
                            <TableCell>
                                <Chip
                                    className="capitalize"
                                    color={statusColorMap[productos.estado].estado}
                                    size="sm"
                                    variant="flat"
                                >
                                    {statusColorMap[productos.estado]?.text}
                                </Chip>
                            </TableCell>
                            <TableCell>{productos.nombre}</TableCell>
                            <TableCell>s/{productos.precio}.00</TableCell>
                            <TableCell>{productos.costoPuntos}</TableCell>
                            <TableCell>{productos.fecha}</TableCell>
                        </TableRow>
                    )};
                </TableBody>
            </Table>
        </div>
    );
}
