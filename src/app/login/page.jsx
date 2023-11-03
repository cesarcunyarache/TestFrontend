"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import Container from "../../components/Layout/Container";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import Link from "../../components/Link";
import { useRouter } from "next/navigation";

import { usePostLoginMutation } from "../../redux/services/userApi";

export default function Page() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const [postLogin, { data, isLoading, isError, error }] =
    usePostLoginMutation();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await postLogin(data);
      if (response.error) console.log(response.error); /* toast.error(response.error.data.message) */; 
      if (response.data) console.log(response.data)
     
    } catch (error) {
      console.error(error);
    }
  });

  /*  if ( isError) console.log(error.data.message); */

  if (data) {
    if (data.id) {
      router.push("/");
    }
  }

  return (
    <Container>
      <form
        onSubmit={onSubmit}
        className="max-w-md p-4 mx-auto my-auto border rounded-lg"
      >
        <h1 className="text-center text-lg font-black my-2">Login</h1>

        <Input
          label="Correo"
          type="email"
          placeholder="Introduce tu correo electrónico"
          name="correo"
          isRequired
          register={register}
        />

        <Input
          label="Contraseña"
          type="password"
          placeholder="Introduce tu contraseña"
          name="contrasena"
          isRequired={true}
          register={register}
        />

        <div className="flex py-2  px-1 justify-between">
          <Checkbox
            classNames={{
              label: "text-small",
            }}
            className="col"
            color="default"
          >
            Recuérdame
          </Checkbox>
          <Link redirect="/forgetPassword">¿Olvidaste tu contraseña?</Link>
        </div>

        <Button type="submit" isLoading={isLoading}>
          Login
        </Button>

        <div className="text-center my-5 text-sm">
          <p>
            ¿Aún no tienes cuenta? <Link redirect="/registro">Registrate</Link>
          </p>
        </div>
      </form>
    </Container>
  );
}
