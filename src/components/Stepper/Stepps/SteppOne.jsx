"use client";

import React, { useState } from "react";
import styles from "./Reservation_Head.css";
import Input from "../../Form/Input";

import { SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Button from "../../Form/Button";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../../redux/features/userSlice"
import Select from '../../Form/Select'

import { useSteppsState } from "../../../context/SteppsContext";

export default function SteppOne({ className = "" }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const handleNivelChange = (event) => {
    setSelectedNivel(event.target.value);
  };
  const reserva = useSelector((state) => state.reserva);


  const {cantComensales, fecha, hora, nivel, comentario} = reserva?.reservaState?.value;
  const { onHandleNext, step } = useSteppsState();

  const onSubmit = handleSubmit(async (data) => {
    dispatch(update(data));
   console.log(data); 
   /*  console.log(reserva); */
    onHandleNext();
  });

  return (
    <form onSubmit={onSubmit} className={`${className}`}>
      <div className="border rounded-lg bg-white p-6">
        <h2 className="font-bold text-[18px]">DATOS DE RESERVA</h2>
        <p className="pt-2 pb-2 font-normal text-[14px]">
          Complete los siguientes datos para realizar su reserva
        </p>

        <Input
          label="Cantidad de Comensales"
          placeholder="Ingrese la cantidad de comensales"
          type="number"
          name="cantComensales"
          register={register}
          defaultValue={cantComensales}
          options={{
            required: {
              value: true,
              message: "Este campo es requerido",
            },
          }}
          color={errors.cantComensales && "danger"}
          isInvalid={errors.cantComensales ? true : false}
          errorMessage={errors.cantComensales && errors.cantComensales.message}
        />

        <Input
          label="Fecha"
          placeholder="Ingrese la fecha"
          type="date"
          name="fecha"
          defaultValue={fecha}
          register={register}
          options={{
            required: {
              value: true,
              message: "Este campo es requerido",
            },
          }}
          color={errors.fecha && "danger"}
          isInvalid={errors.fecha ? true : false}
          errorMessage={errors.fecha && errors.fecha.message}
        />

        <Input
          label="Hora"
          placeholder="Ingrese la hora"
          type="time"
          name="hora"
          step="1h"
          min={8}
          max={20}
          register={register}
          defaultValue={hora}
          options={{
            required: {
              value: true,
              message: "Este campo es requerido",
            },
          }}
          color={errors.hora && "danger"}
          isInvalid={errors.hora ? true : false}
          errorMessage={errors.hora && errors.hora.message}
        />

     

        <Select
              placeholder="Seleccione el nivel"
              label="Nivel"
              name="nivel"
              data={[
                { key: "1", value: "Segundo nivel" },
                { key: "2", value: "Tercer nivel" },
              ]}
              defaultSelectedKeys={[nivel]}
              register={register}
              options={{
                validate: (value) => {
                  if (value === "") {
                    return "Este campo es requerido";
                  }
                },
              }}
              color={errors.nivel && "danger"}
              isInvalid={errors.nivel ? true : false}
              errorMessage={errors.nivel && errors.nivel.message}
             
            ></Select>

        <Textarea
          className="py-2"
          variant="bordered"
          radius="sm"
          size="md"
          defaultValue={comentario}
          labelPlacement="outside"
          label="Comentario"
          placeholder="Ingrese un comentario (opcional)"
          name="comentario"
          {...register("comentario")}
          
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" className="w-32">
          Siguiente
        </Button>
      </div>
    </form>
  );
}
