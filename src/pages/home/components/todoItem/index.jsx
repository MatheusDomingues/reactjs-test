import React from 'react'

export default function Todo({ id, description, done }) {
  return (
    <div>
      <div>
        <div>{id} - {description}</div>
        <div >Feito? {done === true ? 'Sim' : 'Não'}</div>
      </div>
      <div>
        <button type="button" >Ok</button>
      </div>
    </div>
  )
}
