import React from 'react';
import Image from 'next/image';
import styles from './Experiences.module.scss'

export default function Experiences () {
	return (
		<div className="experience border bg p-4 rounded border-[#d8d9db]">
			<div className="image_experience">
				<Image className="rounded m-auto" src="/experiencia1.jpg" alt="Evento image" width={298} height={150} />
			</div>
			<div className="info">
				<h2 className="text-[18px] font-bold pt-2 pb-2">
					¿Estás cumpliendo años?
				</h2>
				<p className="text-[14px] pb-2">
					Si reservas con más de 10 personas te obsequiamos la torta y una botella de champaña
				</p>
				<a className="text-[14px] m-auto text-center text-white font-semibold bg-red-600 rounded h-[30px] p-2" href="">
					Reservar
				</a>
			</div>
		</div>
	)
};

