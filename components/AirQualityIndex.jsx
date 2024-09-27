import React, { useEffect } from 'react'
import "react-circular-progressbar/dist/styles.css";

export const AirQualityIndex = ({aqi}) => {
  useEffect(() => {
    let color_air_quality = document.querySelector(".air_quality_index")
    let text = document.querySelector(".air_text")

    if(aqi>0 && aqi<50){
      color_air_quality.style.background="green";
      text.textContent="BUENA"
    }if(aqi>=50 && aqi<100){
      color_air_quality.style.background="yellow";
      text.textContent="MODERADA"
    }
    if(aqi>=100 && aqi<150){
      color_air_quality.style.background="orange";
      text.textContent="POCO SALUDABLE"
    }if(aqi>=150){
      color_air_quality.style.background="red";
      text.textContent="DAÑINA"
    }
  },[aqi])

  
  return (
    <div className='contenedor_progress'>
        <div className="progress_bar">
          <span>AIR QUALITY INDEX</span>
            <div className="air_quality_index">
              <span>{aqi}</span>
              <span className='air_text'></span>
            </div>
        </div>
    </div>
  )
}
