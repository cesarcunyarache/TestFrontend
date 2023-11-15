import React, { useState } from "react";
import styles from "./Reservation_Body.css";
import Button from "../../Form/Button";

import { useSteppsState } from "../../../context/SteppsContext";

export default function SteppTwo({ className = "" }) {



  const [selectedNivel, setSelectedNivel] = useState("opcion1");

  const handleNivelChange = (event) => {
    setSelectedNivel(event.target.value);
  };

  const { onHandleNext, step, onHandleBack } = useSteppsState();

  const [seatStates, setSeatStates] = useState({
    1: { selected: false, color: 'black' },
    2: { selected: false, color: 'black' },
    3: { selected: false, color: 'black' },
    4: { selected: false, color: 'black' },
    5: { selected: false, color: 'black' },
    6: { selected: false, color: 'black' },
    7: { selected: false, color: 'black' },
    8: { selected: false, color: 'black' },
    9: { selected: false, color: 'black' },
    10: { selected: false, color: 'black' },
    11: { selected: false, color: 'black' },
    12: { selected: false, color: 'black' },
    13: { selected: false, color: 'black' },
    14: { selected: false, color: 'black' },
    15: { selected: false, color: 'black' },
    16: { selected: false, color: 'black' },

    // SEGUNDO NIVEL
    17: { selected: false, color: 'black' },
    18: { selected: false, color: 'black' },
    19: { selected: false, color: 'black' },
    20: { selected: false, color: 'black' },
    21: { selected: false, color: 'black' },
    22: { selected: false, color: 'black' },
    23: { selected: false, color: 'black' },
    24: { selected: false, color: 'black' },
    25: { selected: false, color: 'black' },
    26: { selected: false, color: 'black' },
    27: { selected: false, color: 'black' },
    28: { selected: false, color: 'black' },
    29: { selected: false, color: 'black' },
    30: { selected: false, color: 'black' },
    31: { selected: false, color: 'black' },
  });

  const handleSeatClick = (seatId) => {
    setSeatStates((prevSeatStates) => ({
      ...prevSeatStates,
      [seatId]: {
        selected: !prevSeatStates[seatId].selected,
        color: prevSeatStates[seatId].selected ? 'black' : '#c20d4d',
      },
    }));
  };

  return (
    <form className={`${className}`}>
      <div className="border rounded-lg bg-white p-6  ">
        <div className="contenido">
          <h2 className="font-bold text-[18px] pb-2">Terraza Bravazo</h2>

          <div className="flex flex-row text-[14px] font-semibold">
            <p className="pr-4">Juan Villegas Flores</p>
            <p className="pr-4">
              Fecha <span>18/11/2023</span>
            </p>
            <p className="pr-4">
              Hora <span>7:30 PM</span>
            </p>
            <p>
              2 <span>Personas</span>
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
              <span className="bg-gray-500 rounded text-gray-500">....</span>{" "}
              Reservado
            </li>
            <li className="pr-4">
              {" "}
              <span className="bg-black rounded text-black">
                ....
              </span>{" "}
              Disponible
            </li>
            <li className="pr-4">
              {" "}
              <span className="bg-red-600 rounded text-red-600">
                ....
              </span>{" "}
              Seleccionado
            </li>
          </ul>
        </div>

        <div className="niveles">
          {selectedNivel === "opcion1" ? (
            <div className="setContainer">
              <div className="imagenUno relative">
                <img
                  className=""
                  src="https://freepass.es/storage/seatschart/August2023/1691687721290.png"
                  alt="Segundo nivel"
                />
                <div className="span1">
                  <span
                    id="seatmark_id_27_0"
                    className={`seat-mark ${seatStates[1].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(1)}
                    style={{ backgroundColor: seatStates[1].color, left: '86.5%', top: '26%' }}>
                    1
                  </span>
                </div>
                <div className="span2">
                  <span
                    id="seatmark_id_27_1"
                    className={`seat-mark ${seatStates[2].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(2)}
                    style={{ backgroundColor: seatStates[2].color, left: '86.5%', top: '47.5%' }}>
                    2</span>
                </div>
                <div className="span3">
                  <span
                    id="seatmark_id_27_2"
                    className={`seat-mark ${seatStates[3].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(3)}
                    style={{ backgroundColor: seatStates[3].color, left: "77.4%", top: "26.6%" }}>
                    3</span>
                </div>
                <div className="span4">
                  <span
                    id="seatmark_id_27_3"
                    className={`seat-mark ${seatStates[4].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(4)}
                    style={{ backgroundColor: seatStates[4].color, left: "77.4%", top: "47.3%" }}>
                    4</span>
                </div>
                <div className="span5">
                  <span
                    id="seatmark_id_27_4"
                    className={`seat-mark ${seatStates[5].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(5)}
                    style={{ backgroundColor: seatStates[5].color, left: "69.8%", top: "61.3%" }}>
                    5</span>
                </div>
                <div className="span6">
                  <span
                    id="seatmark_id_27_5"
                    className={`seat-mark ${seatStates[6].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(6)}
                    style={{ backgroundColor: seatStates[6].color, left: "62.5%", top: "42.2%" }}>
                    6</span>
                </div>
                <div className="span7">
                  <span
                    id="seatmark_id_27_6"
                    className={`seat-mark ${seatStates[7].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(7)}
                    style={{ backgroundColor: seatStates[7].color, left: "54.2%", top: "42.1%" }}>
                    7</span>
                </div>
                <div className="span8">
                  <span
                    id="seatmark_id_27_7"
                    className={`seat-mark ${seatStates[8].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(8)}
                    style={{ backgroundColor: seatStates[8].color, left: "48.2%", top: "24.8%" }}>
                    8</span>
                </div>
                <div className="span9">
                  <span
                    id="seatmark_id_27_8"
                    className={`seat-mark ${seatStates[9].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(9)}
                    style={{ backgroundColor: seatStates[9].color, left: "39.7%", top: "24.9%" }}>
                    9</span>
                </div>
                <div className="span10">
                  <span
                    id="seatmark_id_27_9"
                    className={`seat-mark ${seatStates[10].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(10)}
                    style={{ backgroundColor: seatStates[10].color, left: "29.9%", top: "24.9%" }}>
                    10</span>
                </div>
                <div className="span11">
                  <span
                    id="seatmark_id_27_10"
                    className={`seat-mark ${seatStates[11].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(11)}
                    style={{ backgroundColor: seatStates[11].color, left: "21%", top: "24.9%" }}>
                    11</span>
                </div>
                <div className="span12">
                  <span
                    id="seatmark_id_27_11"
                    className={`seat-mark ${seatStates[12].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(12)}
                    style={{ backgroundColor: seatStates[12].color, left: "12.4%", top: "24.8%" }}>
                    12</span>
                </div>
                <div className="span13">
                  <span
                    id="seatmark_id_27_12"
                    className={`seat-mark ${seatStates[13].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(13)}
                    style={{ backgroundColor: seatStates[13].color, left: "13.6%", top: "42.5%" }}>
                    13</span>
                </div>
                <div className="span14">
                  <span
                    id="seatmark_id_27_13"
                    className={`seat-mark ${seatStates[14].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(14)}
                    style={{ backgroundColor: seatStates[14].color, left: "22.3%", top: "42.2%" }}>
                    14</span>
                </div>
                <div className="span15">
                  <span
                    id="seatmark_id_27_14"
                    className={`seat-mark ${seatStates[15].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(15)}
                    style={{ backgroundColor: seatStates[15].color, left: "32.2%", top: "42.2%" }}>
                    15</span>
                </div>
                <div className="span16">
                  <span
                    id="seatmark_id_27_15"
                    className={`seat-mark ${seatStates[16].selected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(16)}
                    style={{ backgroundColor: seatStates[16].color, left: "43.1%", top: "42.6%" }}>
                    16</span>
                </div>
              </div>
            </div>
          ) : (
            <img
              className=""
              src="https://freepass.es/storage/seatschart/November2023/1699428797713.png"
              alt="Tercer nivel"
            />
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
