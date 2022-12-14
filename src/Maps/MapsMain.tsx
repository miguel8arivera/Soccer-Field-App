import { useEffect, useState } from 'react';
import styles from './weatherApp.module.css';
import MapsForm from './MapsForm';
import MapsInfo from './MapsInfo';
import Loading from './Loading';

const MapsMain = () => {
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		loadInfo();
	}, []);

	useEffect(() => {
		document.title = `weather | ${weather?.location.name ?? ''}`;
	}, [weather]);

	async function loadInfo(city = 'london') {
		try {
			const request = await fetch(`
   ${process.env.REACT_APP_API_URL}&key=${process.env.REACT_APP_KEY}&q=${city}
  `);

			const json = await request.json();
			setTimeout(() => {
				setWeather(json);
			}, 2000);

			console.log(json);
		} catch (error) {
			console.log('No funciona');
		}
	}

	const handleChangeCity = city => {
		setWeather(null);
		loadInfo(city);
	};
	return (
		<div className={styles.WeatherApp}>
			<MapsForm onChangeCity={handleChangeCity} />
			{weather ? <MapsInfo weather={weather} /> : <Loading />}
		</div>
	);
};

export default MapsMain;
