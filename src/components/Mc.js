import React from 'react'
const Mc = (props) => {
  return (
    <div>
      <h1 class="driverName">{props.data.diver_name}</h1>
      <h3 class="phone">{props.data.phone}</h3>
    </div>
  )
}