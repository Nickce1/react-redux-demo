import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../redux/index'

function IcecreamContainer(props) {
  return (
    <>
      <p>Number of Icecreams: {props.numOfIcecreams}</p>
      <button onClick={props.buyIcecream}>BUY ICECREAM</button>
    </>
  )
}

const mapStateToProps = state => ({
  numOfIcecreams: state.icecream.numOfIcecreams
})

const mapDispatchToProps = dispatch => {
  return {
    buyIcecream: () => dispatch(buyIcecream())
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(IcecreamContainer)
