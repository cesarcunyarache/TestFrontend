import React from 'react';
import styles from './Footer.css';
import Input from "../Form/Input";
import { Textarea } from '@nextui-org/react';
import Select from "../Form/Select";
import Button from "../Form/Button";
import ModalForm from "../FormFooter/ModalForm";
import ModalBook from "../FormFooter/ModalBook";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Footer() {
	return (
		<div className="bg-red-600 w-full">
			<div className="contenido flex flex-row p-8">
				<div className="flex flex-row">
					<div className="text-white text-sm text-center">
						<ul className="text-left ml-28 pt-8 text-[16px]">
							<li className="pb-4">
								<ScrollLink
									to="Inicio"
									smooth={true}
									duration={500}
									offset={-100}
									className="hover:cursor-pointer hover:underline"
								>
									Inicio
								</ScrollLink>
							</li>
							<li className="pb-4">
								<ScrollLink
									to="Sobre-nosotros"
									smooth={true}
									duration={500}
									offset={-100}
									className="hover:cursor-pointer hover:underline"
								>
									Sobre Nosotros
								</ScrollLink>
							</li>
							<li className="pb-4">
								<ScrollLink
									to="Experiencias"
									smooth={true}
									duration={500}
									offset={-100}
									className="hover:cursor-pointer hover:underline"
								>
									Experiencias
								</ScrollLink>
							</li>
							<li>
								<ScrollLink
									to="Acerca-de"
									smooth={true}
									duration={500}
									offset={-100}
									className="hover:cursor-pointer hover:underline"
								>
									Acerca De
								</ScrollLink>
							</li>
						</ul>
					</div>
					<div className="text-white text-sm text-center">
						<ul className="text-left ml-28 pt-8 text-[16px]">
							<li className="pb-4"><p>Nuestras Redes</p></li>
							<li className="pb-4">
								<a className="hover:underline" href="https://wa.me/922081274?text=Hola,%20deseo%20ordenar%20un%20pedido%20a%20domicilio." target="_blank">
									Whatsapp
								</a>
							</li>
							<li className="pb-4">
								<a className="hover:underline" href="https://facebook.com/terrazabravazo" target="_blank">
									Facebook
								</a>
							</li>
							<li>
								<a className="hover:underline" href="https://instagram.com/terrazabravazo" target="_blank">
									Instagram
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="m-auto mr-28 flex flex-row gap-4">
					<div className="formularioContactanos">
						<ModalForm />
					</div>

					<div className="formularioContactanos">
						<ModalBook />
					</div>
				</div>
			</div>
			<div className="text-center text-white pb-4">
				<p>©2023 Terraza Bravazo. Todos los derechos reservados.</p>
			</div>
		</div>
	)
};