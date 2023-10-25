"use client"

import Container from "../../components/Layout/Container";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";

export default function page() {
  return (
    <Container>
      <form
        onSubmit={() => alert("enviando")}
        method="post"
        className="max-w-md p-4 mx-auto my-auto border rounded-lg"
      >
        <h1 className="text-center text-lg font-black my-2">Resetear Contraseña</h1>
        <Input label="Password" placeholder=" " type="password" isRequired />
        <Input
          label="Confirm Password"
          placeholder=" "
          type="password"
          isRequired
        />
        <Button type="submit">Restablecer</Button>
      </form>
    </Container>
  );
}
