import React from 'react'
import GoogleMapReact from 'google-map-react'
import '../components/styles/map.css'

const Map = ({ onChangeCallBack }) => {
    const loadMap = (map, maps) => {
        let marker = new maps.Marker({
            position: { lat: -23.555490, lng: -46.589003 },
            map,
            draggable: true
        })
        return marker
    }

    return (
        <section className="map">
            <div className="map_place">
                <div>
                    <h2>1º Drag the pin where you want to know the temperature</h2>
                </div>
                <div style={{ height: '400px', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCWyRwKHe0mexDkcs2dkgbBCgDIT9324hY' }}
                        defaultCenter={{ lat: -23.555490, lng: -46.589003 }}
                        defaultZoom={10}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => loadMap(map, maps)}
                        onClick= {onChangeCallBack}
                    />
                </div>
            </div>
        </section>
    )
}

export default Map