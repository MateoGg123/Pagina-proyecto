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
import { useEffect, useState } from 'react';
import "../estilos/grafico/grafico.css"
import { InfoGraphic } from './InfoGraphic';



export const DatosCalidadAire1 = ({DatosBuscado}) => {

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

const [Ciudades, setCiudades] = useState([])
const [DatoNro, setDatoNro] = useState([])

let datosbuscados = DatosBuscado

useEffect(() => {
  setCiudades(Object.keys(datosbuscados))
  setDatoNro(Object.values(datosbuscados))

},[datosbuscados])

 let midata = {
    labels: Ciudades,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Calidad Aire',
            data: DatoNro,
            tension: 0,
            fill : true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },

    ],
 };

 let misoptions = {
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)'}
        }
    }
 };

    return (
        <div className='contenedor_grafico'>
           <Line data={midata} options={misoptions} className='grafico' height={"100px"}/>
           <InfoGraphic Ciudades={datosbuscados}></InfoGraphic>
        </div>
    )
}