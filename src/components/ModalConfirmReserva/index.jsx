import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { usePutUpdateReservaMutation } from "../../redux/services/reservaApi"
import { toast } from "sonner";
import { useGetProfileQuery } from "../../redux/services/userApi";
import { useGetReservaByIdUserQuery } from "../../redux/services/reservaApi";

export default function Index({ selectedReservaId, estadoReserva }) {

  const { data: profile, isLoading: isLoadingProfile } = useGetProfileQuery();
  const idUser = profile?.data?.id;
  const { data: reserva, isLoading } = useGetReservaByIdUserQuery(idUser);


  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('blur')

  const [putUpdateReserva, { isLoading: isLoadingUpdate }] =
    usePutUpdateReservaMutation();

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    console.log("IDUSER: ", reserva?.data)
    setBackdrop(backdrop)
    onOpen();
  }

  const handleCancel = () => {
    onClose();
  }

  const handleConfirm = async () => {

    if (selectedReservaId !== null && estadoReserva == 1) {
      const response = await putUpdateReserva({ idReserva: selectedReservaId, estado: 0 });
      if (response?.error) {
        console.log(response?.error);
        toast.error(response?.error?.data?.message);
      }
      if (response?.data) {
        toast.success("Reserva cancelada correctamente");
        onClose();
      }
    } else {
      toast.error("Seleccione una reserva válida");
      onClose();
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <Button
            key={b}
            variant=""
            onPress={() => handleOpen(b)}
            className="text-left"
          >
            Cancelar
          </Button>
        ))}
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Confirmación</ModalHeader>
              <ModalBody>
                <p>
                  Entendemos que las circunstancias pueden cambiar. Para proceder, ¿quiere confirmar la cancelación de su reserva?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={handleCancel}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={handleConfirm}>
                  Confirmar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
