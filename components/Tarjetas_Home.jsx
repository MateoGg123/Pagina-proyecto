import React from 'react'
let contador = 0
export const TarjetasHome = () => {

    const handleClickNext = (e) =>{
        
        let cartas = document.querySelectorAll(".tarjeta")
        let numero_mostrar = document.querySelector(".nro_tarjeta")

        if(contador > 3){
            cartas[contador].classList.remove("activado")
            contador = 0
            cartas[contador].classList.add("activado")
            numero_mostrar.textContent=`#${contador+1}`
        }else{
            cartas[contador].classList.remove("activado")
            contador++;
            cartas[contador].classList.add("activado")
            console.log(cartas[contador])
            e.currentTarget.classList.add("activado")

            numero_mostrar.textContent=`#${contador+1}`
        }
        
    }   

    const handleClickPrev = (e) =>{
        
        let cartas = document.querySelectorAll(".tarjeta")
        let numero_mostrar = document.querySelector(".nro_tarjeta")

        if(contador === 0){
            cartas[contador].classList.remove("activado")
            contador = 4
            cartas[contador].classList.add("activado")
            numero_mostrar.textContent=`#${contador+1}`
        }else{
            cartas[contador].classList.remove("activado")
            contador--;
            cartas[contador].classList.add("activado")
            console.log(cartas[contador])
            e.currentTarget.classList.add("activado")
            numero_mostrar.textContent=`#${contador+1}`
        }
        
    }   

  return (
    <div className='tarjetas'>
        <div className="contenedor_tarjetas">
            <div className='tarjeta activado'>
                 <img src={"https://elperiodicodelaenergia.com/wp-content/uploads/2017/02/cambio-clima%CC%81tico.jpg"} alt="" />
                 <div className="data">
                    <span className='nro_tarjetas'>#1</span>
                     <span className='titulo_tarjetas'>PROBLEMATICAS DEL CAMBIO CLIMATICO</span>
                     <span className='subtitulo_tarjetas'>El cambio climático hace referencia a los cambios a largo plazo de las temperaturas y los patrones climáticos. Estos cambios pueden ser naturales, pero desde el siglo XIX, las actividades humanas han sido el principal motor del cambio climático, debido principalmente a la quema de combustibles fósiles, como el carbón, el petróleo y el gas, lo que produce gases que atrapan el calor.</span>
                     <a href='https://www.un.org/es/climatechange/science/causes-effects-climate-change' target={"_blank"} ><button className="button_link">Leer mas</button></a>
                 </div>
                 <span className='sombra_tarjeta'></span>
             </div>

            <div className='tarjeta'  >
                 <img src={"https://thumbs.dreamstime.com/b/cambio-clim%C3%A1tico-de-la-sequ%C3%ADa-groenlandia-del-paisaje-est%C3%A9ril-al-crecimiento-verde-213665745.jpg"} alt="" />
                 
                 <div className="data">
                    <span className='nro_tarjetas'>#2</span>
                     <span className='titulo_tarjetas'>ESCASEZ DE ALIMENTOS</span>
                     <span className='subtitulo_tarjetas'>Los cambios en el clima y el aumento de condiciones meteorológicas extremas son algunos de los motivos que provocan un aumento global en la desnutrición en las poblaciones más pobres. Los recursos pesqueros, los cultivos y el ganado pueden desaparecer o volverse menos productivos. Debido a una continua acidificación oceánica, los recursos marinos que dan alimento a miles de millones de personas se encuentran en riesgo. Los cambios en las capas de nieve y hielo de los casquetes polares han alterado el suministro de alimentos generados por la ganadería, la caza y la pesca. Un calor extremo puede hacer disminuir el agua y los pastizales destinados a la ganadería, provocando una disminución de la producción agrícola y afectando al ganado.</span>
                     <a href='https://www.un.org/es/climatechange/science/causes-effects-climate-change' target={"_blank"}><button className="button_link">Leer mas</button></a>
                 </div>
                 <span className='sombra_tarjeta'></span>
             </div>

             <div className='tarjeta'>
                 <img src={"https://images.hola.com/imagenes/estar-bien/20190916148097/cambio-climatico-influencia-animales-cs/0-712-839/crisis-climatica-afecta-animales-t.jpg"} alt="" />
                 
                 <div className="data">
                    <span className='nro_tarjetas'>#3</span>
                    <span className='titulo_tarjetas'>DESAPARICION DE ESPECIES</span>
                     <span className='subtitulo_tarjetas'>El cambio climático pone en riesgo la supervivencia de las especies terrestres y oceánicas. Estos riesgos aumentan a medida que ascienden las temperaturas. Debido a la potencia del cambio climático exacerbado, en el mundo se extinguen especies a un ritmo 1000 veces mayor que en cualquier otra época de la que se tenga constancia en la historia humana. Un millón de especies están en riesgo de extinguirse en las próximas décadas. Los incendios forestales, un clima extremo y la invasión de plagas con la aparición de enfermedades, todo esto está entre las amenazas relacionadas con el cambio climático. Algunas especies serán capaces de adaptarse geográficamente, pero otras, no.</span>
                     <a href='https://www.un.org/es/climatechange/science/causes-effects-climate-change' target={"_blank"}><button className="button_link">Leer mas</button></a>
                 </div>
                 <span className='sombra_tarjeta'></span>
             </div>

             <div className='tarjeta'>
                 <img src={"https://static.nationalgeographic.es/files/styles/image_3200/public/01-deforestation-disease.jpg?w=1600&h=900"} alt="" />
                 
                 <div className="data">
                    <span className='nro_tarjetas'>#4</span>
                     <span className='titulo_tarjetas'>POBREZA Y DESPLAZAMIENTO</span>
                     <span className='subtitulo_tarjetas'>El cambio climático aumenta los factores que llevan y mantienen a la gente en la pobreza. Las inundaciones pueden arrasar barrios marginales, destruyendo hogares y comunidades. El calor dificulta la ejecución de trabajos en el exterior. La escasez de agua puede afectar a los cultivos. Durante la última década (2010-2019), los sucesos relacionados con el clima desplazaron a un total aproximado de 23,1 millones de personas de media al año, aumentando sus probabilidades de caer en la pobreza. Muchos refugiados provienen de países que son más vulnerables y menos preparados para adaptarse a los efectos del cambio climático.</span>        
                     <a href='https://www.un.org/es/climatechange/science/causes-effects-climate-change' target={"_blank"}><button className="button_link">Leer mas</button></a>            
                 </div>
                 <span className='sombra_tarjeta'></span>
             </div>

             <div className='tarjeta'>
                 <img src={"https://www.fundacionaquae.org/wp-content/uploads/2020/03/efecto-invernadero-y-calentamiento-global.jpg.webp"} alt="" />
                 
                 <div className="data">
                    <span className='nro_tarjetas'>#5</span>
                     <span className='titulo_tarjetas'>ELEVACION DE LAS TEMPERATURAS</span>
                     <span className='subtitulo_tarjetas'>A medida que se eleva la concentración de gases de efecto invernadero, también lo hace la temperatura de la superficie del planeta. En la última década, del 2011 al 2020, se ha registrado el mayor calentamiento hasta la fecha. Desde los años 80, cada década ha sido más cálida que la anterior. En casi todas las zonas se han producido más olas de calor y días más calurosos. La elevación de las temperaturas provoca un aumento en las enfermedades relacionadas con el calor y hace que trabajar en exteriores sea más difícil. Se producen incendios incontrolados con mayor facilidad y se extienden más rápidamente cuando el ambiente es más cálido. Las temperaturas del Ártico se han elevado al menos el doble de rápido que la media mundial.</span>
                     <a href='https://www.un.org/es/climatechange/science/causes-effects-climate-change' target={"_blank"}><button className="button_link">Leer mas</button></a>
                 </div>
                 <span className='sombra_tarjeta'></span>
             </div>            
        </div>


        <div className="botones_tarjeta">
            <div className="button_next" onClick={(e)=>{handleClickNext(e)}}>
                <ion-icon name='arrow-back-outline'></ion-icon>
            </div>
            <div className="button_prev" onClick={(e)=>{handleClickPrev(e)}}>
                <ion-icon name='arrow-forward-outline'></ion-icon>
            </div>
            <hr></hr>
            <span className="nro_tarjeta">#1</span>
        </div>
    </div>
  )
}