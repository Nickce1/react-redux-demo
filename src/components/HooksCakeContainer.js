import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/index'

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <>
      <h2>Num of cakes: {numOfCakes}</h2>
      <button onClick={() => {dispatch(buyCake())}}>BUY CAKE</button>
    </>
  )
}

export default HooksCakeContainer