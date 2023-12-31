import React, { useState, useMemo } from "react";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Pagination } from "@nextui-org/react";

import ModalConfirmReserva from "../ModalConfirmReserva";

import { useGetProfileQuery } from "../../redux/services/userApi";
import { useGetReservaByIdUserQuery } from "../../redux/services/reservaApi";
import { usePutUpdateReservaMutation } from "../../redux/services/reservaApi"

import Load from "../Load";

const statusColorMap = {
    0: { estado: "danger", text: "Cancelada" },
    1: { estado: "warning", text: "Pendiente" },
    2: { estado: "primary", text: "Asistió" },
    3: { estado: "default", text: "No presentado" },
    4: { estado: "success", text: "Completada" },
};

export default function App() {
    const { data: profile, isLoading: isLoadingProfile } = useGetProfileQuery();
    const idUser = profile?.data?.id;

    const { data: reserva, isLoading } = useGetReservaByIdUserQuery(idUser);
    const { data: update } = usePutUpdateReservaMutation();

    const [showModal, setShowModal] = useState(false);
    const [selectedReservaId, setSelectedReservaId] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 2; // Número de elementos por página

    const handleCancelClick = (reservaId) => {
        setSelectedReservaId(reservaId);
        setShowModal(true);
    };

    const handleModalCancel = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Table aria-label="Example static collection table">

                <TableHeader>
                    <TableColumn>Código</TableColumn>
                    <TableColumn>Estado</TableColumn>
                    <TableColumn>Hora</TableColumn>
                    <TableColumn>Fecha</TableColumn>
                    <TableColumn>Comensales</TableColumn>
                    <TableColumn>Mesas</TableColumn>
                    <TableColumn>Puntos</TableColumn>
                    <TableColumn>Acción</TableColumn>
                </TableHeader>
                <TableBody>
                    {reserva?.data?.map((reservaItem) =>
                        <TableRow key={reservaItem.idReserva}>
                            <TableCell>{reservaItem.idReserva}</TableCell>
                            <TableCell>
                                <Chip
                                    className="capitalize"
                                    color={statusColorMap[reservaItem.estado].estado}
                                    size="sm"
                                    variant="flat"
                                >
                                    {statusColorMap[reservaItem.estado]?.text}
                                </Chip>
                            </TableCell>
                            <TableCell>{reservaItem.hora}</TableCell>
                            <TableCell>{reservaItem.fecha}</TableCell>
                            <TableCell>{reservaItem.cantComensales}</TableCell>
                            <TableCell>{reservaItem.codigos_mesas}</TableCell>
                            <TableCell>
                                {parseInt(reservaItem.estado, 10) === 4 ? 3 : 'Pendiente'}
                            </TableCell>
                            <TableCell>
                                <button type="button" onClick={() => handleCancelClick(reservaItem.idReserva)}>
                                    <ModalConfirmReserva
                                        isOpen={showModal}
                                        onClose={handleModalCancel}
                                        selectedReservaId={reservaItem.idReserva}
                                        estadoReserva={reservaItem.estado}
                                    />
                                </button>
                            </TableCell>
                        </TableRow>
                    )};
                </TableBody>
            </Table>
        </div>
    );
}
