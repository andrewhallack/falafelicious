import React, { useState } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const containerStyle = { width: "100%", height: "100%" }

const center = { lat: 30.2672, lng: -97.7431 }

const addresses = [
    "51 Rainey St #120, Austin, TX 78701",
    "11331 N Lamar Blvd, Austin, TX 78753",
    "851 S Bell Blvd, Cedar Park, TX 78613",
    "4001 S Lamar Blvd Ste E, Austin, TX 78704",
    "8650 Spicewood Springs Rd, Austin, TX 78759"
]

const FindInStores = () => {
  const [markers, setMarkers] = useState([])

  const geocodeAddresses = (geocoder) => {
    const promises = addresses.map(
      (address) =>
        new Promise((resolve) => {
          geocoder.geocode({ address }, (results, status) => {
            if (status === "OK" && results[0]) {
              resolve(results[0].geometry.location)
            } else {
              resolve(null)
            }
          })
        })
    )

    Promise.all(promises).then((results) =>
      setMarkers(results.filter(Boolean))
    )
  }

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        onLoad={() => {
          const geocoder = new window.google.maps.Geocoder()
          geocodeAddresses(geocoder)
        }}
      >
        {markers.map((pos, i) => (
          <Marker key={i} position={pos} />
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default FindInStores
