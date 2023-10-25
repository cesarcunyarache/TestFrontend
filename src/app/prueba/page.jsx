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
import { useGetVerifyQuery } from '../../redux/services/userApi'
export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const {data, isLoading} = useGetVerifyQuery();
  console.log(data)

  const [isVal, setIsVal] = useState(true);

  if (errors.contrasena?.type === "max") toast.error("min");

  return (
    <Container>
      <form
        onSubmit={onSubmit}
        className="max-w-md p-4 mx-auto my-auto border rounded-lg"
      >
        <h1 className="text-center text-lg font-black my-2">Prueba</h1>

        <Input
          label="Correo"
          placeholder="Introduce tu correo"
          name="correo"
          register={register}
          options={{
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Formato de correo invalido",
            },
          }}
          color={errors.correo && "danger"}
          isInvalid={errors.correo ? true : false}
          errorMessage={errors.correo && errors.correo.message}
        />

        <Input
          label="Contraseña"
          placeholder="Introduce tu contraseña"
          name="contrasena"
          isRequired
          register={register}
          options={{
            required: {
              value: true,
              message: "Contraseña es requerido",
            },
            minLength: {
              value: 6,
              message: "Al menos debe tener 6 caracteres"
            }
          }}
          color={errors.contrasena && "danger"}
          isInvalid={errors.contrasena ? true : false}
          errorMessage={errors.contrasena && errors.contrasena.message}
          validationMessage={errors.contrasena && errors.contrasena.message}
          noValidate
        />

        <Button type="submit">Login</Button>

        <div className="text-center my-5 text-sm">
          <p>
            ¿Aún no tienes cuenta? <Link redirect="/registro">Registrate</Link>
          </p>
        </div>
      </form>
    </Container>
  );
}
