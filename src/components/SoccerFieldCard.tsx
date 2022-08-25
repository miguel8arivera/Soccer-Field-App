import React from 'react';
import foto from '../img/mundialito.jpg';
import { SoccerField } from '../assets/interface';
interface Props {
	soccerField: SoccerField;
}
export default function SoccerFieldCard({ soccerField }: Props) {
	return (
		<div className='card card-body bg-secondary rounded-0 text-dark'>
			<div>
				<h4>{soccerField.title}</h4>
				<p>
					<b>{soccerField.star}</b>⭐
				</p>
				<p>{soccerField.description}</p>
				<img
					src={foto}
					alt='foto de campo de futbol'
					width={250}
					height={150}
				/>
				<p>Calificar Campo:</p>
			</div>
		</div>
	);
}
