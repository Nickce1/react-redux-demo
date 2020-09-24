import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index'

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1)

  return (
    <>
      <p>Number of cakes: {props.numOfCakes}</p>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
  <button onClick={() => props.buyCake(number)}>BUY {number} CAKE</button>
    </>
  )
}

const mapStateToProps = state => ({
  numOfCakes: state.cake.numOfCakes
})

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(NewCakeContainer)
