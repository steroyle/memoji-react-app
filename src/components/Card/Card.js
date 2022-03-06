import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {

  const handleCardClick = (event) => {
    console.log(event.target.innerText)
  }


  return (
    <div className={classes.card} onClick={handleCardClick}>
      {props.emoji}
    </div>
  )
}

export default Card