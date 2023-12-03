import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import Input from "../../Form/Input";
import { Textarea } from '@nextui-org/react';
import Select from "../../Form/Select";
import Button from "../../Form/Button";

export default function index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('blur')

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }



  return (
    <>
      <div className="">
        {backdrops.map((b) => (
          <Button
            key={b}
            variant=""
            onPress={() => handleOpen(b)}
            className="text-left text-black bg-white px-2 py-1 rounded font-semibold"
          >
            Libro de Reclamaciones
          </Button>
        ))}
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="">Libro de Reclamaciones</ModalHeader>
              <ModalBody>
                <form className="" action="">
                  <Input
                    label="Nombres"
                    placeholder=" "
                    name="nombres"
                    isRequired
                    onKeyDown={(e) => {
                      if (
                        e.keyCode !== 32 &&
                        e.keyCode !== 8 &&
                        (e.keyCode < 65 || e.keyCode > 90)
                      ) {
                        e.preventDefault();
                      }
                    }}
                  />
                  <Input
                    label="Apellidos"
                    placeholder=" "
                    name="apellidos"
                    isRequired
                    onKeyDown={(e) => {
                      if (
                        e.keyCode !== 32 &&
                        e.keyCode !== 8 &&
                        (e.keyCode < 65 || e.keyCode > 90)
                      ) {
                        e.preventDefault();
                      }
                    }}
                  />

                  <Input
                    label="Correo"
                    type="email"
                    placeholder=" "
                    name="correo"
                    isRequired
                  />

                  <Select
                    placeholder="Seleccione el nivel"
                    label="Motivo"
                    name="motivo"
                    data={[
                      { key: "1", value: "Incidencias" },
                      { key: "2", value: "Recomendaciones" },
                      { key: "3", value: "Reservas corporativas" },
                      { key: "4", value: "Otros motivos" },
                    ]}
                    defaultSelectedKeys="1"
                    options={{
                      validate: (value) => {
                        if (value === "" || value === undefined) {
                          return "Este campo es requerido";
                        }
                      },
                    }}
                    isRequired
                  />

                  <Textarea
                    label="Mensaje"
                    placeholder=" "
                    name="mensaje"
                    isRequired
                    onKeyDown={(e) => {
                      if (
                        e.keyCode !== 32 &&
                        e.keyCode !== 8 &&
                        (e.keyCode < 65 || e.keyCode > 90)
                      ) {
                        e.preventDefault();
                      }
                    }}
                  />

                  <Button type="submit" className="">
                    Enviar
                  </Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
