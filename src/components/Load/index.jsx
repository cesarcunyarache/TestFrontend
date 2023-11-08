"use client";

import React from "react";
import { Spinner } from "@nextui-org/react";
export default function Load() {
  return (
    <div className="flex h-[92vh] justify-center items-center">
        <Spinner size="lg" color="default"/>
    </div>
  );
}
