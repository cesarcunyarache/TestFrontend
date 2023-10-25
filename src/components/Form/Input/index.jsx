"use cliente";
import { Input } from "@nextui-org/react";
export default function index({name = "", register = () => {},  options = {}, ...props }) {
  return (
    <Input
      className="py-2"
      variant="bordered"
      radius="sm"
      size="md"
      labelPlacement="outside"
      {...props}
      {...register(name, options)}
    />
  );
}
