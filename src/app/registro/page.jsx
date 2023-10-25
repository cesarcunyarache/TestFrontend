"use client";
import Container from "../../components/Layout/Container";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Link from "../../components/Link";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { usePostRegisterMutation } from "../../redux/services/userApi";
import { useRouter } from "next/navigation";
export default function Registro() {
  const { register, handleSubmit } = useForm();

  const router = useRouter();
  const [postRegister, { data, isLoading, isError, error }] =
    usePostRegisterMutation();

  const onSubmit = handleSubmit((data) => {
    postRegister(data);
  });

  if (isError) toast.error(error.data.message);

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
        <Button type="submit">Registar</Button>

        <div className="text-center my-5 text-sm">
          <p>
            ¿Ya tienes una cuenta? <Link redirect="/login">Iniciar Sesión</Link>
          </p>
        </div>
      </form>
    </Container>
  );
}
