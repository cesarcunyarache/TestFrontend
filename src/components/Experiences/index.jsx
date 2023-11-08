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
							<img className="rounded m-auto" src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t39.30808-6/361104658_290946073448257_3547024477483821838_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFBZ58YHDIuB_QV3CsYd55R5HOFwq8yXsfkc4XCrzJex16VGbzsOPUJFPQaphv_XL6IWQ4lwegjvvaEdeL9jGDY&_nc_ohc=e8LZ52-TAQgAX9VlwZF&_nc_ht=scontent.fpiu2-2.fna&oh=00_AfBFkwNekbam5otpE73tdOipNFxJrD-OqcycpdSQ065khw&oe=6550FBBB" alt="Experiencia image" width={200} height={150} />
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
							<img className="rounded m-auto" src="https://scontent.fpiu2-1.fna.fbcdn.net/v/t39.30808-6/391646626_344887378054126_5877293405875298967_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGqUg6cYxYqUd0gAYFUh56vKmwUHPzoPD0qbBQc_Og8PbL--IxwFRUns6LPm2cCSUtEj4Mol_Ymue2vdNeLZoLP&_nc_ohc=a6aNUuLY_o4AX-q3rhm&_nc_oc=AQlSloMo4XA1vi1bASg20URCodbWrMniRrOfEBfRAxUdcFZlkPOhEXW_1dtLB2FFbg0&_nc_ht=scontent.fpiu2-1.fna&oh=00_AfCLeqV320V4t8d_LxTp9mW5vP7bNsJCwB9uWKN3ibWrBQ&oe=654FE7DA" alt="Experiencia image" width={200} height={150} />
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

