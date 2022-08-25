import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

interface MarkerProps {
	lat: number;
	lng: number;
	googleMapsApiKey: string;
}

export default function Maps() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
	});

	if (!isLoaded) return <div>Loading...</div>;
	return <Home />;
}

function Home() {
	const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
	return (
		<GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
			<Marker position={center} />
		</GoogleMap>
	);
}
