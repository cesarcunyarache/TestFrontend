import React from 'react';
import styles from './Information_Order.module.scss';

export default function Information_Order() {
	return (
		<div className={`${styles.information_order} border p-4 rounded border-[#d8d9db]`}>
			<h2 className="font-bold text-[18px] text-center">
				A domicilio o para llevar
			</h2>
			<div className="pt-4 pb-2">
				<p className="text-[14px]">
					Contacto
				</p>
			</div>
			<a className="border p-2 rounded border-[#d8d9db] text-[14px] font-semibold text-red-700 hover:text-white hover:bg-red-700" href="tel:+51976569677">
				+51 976 569 677
			</a>

			<div className="pt-4 pb-2">
				<p className="text-[14px]">
					Otras opciones
				</p>
			</div>
			<p>
				<span className="pr-2">
					<a className="border p-2 rounded border-[#d8d9db] text-[14px] text-[#06c167] font-semibold hover:text-white hover:bg-[#06c167]" href="https://yeva.pe/shop/terrazabravazo">
						Yeva.pe
					</a>
				</span>
				<a className="border p-2 rounded border-[#d8d9db] text-[14px] text-[#06c167] font-semibold hover:text-white hover:bg-[#06c167]" href="https://wa.me/976569677?text=Hola,%20deseo%20ordenar%20un%20pedido%20a%20domicilio.">
					Whatsapp
				</a>
			</p>
		</div>
	)
};