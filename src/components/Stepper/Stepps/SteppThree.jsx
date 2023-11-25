import { useState, useEffect } from "react";

import Collaborators from "../../Collaborators";
import { toast } from "sonner";
import Button from "../../Form/Button";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useSteppsState } from "../../../context/SteppsContext";
import {
  usePostMeseroForReservaMutation,
  usePostCreateReservaMutation,
} from "../../../redux/services/reservaApi";
import { useRouter } from "next/navigation";
import { update, reset } from "../../../redux/features/reservaSlice";
import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";
import { CheckIcon } from "./CheckIcon.jsx";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const checkbox = tv({
  slots: {
    base: "border-default hover:bg-default-200 text-white",
    content: "text-default-500",
  },
  variants: {
    isSelected: {
      true: {
        base: " bg-gray-800 hover:bg-gray-700 hover:border-gray-500 ",
        content: "text-primary-foreground pl-1",
      },
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background text-primary-foreground",
      },
    },
  },
});

export default function SteppThree({ className = "" }) {
  const {
    children,
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    defaultSelected: true,
  });

  const styles = checkbox({ isSelected, isFocusVisible });

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
  const { id, fecha, hora } = reserva?.reservaState?.value;
  const [postCreateReserva, { isLoading }] = usePostCreateReservaMutation();

  const [postMeseroReserva, {data, isLoading: isLoadingMeseros }] =
    usePostMeseroForReservaMutation();
  const onSubmit = handleSubmit(async () => {
    try {
      console.log({ ...reserva?.reservaState?.value, idCliente: id });
      const response = await postCreateReserva({
        ...reserva?.reservaState?.value,
        idCliente: 1,
      });
      if (response.error) console.log(response);
      if (response.data) {
        toast.success(response.data.message);
        router.push("/");
        dispatch(reset());
        onHandleNext();
      }
    } catch (error) {
      console.error(error);
    }
  });

  const [meseros, setMeseros] = useState([]);

  useEffect(() => {
    const listaMeseros = async () => {
      try {
        const fecha = reserva?.reservaState?.value?.fecha;
        const hora = reserva?.reservaState?.value?.hora;
        console.log(fecha, hora);

        if (fecha && hora && fecha !== "" && hora !== "") {
          const response = await postMeseroReserva({ fecha, hora });
          if (response.error) console.log(response);
          if (response.data) {
            setMeseros(response.data.data);
            console.log(meseros);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    listaMeseros();
  }, []);

  const { onHandleNext, step, onHandleBack } = useSteppsState();
  return (
    <form onSubmit={onSubmit} className={`${className}`}>
      <div className="border rounded-lg bg-white p-6 ">
        <div className="elegirMesero pt-4">
          <h2 className="text-[18px] font-bold pb-2 pl-8 pr-4 m-auto text-center">
            "En nuestro restaurante, te damos el control. Elije a tu mesero o
            mesera favorito/a y disfruta de un servicio a medida."
          </h2>
          <div className="contenido flex flex-row">
            <div className="ladoIzquiero flex flex-row">
              <div className="colaboradores w-[300px] pt-4 pl-10">
                <div className="container m-auto">
                  <div className="Imagenes">
                    <Carousel
                      autoPlay={false}
                      showStatus={false}
                      infiniteLoop
                      interval={2000}
                    >
                      {/* {!isLoadingMeseros &&
                        meseros?.map((mesero) => {
                          <div>
                            <img
                              className="rounded-md"
                              src={mesero.imagen}
                              alt={mesero.nombres}
                              width={298}
                              height={330}
                            />
                          </div>;
                        })} */}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
            <div className="ladoDerecho p-8 font-bold">
              <label {...getBaseProps()}>
                <VisuallyHidden>
                  <input {...getInputProps()} />
                </VisuallyHidden>
                <Chip
                  classNames={{
                    base: styles.base(),
                    content: styles.content(),
                  }}
                  /*      color="primary" */
                  startContent={
                    isSelected ? <CheckIcon className="ml-1" /> : null
                  }
                  variant="faded"
                  {...getLabelProps()}
                >
                  {children
                    ? children
                    : isSelected
                    ? "Seleccionado"
                    : "Seleccionar"}
                </Chip>
              </label>
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
