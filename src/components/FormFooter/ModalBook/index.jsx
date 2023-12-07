import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import Input from "../../Form/Input";
//import Select from "../../Form/Select";
import { Textarea } from '@nextui-org/react';
import { Select, SelectItem } from "@nextui-org/react";
import { toast } from "sonner";
import Button from "../../Form/Button";
import { useForm } from "react-hook-form";
import { usePostContactMutation, } from "../../../redux/services/userApi";

export default function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('blur')

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }

  const validateDocument = {
    1: {
      length: 8,
      minLength: 8,
      lengthMessage: "Este campo debe tener 8 caracteres",
      pattern: /^[0-9]*$/,
      message: "Este campo debe contener solo números",
    },
    2: {
      length: 12,
      minLength: 0,
      lengthMessage: "Este campo debe tener maximo 12 caracteres",
      pattern: /^[A-Za-z0-9]*$/,
      message: "Este campo debe contener solo caracteres alfanuméricos",
    },
    3: {
      length: 12,
      lengthMessage: "Este campo debe tener maximo 12 caracteres",
      pattern: /^[A-Za-z0-9]*$/,
      message: "Este campo debe contener solo caracteres alfanuméricos",
    },
    4: {
      length: 11,
      minLength: 11,
      pattern: /^[0-9]*$/,
      lengthMessage: "Este campo debe tener 11 caracteres",
      message: "Este campo debe contener solo números",
    },
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setFieldValue,
    formState: { errors },
  } = useForm();

  const [PostContact, { data, isLoading }] =
    usePostContactMutation();


  const onSubmit = handleSubmit(async (data) => {
    try {

      let motivo = null;
      let tipoDocument = null;
      // Organizar los datos del formulario en un objeto
      if (data.motivo == 1) {
        motivo = "Queja"
      } else {
        motivo = "Reclamo"
      }

      if (data.idTipoDoc == 1) {
        tipoDocument = "DNI";
      } else if (data.idTipoDoc == 2) {
        tipoDocument = "Carnet de Extranjería";
      } else if (data.tipoDocument == 3) {
        tipoDocument = "Pasaporte";
      } else {
        tipoDocument = "RUC"
      }

      const formData = {
        cabecera: "Formulario Libro de Reclamaciones",
        info: "Hola, deseo dar a conocer lo siguiente: ",
        nombres: data.nombres,
        apellidos: data.apellidos,
        tipoDoc: tipoDocument,
        documento: data.documento,
        telefono: data.telefono,
        correo: data.correo,
        fecha: data.fecha,
        motivo: motivo,
        mensaje: data.mensaje,
      };

      const response = await PostContact(formData);
      if (response.error) toast.error(response.error.data.message);
      if (response.data) {
        toast.success(response.data.message);
        onClose();
      }

      // Resto del código...
    } catch (error) {
      console.error(error);
    }
  });


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
            Libro de reclamaciones
          </Button>
        ))}
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent className="w-auto">
          {(onClose) => (
            <>
              <ModalHeader className="">Libro de reclamaciones</ModalHeader>
              <ModalBody>
                <form onSubmit={onSubmit} className="">
                  <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <Input
                        label="Nombres"
                        placeholder=" "
                        name="nombres"
                        defaultValue=""
                        onKeyDown={(e) => {
                          if (
                            e.keyCode !== 32 &&
                            e.keyCode !== 8 &&
                            (e.keyCode < 65 || e.keyCode > 90)
                          ) {
                            e.preventDefault();
                          }
                        }}
                        register={register}
                        options={{
                          required: {
                            value: true,
                            message: "Este campo es requerido",
                          },
                        }}
                        color={errors.nombres && "danger"}
                        isInvalid={errors.nombres ? true : false}
                        errorMessage={errors.nombres && errors.nombres.message}
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <Input
                        label="Apellidos"
                        placeholder=" "
                        name="apellidos"
                        defaultValue=""
                        onKeyDown={(e) => {
                          if (
                            e.keyCode !== 32 &&
                            e.keyCode !== 8 &&
                            (e.keyCode < 65 || e.keyCode > 90)
                          ) {
                            e.preventDefault();
                          }
                        }}
                        register={register}
                        options={{
                          required: {
                            value: true,
                            message: "Este campo es requerido",
                          },
                        }}
                        color={errors.apellidos && "danger"}
                        isInvalid={errors.apellidos ? true : false}
                        errorMessage={errors.apellidos && errors.apellidos.message}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <Select
                        variant="bordered"
                        labelPlacement="outside"
                        placeholder="Seleccione el tipo de documento"
                        label="Tipo de Documento"
                        className="top-0 py-2"
                        classNames={{
                          label: "top-[28px]",
                        }}
                        radius="sm"
                        size="md"
                        color={errors.idTipoDoc && "danger"}
                        isInvalid={errors.idTipoDoc ? true : false}
                        errorMessage={errors.idTipoDoc && errors.idTipoDoc.message}
                        onSelectionChange={() => setValue("idTipoDoc", "")}
                        {...register("idTipoDoc", {
                          validate: (value) => {
                            if (value === "") {
                              return "Este campo es requerido";
                            }
                          },
                        })}
                      >
                        <SelectItem key={1} value="DNI">
                          DNI
                        </SelectItem>
                        <SelectItem key={2} value="Carnet de Extranjería">
                          Carnet de Extranjería
                        </SelectItem>
                        <SelectItem key={3} value="Pasaporte">
                          Pasaporte
                        </SelectItem>
                        <SelectItem key={4} value="RUC">
                          RUC
                        </SelectItem>
                      </Select>
                    </div>

                    <div className="sm:col-span-3">
                      <Input
                        label="Número de Documento"
                        placeholder=" "
                        name="documento"
                        defaultValue=""
                        /* isDisabled={watch("idTipoDoc") === undefined ? true : false} */
                        register={register}
                        maxLength={validateDocument[watch("idTipoDoc")]?.length}
                        options={{
                          required: {
                            value: true,
                            message: "Este campo es requerido",
                          },
                          pattern: {
                            value: validateDocument[watch("idTipoDoc")]?.pattern,
                            message: validateDocument[watch("idTipoDoc")]?.message,
                          },
                          maxLength: {
                            value: validateDocument[watch("idTipoDoc")]?.length,
                            message: validateDocument[watch("idTipoDoc")]?.lengthMessage,
                          },
                          minLength: {
                            value: validateDocument[watch("idTipoDoc")]?.minLength,
                            message: validateDocument[watch("idTipoDoc")]?.lengthMessage,
                          },
                        }}
                        color={errors.documento && "danger"}
                        isInvalid={errors.documento ? true : false}
                        errorMessage={errors.documento && errors.documento.message}

                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <Input
                        label="Telefono"
                        type="text"
                        placeholder=" "
                        name="telefono"
                        defaultValue=""
                        onKeyDown={(e) => {
                          if (
                            e.keyCode !== 8 &&
                            e.keyCode !== 32 &&
                            (e.keyCode < 48 || e.keyCode > 57 || e.keyCode === 229)
                          ) {
                            e.preventDefault();
                          }
                        }}
                        register={register}
                        options={{
                          required: {
                            value: true,
                            message: "Este campo es requerido",
                          },
                          valueAsNumber: {
                            value: true,
                            message: "Este campo debe ser numerico",
                          },
                        }}
                        color={errors.telefono && "danger"}
                        isInvalid={errors.telefono ? true : false}
                        errorMessage={errors.telefono && errors.telefono.message}
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <Input
                        label="Correo"
                        type="email"
                        placeholder=" "
                        name="correo"
                        register={register}
                        options={{
                          required: {
                            value: true,
                            message: "Este campo es requerido",
                          },
                        }}
                        color={errors.correo && "danger"}
                        isInvalid={errors.correo ? true : false}
                        errorMessage={errors.correo && errors.correo.message}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <Input
                        label="Fecha del Suceso"
                        type="date"
                        placeholder=" "
                        name="fecha"
                        register={register}
                        options={{
                          required: {
                            value: true,
                            message: "Este campo es requerido",
                          },
                        }}
                        color={errors.fecha && "danger"}
                        isInvalid={errors.fecha ? true : false}
                        errorMessage={errors.fecha && errors.fecha.message}
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <Select
                        variant="bordered"
                        labelPlacement="outside"
                        placeholder="Seleccione el motivo"
                        label="Motivo"
                        className="top-0 py-2"
                        classNames={{
                          label: "top-[28px]",
                        }}
                        radius="sm"
                        size="md"
                        color={errors.motivo && "danger"}
                        isInvalid={errors.motivo ? true : false}
                        errorMessage={errors.motivo && errors.motivo.message}
                        {...register("motivo", {
                          validate: (value) => {
                            if (value === "") {
                              return "Este campo es requerido";
                            }
                          },
                        })}
                      >
                        <SelectItem key={1} value="Queja">
                          Queja
                        </SelectItem>
                        <SelectItem key={2} value="Reclamo">
                          Reclamo
                        </SelectItem>
                      </Select>
                    </div>
                  </div>

                  <Textarea
                    className="py-2"
                    variant="bordered"
                    radius="sm"
                    size="md"
                    defaultValue=""
                    labelPlacement="outside"
                    label="Mensaje"
                    name="mensaje"
                    color={errors.mensaje && "danger"}
                    isInvalid={errors.mensaje ? true : false}
                    errorMessage={errors.mensaje && errors.mensaje.message}
                    {...register("mensaje", {
                      validate: (value) => {
                        if (value === "") {
                          return "Este campo es requerido";
                        }
                      },
                    })}
                  />
                  <Button type="submit" isLoading={isLoading}>
                    Enviar
                  </Button>
                </form>

              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal >
    </>
  );
}
