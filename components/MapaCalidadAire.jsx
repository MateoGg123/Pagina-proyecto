
import React, { useEffect, useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'
import { AirQualityIndex } from './AirQualityIndex'
import { CuadroInfo } from './CuadroInfo'
import { DateCity } from './DateCity'
import { FormCity } from './FormCity'


export const MapaCalidadAire = ({setDatosBuscados}) => {

  const [Geo, setGeo] = useState([])
  const [Ciudad, setCiudad] = useState("shanghai")
  const [Date, setDate] = useState("")
  const [Aqi, setAqi] = useState(null)
  const [Iaqi, setIaqi] = useState(null)

  useEffect(() => {
    const fetch = async()=>{
      let token = "df88f87923acd80b8d65c3b7fd7fe809e84f271a"
      let resultado_ciudad_buscada = await helpHttp().get(`https://api.waqi.info/feed/${Ciudad}/?token=${token}`)
      let ubicacion = resultado_ciudad_buscada.data.city.geo;

      
      setIaqi(resultado_ciudad_buscada.data.iaqi)
      setGeo(ubicacion)
      setDate(resultado_ciudad_buscada.data.time.s)
      setAqi(resultado_ciudad_buscada.data.aqi)
      //console.log(resultado_ciudad_buscada.data.iaqi)
      setDatosBuscados(Ciudad,resultado_ciudad_buscada.data.aqi)
    }
    
    fetch()
  }, [Ciudad])


  useEffect(() => {
    const ifameData=document.getElementById("iframeId")
    const lat=Geo[0];
    const lon=Geo[1];
    ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&z=10&hl=es;&output=embed`
  }, [Geo])
  
  let contador = 0;
  return (
    <div className='mapa_calidades'>
      <div className="seccion_mapa1">
        <AirQualityIndex aqi={Aqi}></AirQualityIndex>
      </div>
      <div className="seccion_mapa2">
        <FormCity setCiudad={setCiudad}></FormCity>
        <div className="map">
          <iframe id="iframeId" height="60%" width="95%"></iframe>
        </div>
        <DateCity date={Date}></DateCity>
      </div>
      <div className="seccion_mapa3">
        <div className="contenedor_cuadroinfo">
          {
            Iaqi ?
              Object.entries(Iaqi).map(([key,value])=> 
              <CuadroInfo key={contador += 1} KeyObject={key} value={value}></CuadroInfo>
              )
            :Iaqi
          }
        </div>
      </div>
        
        
    </div>
  )
}
