// ModalClock.jsx
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Link from "../Link";
import { useRouter } from "next/navigation";
export default function ModalClock({ valor }) {
    const router = useRouter();
    const [backdrop, setBackdrop] = React.useState('blur')

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleConfirm = () => {
        onClose()
        router.push("/")
        //{ () => router.push("/") }
    }

    // Cuando la prop `valor` cambia, abre o cierra el modal
    React.useEffect(() => {
        if (valor.valor) {
            onOpen();
        } else {
            onClose();
        }
    }, [valor]);

    return (
        <div className="flex flex-wrap gap-3">
            <Modal backdrop={backdrop} isOpen={isOpen} onClose={handleConfirm}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Expiración del tiempo de reserva</ModalHeader>
                            <ModalBody>
                                <p>
                                    No pudimos guardar tu reserva por más tiempo.
                                    Para continuar por favor empieza de nuevo.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="primary"
                                    onPress={handleConfirm}
                                >
                                    Aceptar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
