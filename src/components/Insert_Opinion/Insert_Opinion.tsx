import React from 'react';
import styles from './Insert_Opinion.module.scss';

export type Insert_OpinionProps = {
}

const Insert_Opinion: React.FC<Insert_OpinionProps> = ({ }) => {
	return (
		<div>
			<div className="pt-4 pb-4">
				<div className="border">
				</div>
			</div>
			<h2>Déjanos saber que opinas respecto a Terraza Bravazo</h2>
			<div className="categorias">
				<p>
					Comida
					<input type="radio" name="comida" id="5" />
					<input type="radio" name="comida" id="5" />
					<input type="radio" name="comida" id="5" />
					<input type="radio" name="comida" id="5" />
					<input type="radio" name="comida" id="5" />
				</p>
				<p>
					Atención
				</p>
				<p>
					Ambiente
				</p>
			</div>
			<div>
				<p>Opinión</p>
				<input className="border rounded" type="text"></input>
			</div>
		</div>
	)
};

export default Insert_Opinion;
