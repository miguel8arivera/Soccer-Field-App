import { useState } from 'react';
import { SOCCERFIELDS } from '../assets/data';
/* import Maps from "../Maps/Maps"; */
import SoccerFieldList from './SoccerFieldList';
import SoccerFieldSearch from './SoccerFieldSearch';

export default function MainPage() {
	const [query, setQuery] = useState<string>('');

	const filteredSoccerFields = SOCCERFIELDS.filter(soccerField =>
		soccerField.description.includes(query)
	);
	return (
		<>
			<div className='col-md-4'>
				<SoccerFieldSearch onSearch={setQuery} />
				<div>{/* <Maps /> */}</div>
			</div>
			<div className='col-md-8'>
				<h4 className='text-center text-white'>SoccerFields:</h4>
				<div className='row'>
					<SoccerFieldList soccerFields={filteredSoccerFields} />
				</div>
			</div>
		</>
	);
}
