import React, { useState } from 'react'
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';
import locations from "../locations.js";
import dog from '../dog.png';
import patio from '../Patio.png';

const mapStyles = {
    height: "100vh",
    width: "100%"
};

const defaultCenter = {
    lat: 36.159987,
    lng: -86.8465127
}

function Map() {

    const [ selected, setSelected ] = useState({});

    const onSelect = item => {
        setSelected(item);
    }


    return (
        <div className="map-div page-div">

            <LoadScript
                googleMapsApiKey={ process.env.REACT_APP_MAP_KEY }>
                    <GoogleMap
                        mapContainerStyle = { mapStyles }
                        zoom = { 14 }
                        center = { defaultCenter }>
                        {
                            locations.map(item => {
                                return (
                                    <MarkerF 
                                    key={ item.name } 
                                    position={ item.location } 
                                    onClick={() => onSelect(item)}
                                    />
                                )
                            })
                        }

                        {
                            selected.location &&
                            (
                                <InfoWindowF
                                position={ selected.location }
                                clickable={ true }
                                onCloseClick={ () => setSelected({})}
                                >
                                    <div>
                                        <h3 className='map-name'>{ selected.name }</h3>
                                        <p className='map-special'><em>{ selected.special }</em></p>

                                        <div className='map-icons-div'>
                                            { selected.dogFriendly === "yes" ? (
                                                <span><img src={ dog } alt="dog icon" className='map-icon'></img></span>
                                            ) : (
                                                <span></span>
                                            )}

                                            { selected.patio === "yes" ? (
                                                <span><img src={ patio } alt="patio icon" className='map-icon'></img></span>
                                            ) : (
                                                <span></span>
                                            )}
                                        </div>
                                                                     
                                    </div>
                                </InfoWindowF>
                            )
                        }
                    </GoogleMap>
            </LoadScript>

        </div>
    );
}

export default Map;