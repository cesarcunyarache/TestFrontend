"use client";
import Container from "../../components/Layout/Container";

import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { useForm } from "react-hook-form";
import { usePostForgetPasswordMutation } from "../../redux/services/userApi";

import { toast } from "sonner";

export default function Page() {
  const { register, handleSubmit } = useForm();

  const [postForgetPassword, { data, isLoading }] =
    usePostForgetPasswordMutation();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await postForgetPassword(data);
      if (response.error) toast.error(response.error.data.message);
      if (response.data) toast.success(response.data.message);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Container>
      <form
        onSubmit={onSubmit}
        method="post"
        className="max-w-md p-4 mx-auto my-auto border rounded-lg"
      >
        <h1 className="text-center text-lg font-black my-2">
          Ingresa tu correo
        </h1>
        <Input
          autoFocus
          label="Correo"
          type="email"
          placeholder="Introduce tu correo electrónico"
          isRequired
          name="correo"
          register={register}
        />
        <Button type="submit" isLoading={isLoading}>Enviar</Button>
      </form>
    </Container>
  );
}
