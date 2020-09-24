import React from 'react'
import { connect } from 'react-redux'

function ItemContainer(props) {
  return (
    <>
      <h2>ITEM - {props.item}</h2>
      <button>BUY ITEM</button>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemProps = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIcecreams
  return {
    item: itemProps
  }
}

export default connect (mapStateToProps)(ItemContainer)
