import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index'

function CakeContainer(props) {
  return (
    <>
      <p>Number of cakes: {props.numOfCakes}</p>
      <button onClick={props.buyCake}>BUY CAKE</button>
    </>
  )
}

const mapStateToProps = state => ({
  numOfCakes: state.cake.numOfCakes
})

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(CakeContainer)
