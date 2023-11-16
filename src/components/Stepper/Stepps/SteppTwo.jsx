"use client";

import React, { useState, useEffect } from "react";
import styles from "./Reservation_Body.css";
import Button from "../../Form/Button";
import Mesas from "./Mesas";
import { useDispatch, useSelector } from "react-redux";
import Load from "../../Load";
import { Spinner } from "@nextui-org/react";

import { useSteppsState } from "../../../context/SteppsContext";
import {
  usePostReservaMesasMutation,
  useGetProfileQuery,
} from "../../../redux/services/reservaApi";

export default function SteppTwo({ className = "" }) {
  const [postReservaMesas, { isLoading }] = usePostReservaMesasMutation();

  const reserva = useSelector((state) => state.reserva);

  const { cantComensales, fecha, hora, nivel } = reserva?.reservaState?.value;

  const [data, setData] = useState([]);

  useEffect(() => {
    const listMesas = async () => {
      try {
        const fecha = reserva?.reservaState?.value?.fecha;
        const hora = reserva?.reservaState?.value?.hora;

        if (fecha && hora && fecha !== "" && hora !== "") {
          const response = await postReservaMesas({ fecha, hora });
          if (response.error) console.log(response);
          if (response.data) {
            setData(response?.data?.data);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    listMesas();
  }, [fecha, hora]);

  const [selectedNivel, setSelectedNivel] = useState("opcion1");

  const handleNivelChange = (event) => {
    setSelectedNivel(event.target.value);
  };

  const { onHandleNext, step, onHandleBack } = useSteppsState();

  if (isLoading) {
    return (
      <div>
        <div className="border rounded-lg bg-white p-6 h-[35rem] min-w-full flex justify-center items-center">
          <Spinner size="lg" color="default" />
        </div>
        <div className="flex justify-between">
          <Button onClick={() => onHandleBack()} className="w-32" isDisabled>
            Anterior
          </Button>
          <Button
            /* type="submit" */ onClick={() => onHandleNext()}
            className="w-32"
            isDisabled
          >
            Siguiente
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className={`${className}`}>
      <div className="border rounded-lg bg-white p-6  ">
        <div className="contenido">
          <h2 className="font-bold text-[18px] pb-2">Terraza Bravazo</h2>

          <div className="flex flex-row text-[14px] font-semibold">
            <p className="pr-4">Juan Villegas Flores</p>
            <p className="pr-4">
              Fecha: <span>{fecha}</span>
            </p>
            <p className="pr-4">
              Hora: <span>{hora}</span>
            </p>
            <p>
              {cantComensales} <span> Personas</span>
            </p>
          </div>
          <div className="pt-4 w-[500px]">
            <div className="border w-[100%]"></div>
          </div>
        </div>

        <div className="leyenda pt-4">
          <ul className="flex flex-row">
            <li className="pr-4">
              {" "}
              <span className="bg-gray-300 rounded text-gray-300">
                ....
              </span>{" "}
              Deshabilitado
            </li>
            <li className="pr-4">
              {" "}
              <span className="bg-gray-500 rounded text-gray-500">
                ....
              </span>{" "}
              Reservado
            </li>
            <li className="pr-4">
              {" "}
              <span className="bg-black rounded text-black">....</span>{" "}
              Disponible
            </li>
            <li className="pr-4">
              {" "}
              <span className="bg-red-600 rounded text-red-600">....</span>{" "}
              Seleccionado
            </li>
          </ul>
        </div>

        <div className="niveles">
          {nivel == "1" ? (
            <div className="imagenUno relative">
              <img
                className=""
                src="https://freepass.es/storage/seatschart/August2023/1691687721290.png"
                alt="Segundo nivel"
              />
              <div className="">
                {!isLoading &&
                  data.map((mesa) => {
                    if (mesa.nivel == "S") {
                      return (
                        <Mesas
                          data={mesa}
                        />
                      );
                    }
                  })}
              </div>
            </div>
          ) : (
            <div className="imagenUno relative">
              <img
                className=""
                src="https://freepass.es/storage/seatschart/November2023/1699428797713.png"
                alt="Tercer nivel"
              />

              <div className="">
                {!isLoading &&
                  data.map((mesa) => {
                    if (mesa.nivel == "Terraza") {
                      return <Mesas data={mesa} />;
                    }
                  })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <Button onClick={() => onHandleBack()} className="w-32">
          Anterior
        </Button>
        <Button
          /* type="submit" */ onClick={() => onHandleNext()}
          className="w-32"
        >
          Siguiente
        </Button>
      </div>
    </form>
  );
}
