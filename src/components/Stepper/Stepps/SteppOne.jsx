"use client";

import React, { useState, useEffect } from "react";
import styles from "./Reservation_Head.css";
import Input from "../../Form/Input";

import { SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Button from "../../Form/Button";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../../redux/features/reservaSlice";
import Select from "../../Form/Select";

import { useSteppsState } from "../../../context/SteppsContext";

const generarHoras = (fecha) => {
  const horas = [];
  const inicio = 12 * 60;
  const fin = 23 * 60;
  const ahora = new Date();
  const fechaIngresada = new Date(fecha);

  const year = ahora.getFullYear();
  const month = String(ahora.getMonth() + 1).padStart(2, "0");
  const day = String(ahora.getDate()).padStart(2, "0");

  const fechaFormateada = `${year}-${month}-${day}`;
  const fechaNueva = new Date(fechaFormateada);

  const horaActual = ahora.getHours() * 60 + ahora.getMinutes();

  for (let tiempo = inicio; tiempo < fin; tiempo += 30) {
    const horasDelDia = Math.floor(tiempo / 60);
    const minutos = tiempo % 60;

    {/*const formato12Horas = `${horasDelDia % 12 || 12}:${minutos
      .toString()
    .padStart(2, "0")}`;*/}


    const formato12Horas = `${(horasDelDia % 12 || 12).toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}`;



    const horaGenerada = horasDelDia * 60 + minutos;

    const periodo = horasDelDia < 12 ? "AM" : "PM";

    if (fechaIngresada.getTime() === fechaNueva.getTime()) {
      if (
        horaGenerada >=
        horaActual + 30 /* esot puede quitarse y rango de 30 min*/
      ) {
        horas.push({
          key: formato12Horas,
          value: `${formato12Horas} ${periodo}`,
        });
      }
    } else if (fechaIngresada.getTime() > fechaNueva.getTime()) {
      horas.push({
        key: formato12Horas,
        value: `${formato12Horas} ${periodo}`,
      });
    } else {
      break;
    }
  }

  return horas;
};

export default function SteppOne({ className = "" }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const dispatch = useDispatch();
  const handleNivelChange = (event) => {
    setSelectedNivel(event.target.value);
  };

  const reserva = useSelector((state) => state.reserva);

  const [load, setLoad] = useState(true);

  const { cantComensales, fecha, hora, nivel, comentario } =
    reserva?.reservaState?.value;
  const { onHandleNext, step } = useSteppsState();

  const [horas, setHoras] = useState(generarHoras(fecha));

  useEffect(() => {
    setHoras(generarHoras(watch("fecha")));
    /* setValue("hora", '') */
    if (load) {
      console.log(watch("hora"));
      /*  setValue("hora", horas[0].key.toString());
       setLoad(false); */
    } else {
      console.log("hola 2");
    }
  }, [watch("fecha")]);

  const onSubmit = handleSubmit(async (data) => {
    dispatch(update({ ...data, cantidad: parseInt(watch("cantComensales")) }));
    console.log(data);
    /*  console.log(reserva); */

    onHandleNext();
  });

  return (
    <form onSubmit={onSubmit} className={`${className}`} noValidate>
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
            validate: (value) => {
              if (value > 20) {
                return "La cantidad de comensales debe ser menor de o igual a 20";
              }
              if (value < 1) {
                return "La cantidad de comensales debe ser mayor de o igual a 1";
              }
            },
          }}
          min="1"
          max="20"
          color={errors.cantComensales && "danger"}
          isInvalid={errors.cantComensales ? true : false}
          errorMessage={errors.cantComensales && errors.cantComensales.message}
          isRequired
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
            validate: (value) => {
              const ahora = new Date();
              const fechaIngresada = new Date(value);

              const year = ahora.getFullYear();
              const month = String(ahora.getMonth() + 1).padStart(2, "0");
              const day = String(ahora.getDate()).padStart(2, "0");

              const fechaFormateada = `${year}-${month}-${day}`;
              const fechaNueva = new Date(fechaFormateada);

              return (
                fechaIngresada.getTime() >= fechaNueva.getTime() ||
                "La fecha debe ser igual o posterior a la fecha actual"
              );
            },
          }}
          color={errors.fecha && "danger"}
          isInvalid={errors.fecha ? true : false}
          errorMessage={errors.fecha && errors.fecha.message}
          isRequired

        />

        <Select
          placeholder="Seleccione la hora"
          label="Hora"
          name="hora"
          data={horas /* generarHoras(watch("fecha")) */}
          defaultSelectedKeys={[hora]}
          register={register}
          isDisabled={horas.length === 0}
          options={{
            validate: (value) => {
              console.log(watch("hora"));
              if (value === "") {
                return "Este campo es requerido";
              }
            },
          }}
          color={errors.hora && "danger"}
          isInvalid={errors.hora ? true : false}
          errorMessage={errors.hora && errors.hora.message}

          isRequired
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
              if (value === "" || value === undefined) {
                return "Este campo es requerido";
              }
            },
          }}
          color={errors.nivel && "danger"}
          isInvalid={errors.nivel ? true : false}
          errorMessage={errors.nivel && errors.nivel.message}
          onSelectionChange={(value) => {
            dispatch(update({ nivel: value.currentKey }));
          }}
          isRequired
        />

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
