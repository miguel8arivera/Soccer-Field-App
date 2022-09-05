import { useState } from 'react';

const MapsForm = ({ onChangeCity }) => {
	const [city, setCity] = useState('');

	const handleChange = e => {
		const value = e.target.value;
		if (value !== '') {
			setCity(value);
		}
	};

	const handleSubmit = () => {
		e.preventDefault();
		onChangeCity(city);
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				onChange={handleChange}
				className=''
				placeholder='Search ...'
			/>
		</form>
	);
};

export default MapsForm;
