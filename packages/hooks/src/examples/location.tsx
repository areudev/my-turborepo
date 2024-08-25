import { useGeolocation } from '../lib/use-geolocation'
import './location.css'

export default function Location() {
	const { latitude, longitude, error } = useGeolocation()
	console.log({ latitude, longitude, error })
	if (error) {
		return <div className="error">Error: {error.message}</div>
	}

	if (latitude === null || longitude === null) {
		return <div className="loading">Loading location...</div>
	}

	return (
		<div className="container">
			<h2 className="title">Current Location</h2>
			<p className="coordinate">Latitude: {latitude}</p>
			<p className="coordinate">Longitude: {longitude}</p>
		</div>
	)
}
