import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export default function Maps() {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyCTFXr3VAf72L-NCrV1MNmG6frQuIaDiQM',
	});

	const center = {
		lat: 40.748817,
		lng: -73.985428,
	};
	return (
		<div>
			{isLoaded ? (
				<GoogleMap
					mapContainerStyle={{ width: '100%', height: '100%' }}
					center={center}
					zoom={10}
					/*  onLoad={onLoad}
        onUnmount={onUnmount} */
				>
					<Marker position={center} />
					<></>
				</GoogleMap>
			) : (
				<></>
			)}
		</div>
	);
}
