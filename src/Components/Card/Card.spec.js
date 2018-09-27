import React from 'react'
import { shallow, mount } from 'enzyme'

import Card from './Card'

describe('Card', () => {
  const props = {
    id: 'id',
    title: 'title',
    backdrop_path: 'bpath',
    vote_average: 'rate',
    cardHovered: 'id',
    onCardHover: jest.fn()
  }
  describe('when trying to render the car', () => {
    const component = shallow(<Card {...props}/>)
    it('should render the card', () => {
      expect(component.find('.card').length).toBe(1)
    })
    it('should render the image with the right source', () => {
      const cardImage = component.find('.card-image')

      expect(cardImage.length).toBe(1)
      expect(cardImage.props().src).toBe(`http://image.tmdb.org/t/p/w342/${props.backdrop_path}`)
    })
    it('should render description section', () => {
      expect(component.find('.description').length).toBe(1)
    })
    it('should render the title', () => {
      expect(component.find('.title').props().children).toBe(props.title)
    })
    it('should render the rate section', () => {
      expect(component.find('.info-block .info').props().children.length).toEqual(2)
      expect(component.find('.info-block .info').props().children[1]).toEqual(props.vote_average)
    })
    describe('and the id of the car is the same as the one hovered', () => {
      it('should render an active card', () => {
        expect(component.find('.description.active').length).toBe(1)
      })
    })
    describe('and the id of the car is different as the one hovered', () => {
      const newComponent = shallow(<Card {...{ ...props, cardHovered: 'id-1' }}/>)
      it('should render an unactive card', () => {
        expect(newComponent.find('.description.inactive').length).toBe(1)
      })
    })
    describe('and the user mouse enter in the card', () => {
      it('the card hovered handler should be fired with the card id', () => {
        component.simulate('mouseenter')
        expect(props.onCardHover).toHaveBeenCalledWith(props.id)
      })
    })
    describe('and the user mouse leave in the card', () => {
      it('the card hovered handler should be fired with the card id', () => {
        jest.resetAllMocks()
        component.simulate('mouseleave')

        expect(props.onCardHover).not.toHaveBeenCalledWith(props.id)
      })
    })
  })
})