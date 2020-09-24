import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../redux/index'
import { buyCake } from '../redux/index'

function ItemContainer(props) {
  return (
    <>
      <h2>ITEM - {props.item}</h2>
      <button onClick={props.buyItem}>BUY ITEM</button>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemProps = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIcecreams
  return {
    item: itemProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyItem: ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream())
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ItemContainer)
