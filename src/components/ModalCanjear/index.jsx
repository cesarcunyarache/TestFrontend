import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { usePutUpdatePuntosMutation } from "../../redux/services/reservaApi"
import { useGetPuntosByIdUserQuery } from "../../redux/services/reservaApi";
import { useGetProfileQuery } from '../../redux/services/userApi'
import { toast } from "sonner";

const ModalCanjear = ({ idProducto, puntosCosto, puntosDisponible, fecha }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('blur')

  const idProductoEntero = parseInt(idProducto, 10);
  const puntosCostoEntero = parseInt(puntosCosto, 10);
  const puntosDisponibleEntero = parseInt(puntosDisponible, 10);

  const { data: profile, isLoading: isLoadingProfile } = useGetProfileQuery();
  const idUser = profile?.data?.id;
  const { data: puntos, isLoading: isLoadingPuntos } = useGetPuntosByIdUserQuery(idUser);

  const [putUpdatePuntos, { isLoading: isLoadingUpdate }] =
    usePutUpdatePuntosMutation();

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }

  const handleCancel = () => {

    onClose();
  }

  const handleConfirm = async () => {
    if (!isNaN(puntosDisponibleEntero)) {
      try {
        const response = await putUpdatePuntos({
          idProducto: idProductoEntero,
          idCliente: puntos?.data?.idCliente,
          idUsuario: idUser,
          puntosCliente: puntosDisponibleEntero,
          puntosProducto: puntosCostoEntero,
          fecha: fecha,
        });

        if (response?.data) {
          toast.success("Puntos canjeados correctamente");
          onClose();
        }
      } catch (error) {
        console.error("Error al confirmar el canje:", error);
        toast.error("Hubo un error, inténtelo más tarde");
      }
    } else {
      toast.error("Hubo un error, inténtelo más tarde");
      onClose();
    }
  };



  return (
    <>
      <div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <Button
            key={b}
            onPress={() => handleOpen(b)}
            className="text-left text-white font-semibold bg-red-600"
          >
            Canjear
          </Button>
        ))}
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Confirmar canje</ModalHeader>
              <ModalBody>
                <p>
                  {"¡Tu elección está a punto de ser realidad! ¿Quieres canjear tus puntos por el producto seleccionado?"}
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
export default ModalCanjear;