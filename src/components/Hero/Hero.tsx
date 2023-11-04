import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image'
import Experiences from '../Experiences';
import Information_Order from '../Information_Order/Information_Order';
import Head_Opinion from '../Head_Opinion/Head_Opinion';
import { Content_Opinion } from '../Content_Opinion';
import { More_Information } from '../More_Information';
import { Insert_Opinion } from '../Insert_Opinion';

export type HeroProps = {
};

const Hero: React.FC<HeroProps> = ({ }) => {

	return (
		<div className={`${styles.hero} container m-auto w-auto`}>
			<div className={styles.information}>
				<h1 className={`${styles.headline} text-black font-bold leading-[40px] text-center p-4`}>¡Eleva tu experiencia con los
					<span className="text-light_red"> Platillos </span>
					Más Irresistibles de la ciudad!
				</h1>

				<div className={`${styles.button_action} discover text-white text-[12px] font-bold text-center mx-auto bg-light_red w-[130px] p-2 rounded-[5px] animate-bounce hover:bg-dark_red cursor-pointer`}>
					<p>RESERVA AHORA</p>
				</div>

			</div>
			<div className="-my-4 flex justify-center gap-5 overflow-hidden py-10 sm:gap-8">
				<div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2 hover:rotate-3">
					<img src="/comidaDos.svg" alt="Imagen 1" width={298} height={330} />
				</div>
				<div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2 hover:rotate-3">
					<img src="/comidaUno.svg" alt="Imagen 2" width={298} height={330} />
				</div>
				<div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2 hover:rotate-3">
					<img src="/comidaDos.svg" alt="Imagen 3" width={298} height={330} />
				</div>
				<div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2 hover:rotate-3">
					<img src="/comidaTres.svg" alt="Imagen 4" width={298} height={330} />
				</div>
				<div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2 hover:rotate-3">
					<img src="/comidaUno.svg" alt="Imagen 5" width={298} height={330} />
				</div>
			</div>


			<div className={`${styles.socials} text-black pb-8 text-center`}>
				<span className="p-1 icon icon-whatsapp"></span>
				<span className="p-1 icon icon-instagram"></span>
				<span className="p-1 icon icon-facebook"></span>
				<span className="p-1 icon icon-threads"></span>
			</div>

			<div className={`${styles.body_page} pr-8 pl-8`}>
				<div className="body_information">
					<h2 className={`${styles.slogan} text-[14px] font-bold pb-4 w-auto inline-block border-b-[1px] border-black`}>
						BRAVAZO, UN RESTOBAR INNOVADOR INSPIRADO POR EL ESPÍRITU Y SENSUALIDAD DEL NORTE.
					</h2>

					<div className="contenido text-[14px] pt-4">
						<p className="pb-2 icon icon-reloj"> 11:00 am - 2:00 am</p>
						<p className="pb-4 icon icon-reseas"> Sin reseñas</p>
						<p className={`${styles.presentation} text-[14px] w-auto`}>
							Creemos con firmeza que todos merecemos vivir experiencias agradables y únicas, es por ello que nuestro compromiso con cada uno de ustedes lo expresamos con nuestra comida. La dedicación y el esfuerzo se recompensa con sonrisas satisfactorias.
						</p>
					</div>
				</div>
				<div className="information_order pt-4 pb-4">
					<Information_Order />
				</div>

				<div className="menu p-4 border rounded border-[#d8d9db]">
					<p className="text-[18px] text-center font-bold">
						Visualiza nuestra carta
					</p>
					<div className="pt-2">
						<a className="border border-[#d8d9db] rounded p-2 text-[14px] text-light_red font-semibold hover:text-white hover:bg-light_red" href="/menuBravazo.pdf" download="MenuTerrazaBravazo.pdf">
							Descargar carta 2023
						</a>
					</div>
				</div>

				<div className="body_image pb-4">
					<div className="pt-4">
						<h2 className="text-[18px] font-bold pb-2">
							Eventos
						</h2>
						<Image className="m-auto" src="/evento.svg" alt="Evento image" width={298} height={150} />
					</div>
				</div>

				<div>
					<div className="Experiencias">
						<h2 className="text-[18px] font-bold pb-2">
							Experiencias
						</h2>
						<Experiences />
					</div>

					<div>
						<More_Information />
					</div>

					<div className="opiniones">
						<Head_Opinion />
						<Content_Opinion />
						<Content_Opinion />
						<Content_Opinion />
						<Content_Opinion />
						<Content_Opinion />
					</div>
				</div>
			</div>
		</div >
	)
};

export default Hero;