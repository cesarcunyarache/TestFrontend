'use client'
import React, { useState, useRef } from 'react';
import styles from './Images_Header.module.scss';

export type Images_HeaderProps = {};

const Images_Header: React.FC<Images_HeaderProps> = ({ }) => {
	const [scale, setScale] = useState(1);
	const imageRefs = [
		useRef<HTMLImageElement>(null),
		useRef<HTMLImageElement>(null),
		useRef<HTMLImageElement>(null),
		useRef<HTMLImageElement>(null),
		useRef<HTMLImageElement>(null),
	];

	const handleTouchMove = (index: number, e: React.TouchEvent<HTMLImageElement>) => {
		// Aquí puedes ajustar el factor de escala como desees
		const scaleFactor = 1.1;
		setScale(scaleFactor);

		// Restablecer la escala cuando el dedo se mueve
		const imageRef = imageRefs[index].current;
		if (imageRef) {
			imageRef.style.transform = `scale(${scaleFactor})`;
		}
	};

	const handleTouchEnd = () => {
		// Restablecer la escala cuando se levanta el dedo
		setScale(1);

		imageRefs.forEach((ref) => {
			if (ref.current) {
				ref.current.style.transform = 'scale(1)';
			}
		});
	};

	return (
		<div className={`${styles.hero} container m-auto w-auto`}>
			<div className={styles.information}>
				{/* ... (tu código existente) ... */}
			</div>
			<div className="-my-4 flex justify-center gap-5 overflow-hidden py-10 sm:gap-8">
				{imageRefs.map((imageRef, index) => (
					<div
						key={index}
						className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2`}
					>
						<img
							src={`/comida${index}.jpg`}
							alt={`Imagen ${index + 1}`}
							width={298}
							height={330}
							onTouchMove={(e) => handleTouchMove(index, e)}
							onTouchEnd={handleTouchEnd}
							ref={imageRef}
						/>
					</div>
				))}
			</div>
			{/* ... (tu código existente) ... */}
		</div>
	);
};

export default Images_Header;
