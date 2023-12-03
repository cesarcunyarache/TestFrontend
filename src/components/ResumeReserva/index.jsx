"use client";
import { useState, useEffect, useRef } from "react";

import { Divider } from "@nextui-org/react";
import QRcode from "qrcode.react";
import { useDispatch, useSelector } from "react-redux";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function formatearFecha(fechaStr) {
  const fecha = new Date(fechaStr);
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear();

  const diaStr = dia < 10 ? `0${dia}` : dia;
  const mesStr = mes < 10 ? `0${mes}` : mes;

  return `${diaStr}/${mesStr}/${año}`;
}

export default function index({ payload = "" }) {

  const reserva = useSelector((state) => state.reserva);
  const { nombres, apellidos, fecha, hora, cantComensales, mesas, qr } =
    reserva?.reservaState?.value;
  /*  const [qr, setQr,] = useState(payload); */



  return (
    <div className="p-8 ">
      <div className="p-2 w-36 mx-auto">
        <img src="bravazo.png" alt="Terraza Bravazo" />
      </div>
      <Divider className="my-4" />

      {qr && (
        <>
          <div className="my-4">
            <div className="flex justify-center items-center gap-2 flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
              <p>
                <span className="font-bold">Importante: </span>
                Recuerda que el tiempo de tolerancia de la reserva es de 15
                minutos
              </p>
            </div>
            <h1 className="text-center font-extrabold text-4xl mt-4">
              Reserva
            </h1>
            <div className="flex justify-center items-center">
              {qr && (
                <QRcode
                  id="myqr"
                  value={qr}
                  size={320}
                  includeMargin={true}
                  className="border mt-4 border-dashed border-gray-300"
                />
              )}
            </div>
          </div>

          <Divider className="my-4" />
        </>
      )}

      {qr && (
        <>
          <div className="text-red-500 flex justify-center items-center gap-2">
            <div className="w-12 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                />
              </svg>
            </div>

            <div className="w-full h-12">
              <p className="ml-2">
                Muestra el código QR desde tu celular para validar la
                informaciónd de tu reserva. No necesitas imprimir este documento
              </p>
            </div>
          </div>

          <Divider className="my-4" />
        </>
      )}
      <div className="flex justify-center items-center flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <h2 className="my-2">
          Cliente:{" "}
          <span className="font-bold">
            {nombres} {apellidos}
          </span>
        </h2>
      </div>
      <Divider className="my-4" />
      <div className="">
        <h3 className="font-bold text-center text-xl">
          Información de Reserva
        </h3>
        <div className="my-6">
          <ul className="flex gap-10 justify-center items-center">
            <li>
              Cant. Comensales:{" "}
              <span className="font-bold">{cantComensales}</span>
            </li>

            <li>
              Fecha: <span className="font-bold">{(fecha)}</span>{" "}
            </li>

            <li>
              Hora: <span className="font-bold">{hora} PM</span>
            </li>
          </ul>
        </div>

        <div className="flex  flex-col justify-center items-center w-full">
          <h3 className="font-bold text-center mt-2">Detalle de Mesas</h3>
          <div class="relative overflow-x-auto max-w-7xl mt-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Codigo de Mesa
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Capacidad
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Nivel
                  </th>
                </tr>
              </thead>
              <tbody>
                {mesas.map((mesa) => {
                  return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="px-6 py-4">{mesa.codigo}</td>
                      <td class="px-6 py-4">{mesa.capacidad}</td>
                      <td class="px-6 py-4">{mesa.nivel}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Divider className="my-4" />

      <div></div>
    </div>
  );
}
