import React from 'react';
import styles from './More_Information.css';

export default function More_Information() {
	return (
		<div className="">
			<h2 className="font-bold text-[18px]">
				Información adicional
			</h2>
			<div className="locacion">
				<p className="text-[16px] font-semibold p-2">
					Locación
				</p>
				<a className="text-[14px] pl-2 cursor-pointer text-red-700" href="https://www.google.com/maps/dir//Terraza+Bravazo,+Dos+de+Mayo+Mz+D,+Paita+20701/@-5.1006717,-81.0928391,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9049e798ca818939:0xf05dbfaf19ad734f!2m2!1d-81.1160123!2d-5.1029597?entry=ttu">
					Dos de Mayo, Mz D, Lote 39 - Paita/Piura
				</a>
			</div>
			<div className="entretenimiento">
				<p className="text-[16px] font-semibold pt-4 pl-2 pb-2">
					Entretenimiento
				</p>
				<p className="text-[14px] pl-2 text-[#2d333f]">
					No importa qué día de la semana elijas, en Terraza Bravazo siempre tendrás un evento emocionante que satisfaga tus sentidos y deseos.
				</p>
			</div>
			<div className="opciones_pago">
				<p className="text-[16px] font-semibold pt-4 pl-2 pb-2">
					Opciones de pago
				</p>
				<p className="text-[14px] pl-2 text-[#2d333f]">
					Visa, Mastercard, Yape, Plin, Efectivo
				</p>
			</div>
			<div className="contacto">
				<p className="text-[16px] font-semibold pt-4 pl-2 pb-2">
					Contacto
				</p>
				<p className="text-[14px] pl-2 text-[#2d333f]">
					+51 123 456 789
				</p>
			</div>
			<div className="redes_sociales">
				<p className="text-[16px] font-semibold pt-4 pl-2 pb-2">
					Redes sociales
				</p>
				<div className="Enlaces pt-2 pl-2 text-[14px]">
					<p>
						<span className="pr-2">
							<a className="text-red-600 font-semibold hover:bg-red-600 hover:text-white border rounded pt-1 pb-1 pr-4 pl-4" href="https://instagram.com/terrazabravazo">Instagram</a>
						</span>
						<span>
							<a className="text-[#2771bf] font-semibold hover:bg-[#1c528c] hover:text-white border rounded pt-1 pb-1 pr-4 pl-4" href="https://facebook.com/terrazabravazo">Facebook</a>
						</span>
					</p>
				</div>
			</div>
		</div>
	)
};