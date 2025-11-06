import React, { useState, useEffect } from "react"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"

const containerStyle = { width: "100%", height: "100svh" }

const mapOptions = {
    center: { lat: 30.2672, lng: -97.7431 },
    zoom: 10,
    disableDefaultUI: true
}

const addresses = [
    "51 Rainey St #120, Austin, TX 78701",
    "11331 N Lamar Blvd, Austin, TX 78753",
    "851 S Bell Blvd, Cedar Park, TX 78613",
    "4001 S Lamar Blvd Ste E, Austin, TX 78704",
    "8650 Spicewood Springs Rd, Austin, TX 78759",
    "2800 W WM Cannon Dr, Austin, TX, 78745",
    "2623 Jones Rd, Austin, TX, 78745",
    "1514 Holly St, Austin, TX, 78702",
    "4435 N S Highway 123, San Marcos TX, 78666",
    "12800 Pearce Ln, Del Valle, TX, 78617",
    "9401 HWY 183 South, Austin, TX, 78747",
    "2213 Justin Ln, Austin, TX, 78757",
    "1290 Bebee Rd, Kyle, TX, 78640",
    "1030 Bunton Creek Rd, Kyle, TX, 78640",
    "1006 E Yager Ln #201B, Austin, TX, 78753",
    "11410 Manchaca Rd, Austin, TX, 78757",
    "8801 West Gate Blvd, Austin, TX, 78745",
    "5671 FM2770, Kyle, TX, 78640",
    "5200 Ross Rd, DEl Valley, TX, 78617",
    "1800 Scofield Ridge Pkwy, Austin, TX, 78727",
    "180 Springlake Dr, Dripping Springs, TX, 78620",
    "2335 Main St. Buda, TX, 78610",
    "12201 Pearce Lane, Del Valley, TX, 78617",
    "1511 W San Antonio St., Lockheart, TX, 78644",
    "7310 Elroy Rd, Del Valle, TX, 78617",
    "175 N Old Stagecoach Rd, Kyle, TX, 78640"
]

const FindInStores = () => {
  const [markers, setMarkers] = useState([])

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  })

  useEffect(() => {
    if (!isLoaded) return
    const geocoder = new window.google.maps.Geocoder()
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
  }, [isLoaded])

  if (!isLoaded) return <div>Loading Map...</div>

  return (
    <GoogleMap mapContainerStyle={containerStyle} options={mapOptions}>
      {markers.map((pos, i) => (
        <Marker key={i} position={pos} />
      ))}
    </GoogleMap>
  )
}

export default FindInStores
