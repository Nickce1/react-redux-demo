import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../redux/index'

function NewIcecreamContainer(props) {
  const [number, setNumber] = useState(1)

  return (
    <>
      <p>Number of Icecreams: {props.numOfIcecreams}</p>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => props.buyIcecream(number)}>BUY {number} ICECREAM</button>
    </>
  )
}

const mapStateToProps = state => ({
  numOfIcecreams: state.icecream.numOfIcecreams
})

const mapDispatchToProps = dispatch => {
  return {
    buyIcecream: number => dispatch(buyIcecream(number))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(NewIcecreamContainer)