import { SoccerField } from '../assets/interface';
import CardSoccer from './CardSoccer';

interface Props {
	soccerFields: SoccerField[];
}

export default function SoccerFieldList({ soccerFields }: Props) {
	return (
		<>
			{soccerFields.map((soccerField, id) => (
				<div className='col-md-6 mb-5' key={id}>
					<CardSoccer soccerField={soccerField} />
				</div>
			))}
		</>
	);
}
