import React from "react";
import { Input, Checkbox, Link } from "@nextui-org/react";
export default function Form({ children }) {
  return (
    <form>
      <Input
        autoFocus
        label="Email"
        placeholder="Enter your email"
        variant="bordered"
      />
      <Input

        label="Password"
        placeholder="Enter your password"
        type="password"
        variant="bordered"
      />
      <div className="flex py-2 px-1 justify-between">
        <Checkbox
          classNames={{
            label: "text-small",
          }}
        >
          Remember me
        </Checkbox>
        <Link color="primary" href="#" size="sm">
          Forgot password?
        </Link>
      </div>
    </form>
  );
}
