"use client";

import React from "react";
import { Spinner } from "@nextui-org/react";
export default function Load() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
        <Spinner size="lg"/>
    </div>
  );
}
