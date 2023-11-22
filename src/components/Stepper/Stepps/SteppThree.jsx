import React, { useState } from "react";
import styles from "./Reservation_Final.css";
import Collaborators from "../../Collaborators";
import {toast} from 'sonner'
import Button from "../../Form/Button";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useSteppsState } from "../../../context/SteppsContext";
import { usePostCreateReservaMutation } from "../../../redux/services/reservaApi";
import {useRouter} from 'next/navigation'
import { update, reset } from "../../../redux/features/reservaSlice";

export default function SteppThree({ className = "" }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const reserva = useSelector((state) => state.reserva);
  const dispatch = useDispatch();
  const router = useRouter();
  const {id} = reserva?.reservaState?.value;
  const [postCreateReserva, { isLoading }] = usePostCreateReservaMutation();
  const onSubmit = handleSubmit(async () => {
    try {
      console.log({ ...reserva?.reservaState?.value, idCliente: id})
      const response = await postCreateReserva({ ...reserva?.reservaState?.value, idCliente: 1});
      if (response.error) console.log(response);
      if (response.data) {
        toast.success(response.data.message)
        router.push('/');
        dispatch(reset());
        onHandleNext();
      }
    } catch (error) {
      console.error(error);
    }
  });

  const { onHandleNext, step, onHandleBack } = useSteppsState();
  return (
    <form onSubmit={onSubmit} className={`${className}`}>
      <div className="border rounded-lg bg-white p-6">
        <div className="elegirMesero pt-4">
          <h2 className="text-[18px] font-bold pb-2 pl-8 pr-4 m-auto">
            "En nuestro restaurante, te damos el control. Elije a tu mesero o
            mesera favorito/a y disfruta de un servicio a medida."
          </h2>
          <div className="contenido flex flex-row">
            <div className="ladoIzquiero flex flex-row">
              <div className="colaboradores w-[300px] pt-4 pl-10">
                <Collaborators autoPlay={false} />
              </div>
            </div>
            <div className="ladoDerecho p-8 font-bold">
              <p>Nombre de mesero</p>
              <p className="pb-4 pt-2">Disponibilidad</p>
              <button className="text-[14px] m-auto text-center text-white font-semibold bg-red-600 rounded h-auto w-[100px] p-2 hover:bg-red-700">
                Elegir
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Button onClick={() => onHandleBack()} className="w-32">
          Anterior
        </Button>
        <Button type="submit" className="w-32">
          Siguiente
        </Button>
      </div>
    </form>
  );
}
