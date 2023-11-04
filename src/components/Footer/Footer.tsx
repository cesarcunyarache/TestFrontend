import React from 'react';
import styles from './Footer.module.scss';

export type FooterProps = {
}

const Footer: React.FC<FooterProps> = ({ }) => {
	return (
		<div className="bg-light_red">
			<p className="text-white text-sm text-center p-4">
				©2023 Terraza Bravazo. Todos los derechos reservados.
			</p>
		</div>
	)
};

export default Footer;
