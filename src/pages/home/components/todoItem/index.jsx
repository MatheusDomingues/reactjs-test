import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  enve: {
    backgroundColor: '#ffffff'
  },
  odd: {
    backgroundColor: '#aaaaaa'
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

  return (
    <div id={id} className='item'>
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
