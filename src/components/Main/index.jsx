import React from 'react';
import styles from './Main.css';
import Title from '../Title'
import CustomCarousel from '../CustomCarousel';
import Head_Information from '../Head_Information'
import Information_Order from '../Information_Order';
import Event_Content from '../Events_Content'
import Experiences from '../Experiences';
import Collaborators from '../Collaborators'
import More_Information from '../More_Information';

import Link from '../Link';
import Footer from '../Footer';

export default function Main() {

    return (
        //Inicio de la pagina
        //Div que encierra todo el contenido
        <div id="Inicio" className="contenido m-auto w-auto">
            {/*Inicio de la cabecera*/}
            <div className="cabecera">
                <Title />
                <div className="reserva pt-8 pb-8 animate-bounce">
                    <div className="flex flex-row justify-center gap-6">
                        <div>
                            <Link className="text-[18px] font-bold bg-red-600 w-auto h-auto px-4 py-2 rounded-[5px] hover:bg-red-700 cursor-pointer text-white font-sans hover:no-underline hover:text-white" redirect="/reservar" >
                                RESERVA AHORA
                            </Link>
                        </div>
                        <div className="pt-2">
                            <a className="text-[18px] font-bold bg-red-600 w-auto h-auto px-4 py-2 rounded-[5px] hover:bg-red-700 cursor-pointer text-white font-sans hover:no-underline hover:text-white" href="https://drive.google.com/file/d/16zChcNJ28L1s9e-0k2xhpT1jllqipooC/view" target="_blank">
                                VISUALIZA NUESTRA CARTA
                            </a>
                        </div>
                    </div>
                </div>

                {/*Este div muestra las imagenes de la cabecera*/}
                <div className="imagenes_cabecera">
                    <CustomCarousel />
                </div>
                <div className="redes">
                    {/*Aqui iran las redes sociales */}
                </div>
            </div> {/*Fin de la cabecera*/}
            {/*Aqui comienza el cuerpo de la web*/}
            <div className="cuerpo p-20">
                {/*Aqui comienza la presentacion del restobar*/}
                <div id="Sobre-nosotros" className="sobre_nosotros flex flex-row">
                    {/*Informacion del restobar*/}
                    <div className="informacion_cabecera pr-20 w-[80%]">
                        <Head_Information />
                    </div>

                    {/*Div con el contenido lateral para pantallas de escritorio*/}
                    <div className="contenido_lateral flex flex-col w-[40%]">
                        {/*Div que contiene la informacion de contacto para realizar pedidos*/}
                        <div className="informacion_orden hover:animate-appearance-in">
                            <div className="pb-4">
                                <Information_Order />
                            </div>
                        </div>
                        {/*Div que contiene informacion para descargar la carta*/}
                        <div className="informacion_carta hover:animate-appearance-in">
                            <div className="contenido_carta p-4 border rounded border-[#d8d9db]">
                                <p className="text-[18px] text-center font-bold pb-2">
                                    Visualiza nuestra carta
                                </p>
                                <div className="pt-2">
                                    <a className="border border-[#d8d9db] rounded p-2 text-[14px] text-red-600 font-semibold hover:text-white hover:bg-red-600" href="https://drive.google.com/file/d/16zChcNJ28L1s9e-0k2xhpT1jllqipooC/view" target="_blank">
                                        Carta Terraza Bravazo 2023
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*El DIV de arriba finaliza la seccion de contenido lateral*/}
                </div>
                {/*Aqui comienza el apartado de EVENTOS / EXPERIENCIAS*/}
                <div className="entretenimiento_colaboradores flex flex-row">
                    <div className="eventos_experiencias pr-20">
                        <div className="contenido_evento">
                            <Event_Content />
                        </div>
                        <div id="Experiencias" className="contenido_experiencias">
                            <Experiences />
                        </div>
                    </div>
                    <div className="contenido_lateral w-[33%]">
                        <div className="colaboradores pb-4 pt-8 w-[100%] rounded">
                            <h2 className="text-[18px] font-bold pb-2">
                                Nuestros colaboradores
                            </h2>
                            <Collaborators autoPlay={true} />
                        </div>

                        <div className="">
                            <div id="Acerca-de">
                                <More_Information />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
};