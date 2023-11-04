import React from 'react';
import styles from './Content_Opinion.module.scss';

export type Content_OpinionProps = {
}

const Content_Opinion: React.FC<Content_OpinionProps> = ({ }) => {
	return (
		<div>
			<div className="opiniones pt-2 pb-4">
				<div className="content">
					<h2 className="text-[14px] font-semibold">
						Juan Villegas Flores
					</h2>

					<p className="text-[14px] font-semibold">
						2/11/2023
					</p>
					<p className="calificaciones text-[14px] font-semibold pt-2">
						<span>
							General <span className="puntuacion_general text-[#06c167]">5</span> |
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
					<p className="comentario text-[14px] pt-2">
						La comida y el ambiente me parecieron espectaculares
					</p>
				</div>
				<div className="border-b border-gray-300 pt-4"></div>
			</div>
		</div>
	)
};

export default Content_Opinion;
