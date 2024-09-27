import React, { useEffect, useState } from 'react'

export const CuadroInfo = ({KeyObject,value}) => {
  const [TituloAire, setTituloAire] = useState(null)
  const [Link, setLink] = useState(null)
  useEffect(() => {
    if(KeyObject === "dew"){
      setTituloAire("el punto de rocio")
    }else if(KeyObject === "h"){
      setTituloAire("h")
    }else if(KeyObject === "p"){
      setTituloAire("Presion Atmosferica")
    }else if(KeyObject === "pm25"){
      setTituloAire("Partículas finas")
      setLink("https://www.health.ny.gov/environmental/indoors/air/pmq_a.htm#:~:text=Fine%20particulate%20matter%20(PM2.5,hazy%20when%20levels%20are%20elevated.")
    }else if(KeyObject === "t"){
      setTituloAire("Temperatura")
    }else if(KeyObject === "w"){
      setTituloAire("Viento")
    }else if(KeyObject === "wg"){
      setTituloAire("Indicador de agua")
    }else if(KeyObject === "co"){
      setTituloAire("Monoxido de carbono")
    }else if(KeyObject === "h"){
      setTituloAire("h")
    }else if(KeyObject === "no2"){
      setTituloAire("Dioxido de nitrogeno")
    }else if (KeyObject === "wd"){
      setTituloAire("Direccion del viento")
    }else if(KeyObject === "pm10"){
      setTituloAire("Materia particular")
      setLink("https://www.insee.fr/en/metadonnees/definition/c2196#:~:text=Particulate%20matter%20(PM)%20includes%20microscopic,diameter%20of%20less%20than%2010%C2%B5m.")
    }else if(KeyObject === "so2"){
      setTituloAire("Dióxido de azufre")
      setLink("https://www.lung.org/clean-air/outdoors/what-makes-air-unhealthy/sulfur-dioxide#:~:text=Sulfur%20dioxide%20(SO2)%20is,pollution%20in%20the%20eastern%20U.S.")
    }else if(KeyObject ==="o3"){
      setTituloAire("Ozono")
    }
  
  }, [KeyObject])
  
  return (
    <div className='cuadro_infosecundaria'>
      <div className="nro_dato">{value.v}</div>
      <div className="texto_dato">
        <div className="abrevacion">{KeyObject.toUpperCase()}</div>
        <div className="titulo">{TituloAire}</div>
      </div>
    </div>
  )
}
