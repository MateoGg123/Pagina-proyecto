import React, { useEffect } from 'react'
import { FormGraphic } from './FormGraphic';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { ParteMatematica } from './ParteMatematica';

export const InfoGraphic = ({Ciudades}) => {
    const [Seleccion, setSeleccion] = useState(null)
    const [Resultados, setResultados] = useState(null)

    useEffect(() => {
        if(Seleccion){
            setResultados([Ciudades[Seleccion[0]],Ciudades[Seleccion[1]]])
        }
        
    }, [Seleccion])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
    );

    let midata = {
    labels: Seleccion,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Funcion entre los 2 puntos',
            data: Resultados,
            tension: 0,
            fill : true,
            borderColor: 'rgba(255, 255, 255, 0.5)',
            backgroundColor: 'rgba(4, 104, 104, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'white',
        },

    ],
 };

 let misoptions = {
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'white'}
        }
    }
 };
    
  return (
    <div className="info">
        <FormGraphic disabled={false} title={"Intervalo a analizar."}  options={(Object.keys(Ciudades))} handleChange={(e)=>{
            let a = e.target.value 
            a = a.split(",")
            setSeleccion(a)}}>
        </FormGraphic>
        {Resultados && <ParteMatematica Y1={Resultados[0]} Y2={Resultados[1]}></ParteMatematica>}
        {Seleccion && <Line data={midata} options={misoptions} height={"100px"} ></Line>}
    </div>
  )
}
