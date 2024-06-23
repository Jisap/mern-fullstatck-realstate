import React, { useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconsShadow from 'leaflet/dist/images/marker-shadow.png'
import * as ELG from 'esri-leaflet-geocoder'

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconsShadow
})

L.Marker.prototype.options.icon = DefaultIcon

const GeocoderMarker = ({address}) => {

  const map = useMap()
  const [position, setPosition] = useState([60, 19]);

  return (
    <Marker
      position={position}
      icon={DefaultIcon}
    >
      <Popup />
    </Marker>
  )
}

export default GeocoderMarker