import { useState, useEffect, useRef } from "react";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

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
import ResumeReserva from "../../ResumeReserva";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button as Botton,
  useDisclosure,
} from "@nextui-org/react";

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
    defaultSelected: false,
  });

  const pdfRef = useRef();

  const styles = checkbox({ isSelected, isFocusVisible });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const [seleccion, setSeleccion] = useState(false);
  const [idMesero, setIdMesero] = useState(null);
  const [qr, setQr] = useState("");
  const reserva = useSelector((state) => state.reserva);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id, fecha, hora } = reserva?.reservaState?.value;
  const [postCreateReserva, { isLoading }] = usePostCreateReservaMutation();

  const [postMeseroReserva, { data, isLoading: isLoadingMeseros }] =
    usePostMeseroForReservaMutation();
  console.log(idMesero, isSelected);

  const onSubmit = handleSubmit(async () => {
    try {
      console.log(idMesero, isSelected);

      if (isSelected) {
        if (idMesero === null || idMesero === undefined || idMesero === "") {
          toast.error("Seleccione al mesero");
          return;
        }
      }

      
      handleOpen();
      /* console.log({ ...reserva?.reservaState?.value });
      const response = await postCreateReserva({
        ...reserva?.reservaState?.value,
        idMesero: idMesero,
      });
      if (response.error) console.log(response);
      if (response.data) {
        toast.success(response.data.message);
        router.push("/");
        dispatch(reset());
        onHandleNext();
      } */
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
            setIdMesero(meseros[0]?.idMesero);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    listaMeseros();
  }, [fecha, hora]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState("blur");
  const [isModal, setIsModal] = useState(false);
  const [otp, setOtp] = useState("");

  const handleOpen = (backdrop) => {
    onOpen();
  };

  const onSubmitModal = async () => {
    try {
      if (isSelected) {
        if (idMesero === null || idMesero === undefined || idMesero === "") {
          toast.error("Seleccione al mesero");
          return;
        }
      }
      console.log({ ...reserva?.reservaState?.value });
      const response = await postCreateReserva({
        ...reserva?.reservaState?.value,
        idMesero: idMesero,
      });
      if (response.error) console.log(response);
      if (response.data) {
        /*  toast.success(response.data.message); */
        onClose();
        dispatch(
          update({ qr: response.data.message })
        );
        router.push("/");
      
        onHandleNext();
        setQr(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (qr !== "") {
      const input = pdfRef.current;
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "p",
          unit: "mm",
          format: [675, 1700],
          putOnlyUsedFonts: true,
          floatPrecision: 16,
        });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const radio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * radio) / 2;
        const imgY = 30;
        pdf.addImage(
          imgData,
          "png",
          imgX,
          imgY,
          imgWidth * radio,
          imgHeight * radio
        );
        pdf.save("prueba.pdf");

      });

      dispatch(reset());
    }
  }, [qr]);

  const { onHandleNext, step, onHandleBack } = useSteppsState();
  return (
    <div>
      <form onSubmit={onSubmit} className={`${className}`}>
        <div className="border rounded-lg bg-white p-6">
          <div className="elegirMesero pt-4">
            <h2 className="text-[18px] font-bold pb-2 pl-8 pr-4 m-auto text-center">
              "En nuestro restaurante, te damos el control. Elije a tu mesero o
              mesera favorito/a y disfruta de un servicio a medida."
            </h2>
            <div className="contenido flex flex-col justify-center items-center mt-2">
              <div className="colaboradores w-80 ">
                <div className="Imagenes">
                  <Carousel
                    autoPlay={false}
                    showStatus={false}
                    infiniteLoop
                    selectedItem={seleccion}
                    interval={2000}
                    onChange={(value, item) => {
                      setIdMesero(item.props.idMesero);
                    }}
                  >
                    {!isLoadingMeseros &&
                      meseros?.map((mesero) => {
                        return (
                          <img
                            key={mesero.idMesero}
                            className="rounded-md"
                            src={mesero.imagen}
                            alt={mesero.nombres}
                            width={298}
                            height={330}
                            idMesero={mesero.idMesero}
                          />
                        );
                      })}
                  </Carousel>
                </div>
              </div>
              <div className="ladoDerecho font-bold">
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

      <Modal
        backdrop={backdrop}
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
        scrollBehavior="inside"
        size="3xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-center">
                <h1 className="font-bold">Resumen</h1>
              </ModalHeader>
              <ModalBody className="m-2 ">
                <form onSubmit={onSubmitModal}>
                  <div ref={pdfRef}>
                    <ResumeReserva payload={qr} />
                  </div>
                </form>
              </ModalBody>

              <ModalFooter>
                <div className="flex flex-row justify-end gap-2">
                  <Botton color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Botton>
                  <Botton
                    onClick={onSubmitModal}
                    type="submit"
                    /* isLoading={isLoadingOTP || isLoadingCreate} */
                    className="bg-neutral-900 text-white hover:bg-neutral-700"
                  >
                    {/* {!isLoadingOTP && !isLoadingCreate && "Verficar"} */}
                    Confirmar Reserva
                  </Botton>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
