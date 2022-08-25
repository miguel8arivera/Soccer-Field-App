import React from 'react';
import { SoccerField } from '../assets/interface';
import SoccerFieldCard from './SoccerFieldCard';

interface Props {
	soccerFields: SoccerField[];
}

export default function SoccerFieldList({ soccerFields }: Props) {
	return (
		<>
			{soccerFields.map((soccerField, id) => (
				<div className='col-md-6 mb-5' key={id}>
					<SoccerFieldCard soccerField={soccerField} />
				</div>
			))}
		</>
	);
}
