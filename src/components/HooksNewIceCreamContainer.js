import React, { useState } from 'react'
import { buyIcecream } from '../redux/index'
import { useSelector, useDispatch } from 'react-redux'

function HooksNewIcecreamContainer(props) {
  const [number, setNumber] = useState(1)
  const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()

  return (
    <>
      <h2>Hooks new icecream container</h2>
      <p>Number of Icecreams: {numOfIcecreams}</p>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyIcecream(number))}>BUY {number} ICECREAM</button>
    </>
  )
}

export default HooksNewIcecreamContainer