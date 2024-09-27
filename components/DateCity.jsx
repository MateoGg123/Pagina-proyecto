import React from 'react'

export const DateCity = ({date}) => {
  let year = date.substring(0,4)
  let month = date.substring(5,7)
  let day = date.substring(8,10)
  let hour = date.substring(11,20)

  
  return (
    <div className='date_city_search'>
      <div className="datetime">
        <div className="date">
          <span id="dayname">{day}</span>/
          <span id="month">{month}</span>/
          <span id="year">{year}</span>
        </div>
        <div className="time">
          <span id="hour">{hour}</span>
        </div>
      </div>
    </div>
  )
}
