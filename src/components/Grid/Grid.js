import React from 'react'
import classes from './Grid.module.css'
import Card from '../Card/Card'

const Grid = (props) => {
  return (
    <div className={classes.grid}>
      {props.emojis.map((emoji, index) => {
        return <Card emoji={emoji} key={index}/>
      })}
    </div>
  )
}

export default Grid