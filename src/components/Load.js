import React from 'react'
const Load = (props) => {
  return (
    <div>
      <ul>
        <li class="origin">{`Origin: `} {props.origin}</li>
        <li class="departureTime">{props.departureTime}</li>
        <li class="destination">{`Destination: `}{props.destination}</li>
        <li class="arrivalTime">{props.arrivalTime}</li>
      </ul>
    </div>
  )
}
export default Load