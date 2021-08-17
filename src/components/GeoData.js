import React, {useState, useEffect} from 'react'
import {Nav} from './Nav'

import { useLocation } from "react-router-dom";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export function GeoData(props) {
    const [otherData, setOtherData] = useState([])

    const loc = useLocation()
   
    useEffect(() => {
        setOtherData(loc?.state?.result)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const position = [51.505, -0.09]
    return(
        <> 
        <Nav/>
            <h1 className="text-center text-white pt-9 text-xl">{otherData?.name},{otherData?.sys?.country}</h1>
            <section className="m-3 flex justify-around items-center mx-auto">
                <div>
                    <div className="flex">
                        <img className="h-12 ml-2" src="../temp-ico.png" alt="temprature-icon"/> 
                        <h1 className="self-center ml-1 text-lg md:text-xl text-white">Temprature</h1>
                    </div>
                    <div className="text-lg md:text-xl pt-3 text-white">
                        <p className="md:p-2 p-1.5">Main Temp. - {otherData?.main?.temp}°C</p>
                        <p className="md:p-2 p-1.5">Feels Like - {otherData?.main?.feels_like}°C</p>
                        <p className="md:p-2 p-1.5">Min. Temp. - {otherData?.main?.temp_min}°C</p>
                        <p className="md:p-2 p-1.5">Max Temp. - {otherData?.main?.temp_max}°C</p>
                    </div>
                    <div className="flex text-lg md:text-xl pt-3 text-white">
                         <img className="h-12 ml-2" src="../temp-ico.png" alt="temprature-icon"/> <p className="md:p-2 p-1.5">Wind Speed - {otherData?.wind?.speed}m/s</p>
                    </div>
                </div>

                <div>
                        <p className="text-3xl text-white">
                            MAPS INCOMMING!!!!!!!!
                        </p>
                    </div>
                
                
        

                
           
                
            </section>
    
        </>
    )
}