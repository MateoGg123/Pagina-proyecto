import React, { useEffect, useState } from 'react'

export const ParteMatematica = (Y1,Y2) => {


    var Calculo = null;
    var Pendiente = null;

    
    const funcion_grafica = (x1,x2,y1,y2) =>{
        Pendiente = (y1.Y2-y1.Y1)/(x2-x1)
        Calculo = (Pendiente * x1 *-1)+y1.Y1

        let resultado = `Y = ${Pendiente}x + ${Calculo}`
        return(resultado)
        
    }

    const integral = (Pendiente,Calculo)=>{
        let resultado = `Y = ${Pendiente/2}x^2 + ${Calculo}x`
        return(resultado)
    }

    const area = () =>{
        let resultado = (((Pendiente/2)*(1)) + Calculo*1)
        let resultado2 = (((Pendiente/2)*(4)) + Calculo*2)
        console.log(resultado)
        return (resultado2-resultado)
    }
     
  return (
    <div className="parte_matematica">
            <span className="funcion">{`Funcion del Intervalo: ${funcion_grafica(1,2,Y1,Y2)}`}</span>
            <span className="integral">{`Integral de la funcion: ${integral(Pendiente,Calculo)}`}</span>
            <span className="resultado">{`Area bajo la curva: ${area()}`}</span>
        </div>
  )
}
