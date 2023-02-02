import React from 'react'
const Reference = (props) => {
  return (
    <div>
      <h3 class="poNumber">{`PO#: `}{props.poNumber}</h3>
    </div>
  )
}
export default Reference