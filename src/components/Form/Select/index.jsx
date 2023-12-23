"use client"

import { Select as SelectUI, SelectItem } from "@nextui-org/react";

export default function Select({className="", name = "",options = {}, register = () => {}, data = [], ...props }) {
  return (
    <SelectUI
      variant="bordered"
      labelPlacement="outside"
      className={`py-2 ${className}`}
      radius="sm"
      size="md"
      classNames={{
        label: "top-[28px]",
      }}

      {...props}
      {...register(name, options)}
    >
      {data.map((option) => (
        <SelectItem key={option.key} value={option.value}>
          {option.value}
        </SelectItem>
      ))}
    </SelectUI>
  );
}
