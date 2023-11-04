'use client'
import React from 'react';
import styles from './Head_Opinion.module.scss';

export type Head_OpinionProps = {
}

const Head_Opinion: React.FC<Head_OpinionProps> = ({ }) => {
	return (
		<div className="pt-4">
			<div className="pt-4 pb-4">
				<h2 className="text-[18px] font-bold">
					La comida puede ser el plato principal, pero tu opinión es el postre que siempre esperamos
				</h2>
				<h3 className="font-semibold text-[14px] pt-4">
					Reseñas Generales
				</h3>
				<p className="text-[14px] pt-4">
					Sólo pueden hacer opiniones los comensales que hayan comido en este restaurante
				</p>
			</div>
			<div className="calificacion_actual">
				<div className="pb-2">
					<p className="text-[14px] font-semibold">4.5 <span>basado en calificaciones recientes</span></p>
				</div>

				<p className="calificaciones text-[14px] pb-2 font-semibold">
					<span>
						General <span className="puntuacion_general">5</span> |
					</span>
					<span>
						Comida <span className="puntuacion_comida">5</span> |
					</span>
					<span>
						Atención <span className="puntuacion_atencion">5</span> |
					</span>
					<span>
						Ambiente <span className="puntuacion_ambiente">5</span>
					</span>
				</p>
			</div>
			<div className="pt-4 pb-4 animate-bounce">
				<a className="bg-light_red rounded text-white text-[14px] font-semibold p-2" href="">Dejar Opinión</a>
			</div>
		</div>
	)
};

export default Head_Opinion;
