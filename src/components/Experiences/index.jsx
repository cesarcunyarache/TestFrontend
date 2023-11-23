import React from 'react';
import Image from 'next/image';
import styles from './Experiences.css'

export default function Experiences() {
	return (
		<div className="contenido_experiencia">
			<div className="pt-4">
				<h2 className="text-[18px] font-bold pb-2">
					Experiencias
				</h2>
				{/*Aqui comienza la primera experiencia*/}
				<div className="experiencia_uno flex flex-row w-[100%] border p-4 items-center rounded border-[#d8d9db]">
					<div className="imagen_experiencia w-[200px]">
						<Image className="rounded m-auto" src="/experiencia1.jpg" alt="Evento image" width={200} height={150} />
					</div>
					<div className="informacion_experiencia pl-[5%]">
						<h2 className="text-[18px] font-bold pt-2 pb-2">
							¿Estás cumpliendo años?
						</h2>
						<p className="text-[14px] pb-2">
							Si reservas con más de 10 personas te obsequiamos la torta y una botella de champaña
						</p>
						<div className="button pt-4 animate-bounce">
							<a className="text-[14px] m-auto text-center text-white font-semibold bg-red-600 rounded h-[30px] p-2 hover:bg-red-700" href="">
								Reservar
							</a>
						</div>
					</div>
				</div>
				{/*Aqui comienza la segunda experiencia */}
				<div className="experiencia_dos pt-4">
					<div className="experiencias flex flex-row w-[100%] border p-4 items-center rounded border-[#d8d9db]">
						<div className="imagen_experiencia w-[200px]">
							<img className="rounded m-auto" src="makis.jpg" alt="Experiencia image" width={200} height={150} />
						</div>
						<div className="informacion_experiencia pl-[5%]">
							<h2 className="text-[18px] font-bold pt-2 pb-2">
								¿Te perderías esta delicia?
							</h2>
							<p className="text-[14px] pb-2">
								Los mejores MAKIS solo aquí en #TerrazaBravazo
								¡Visítanos o pídelos por delivery!
							</p>
							<div className="button pt-4 animate-bounce">
								<a className="text-[14px] m-auto text-center text-white font-semibold bg-red-600 rounded h-[30px] p-2 hover:bg-red-700" href="">
									Reservar
								</a>
							</div>
						</div>
					</div>
				</div>
				{/*Aqui comienza la tercera experiencia */}
				<div className="experiencia_dos pt-4">
					<div className="experiencias flex flex-row w-[100%] border p-4 items-center rounded border-[#d8d9db]">
						<div className="imagen_experiencia w-[200px]">
							<img className="rounded m-auto" src="frito.jpg" alt="Experiencia image" width={200} height={150} />
						</div>
						<div className="informacion_experiencia pl-[5%]">
							<h2 className="text-[18px] font-bold pt-2 pb-2">
								Domingos de frito
							</h2>
							<p className="text-[14px] pb-2">
								¿Y tú ya te atreviste a probar nuestro delicioso FRITO?
								Ven y disfruta de un desayuno Bravazo.
							</p>
							<div className="button pt-4 animate-bounce">
								<a className="text-[14px] m-auto text-center text-white font-semibold bg-red-600 rounded h-[30px] p-2 hover:bg-red-700" href="">
									Reservar
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

