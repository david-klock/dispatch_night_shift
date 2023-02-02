import React from 'react'
const Driver = (props) => {
  return (
    <div>
      <ul>
        <li class="driverName">{`Driver: `}{props.driverName}</li>
        <li class="mcNumber">{`MC#: `}{props.mcNumber}</li>
        <li class="dotNumber">{`DOT#: `}{props.dotNumber}</li>
      </ul>
    </div>
  )
}
export default Driver