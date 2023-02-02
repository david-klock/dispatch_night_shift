import React from 'react'
const Mc = (props) => {
  return (
    <div>
      <h1 class="companyName">{props.companyName}</h1>
      <h2 class="mc">{`MC#: `} {props.mc}</h2>
      <h3 class="phone">{`Phone#: `}{props.phone}</h3>
    </div>
  )
}
export default Mc