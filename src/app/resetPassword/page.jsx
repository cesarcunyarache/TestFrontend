"use client";

import Container from "../../components/Layout/Container";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import {usePutResetPasswordMutation} from '../../redux/services/userApi'

export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { register, handleSubmit } = useForm();

  const [putResetPassword, { data, isLoading }] =
    usePutResetPasswordMutation();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const token = searchParams.get('token')
      const response = await putResetPassword({
        ...data,
        token
      });
      if (response.error) toast.error(response.error.data.message);
      if (response.data) toast.success(response.data.message);

    } catch (error) {
      console.error(error);
    }
  });

  if (data) {
    if (data.status === "ok") router.push("/login");
  }

  return (
    <Container>
      <form
        onSubmit={onSubmit}
        method="post"
        className="max-w-md p-4 mx-auto my-auto border rounded-lg"
      >
        <h1 className="text-center text-lg font-black my-2">
          Restablecer Contraseña
        </h1>
        <Input
          label="Nueva Contraseña"
          placeholder=" "
          type="password"
          isRequired
          name="contrasena"
          register={register}
        />
        <Input
          label="Confirmar Contraseña"
          placeholder=" "
          type="password"
          isRequired
          name="confirmContrasena"
          register={register}
        />
        <Button type="submit" isLoading={isLoading}>Restablecer</Button>
      </form>
    </Container>
  );
}
