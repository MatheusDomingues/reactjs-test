import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  enve: {
    backgroundColor: '#ffffff'
  },
  odd: {
    backgroundColor: '#dddddd'
  }
}))

export default function Todo ({ id, description, done }) {
  const classes = useStyles()

  useEffect(() => {
    const items = document.querySelectorAll('.item')
    items.forEach(item => filledItem(item))
  }, [])

  const filledItem = (item) => {
    if (item.id % 2 === 0) {
      item.classList.add(classes.enve)
    } else {
      item.classList.add(classes.odd)
    }
  }

  const alreadyDone = done
    ? <p style={{ color: 'green', margin: 0, marginLeft: 5 }}>Sim</p>
    : <p style={{ color: 'red', margin: 0, marginLeft: 5 }}>Não</p>

  return (
    <div id={id} className='item'>
      <div>
        <div>{id} - {description}</div>
        <div style={{ display: 'flex' }}>Feito? {alreadyDone}</div>
      </div>
      <div>
        <button type="button" >Ok</button>
      </div>
    </div>
  )
}
