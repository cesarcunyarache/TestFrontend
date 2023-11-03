"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import Container from "../../components/Layout/Container";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Link from "../../components/Link";
import OtpInput from "react-otp-input";
import { Link as NextLink } from "@nextui-org/react";
import { toast } from "sonner";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button as Botton,
  useDisclosure,
} from "@nextui-org/react";

import {
  usePostRegisterMutation,
  usePostSendOTPMutation,
  usePostResendOTPMutation,
} from "../../redux/services/userApi";

export default function Registro() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState("blur");
  const [isModal, setIsModal] = useState(false);
  const [otp, setOtp] = useState("");

  const handleOpen = (backdrop) => {
    onOpen();
  };

  const { register, handleSubmit, watch, getValues } = useForm();
  const router = useRouter();

  const [postRegister, { data, isLoading, isError, error }] =
    usePostRegisterMutation();

  const [
    postSendOTP,
    {
      data: dataOTP,
      isLoading: isLoadingOTP,
      error: isErrorOTP,
      error: errorOTP,
    },
  ] = usePostSendOTPMutation();

  const [postResendOTP, { isLoading: isLoadingResend }] =
    usePostResendOTPMutation();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (isModal) {
        handleOpen();
      } else {
        const response = await postSendOTP(data);
        if (response.error) toast.error(response.error.data.message);
        if (response.data) {
          handleOpen();
          setIsModal(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  });

  const onSubmitModal = handleSubmit(async () => {
    try {
      if (otp.length < 4) {
        toast.error("Completa los campos");
      } else {
        const data = {
          ...getValues(),
          otp,
        };

        const response = await postRegister(data);
        if (response.error) toast.error(response.error.data.message);
        if (response.data) console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  });

  const handleResend = async () => {
    try {
        const response = await postResendOTP({ correo: watch("correo") });
        if (response.error) toast.error(response.error.data.message);
        if (response.data) toast.error (response.data.message);
      
    } catch (error) {
      console.error(error);
    }
  };

  if (data) {
    if (data.status === "ok") router.push("/");
  }

  return (
    <Container>
      <form
        onSubmit={onSubmit}
        method="post"
        className="max-w-md p-4 mx-auto my-auto border rounded-lg"
      >
        <h1 className="text-center text-lg font-black my-2">Registro</h1>
        <Input
          label="Nombres"
          placeholder=" "
          name="nombres"
          isRequired
          register={register}
        />
        <Input
          label="Apellidos"
          placeholder=" "
          name="apellidos"
          isRequired
          register={register}
        />
        <Input
          label="Email"
          type="email"
          placeholder=" "
          name="correo"
          isRequired
          register={register}
        />
        <Input
          label="Password"
          placeholder=" "
          type="password"
          name="contrasena"
          isRequired
          register={register}
        />
        <Input
          label="Confirm Password"
          placeholder=" "
          type="password"
          isRequired
          name="confirmContrasena"
          register={register}
        />
        <Button isLoading={isLoadingOTP} type="submit">
          Registar
        </Button>

        <div className="text-center my-5 text-sm">
          <p>
            ¿Ya tienes una cuenta? <Link redirect="/login">Iniciar Sesión</Link>
          </p>
        </div>
      </form>

      <Modal
        backdrop={backdrop}
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-center">
                <h1 className="font-bold">Verificar Correo</h1>
                <p className="mt-4 text-sm text-slate-500">
                  Se ha enviado una codigo a su correo electrónico ingresado
                  <span className="text-slate-950"> {watch("correo")}</span>
                </p>
              </ModalHeader>
              <ModalBody className="m-2 ">
                <form onSubmit={onSubmitModal}>
                  <div className="flex flex-col">
                    <div className="mx-auto max-w-md">
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        inputStyle={
                          "bg-white border-2 border-gray-300 text-gray-900 text-4xl rounded-lg text-center hover:border-slate-400 hover:border-2 focus:outline-none focus:border-slate-700 focus:ring-slate-700 m-2 h-12 w-20"
                        }
                        renderSeparator={<span></span>}
                        renderInput={(props) => <input {...props} />}
                      />
                    </div>

                    <div className="flex flex-row justify-center my-5 text-sm">
                      <p>
                        ¿No recibiste el código?{" "}
                        <NextLink
                          className="text-zinc-900 text-sm font-bold cursor-pointer"
                          underline="hover"
                          onClick={handleResend}
                        >
                          Reenviar
                        </NextLink>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row justify-end gap-2">
                    <Botton color="danger" variant="light" onPress={onClose}>
                      Cerrar
                    </Botton>
                    <Botton
                      type="submit"
                      isLoading={isLoading || isLoadingResend }
                      className="bg-neutral-900 text-white hover:bg-neutral-700"
                    >
                      {(!isLoading && !isLoadingResend) && 'Verficar'}
                    </Botton>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </Container>
  );
}
