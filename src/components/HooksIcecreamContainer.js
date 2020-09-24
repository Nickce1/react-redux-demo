import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIcecream } from '../redux/index'

function HooksIcecreamContainer() {
  const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return (
    <>
      <h2>Number of Icecreams: {numOfIcecreams}</h2>
      <button onClick={() => dispatch(buyIcecream())}>BUY ICECREAM</button>
    </>
  )
}

export default HooksIcecreamContainer
