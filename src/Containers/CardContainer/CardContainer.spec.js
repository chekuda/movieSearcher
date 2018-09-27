import React from 'react'
import { shallow } from 'enzyme'

import CardContainer from './CardContainer'

describe('CardContainer', () => {
  describe('when trying to render the container', () => {
    const props = {
      movie: {
        id: 1,
        title: 'movie'
      }
    }
    const component = shallow(<CardContainer {...props} />)
    it('should render a card component with the props provided plus onOver handler', () => {
      const Card = component.find('Card')

      expect(Card.length).toBe(1)
      expect(Card.props().onCardHover).toEqual(component.instance().onCardHover)
      expect(Card.props().cardHovered).not.toBeDefined()
    })
    describe('when cardHolver is called with any id', () => {
      it('carHovered id should be saved in the state', () => {
        const cardId = 'id'
        const instance = component.instance()
        expect(instance.state.cardHovered).not.toBeDefined()
        instance.onCardHover(cardId)
        expect(instance.state.cardHovered).toBe(cardId)
      })
    })
  })
})