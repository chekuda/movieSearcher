import React, { Component } from 'react'

import Card from '../../Components/Card'

class CardContainer extends Component {
  state = {}

  onCardHover = id => {
    this.setState({
      cardHovered: id
    })
  }

  render() {
    return (
      <Card
        {...this.props}
        onCardHover={this.onCardHover}
        cardHovered={this.state.cardHovered}
      />
    )
  }
}

export default CardContainer