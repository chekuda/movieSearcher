import React from 'react'
import { shallow } from 'enzyme'

import PreviwerPage, { MSG } from './PreviewerPage'

describe('Previewer Page', () => {
  const props = {
    movies: [],
    onSearchChange: jest.fn(),
    searchText: ''
  }
  describe('when trying to render', () => {
    const component = shallow(<PreviwerPage {...props}/>)
    it('should render the container', () => {
      expect(component.find('.previewer-container').length).toBe(1)
    })
    it('should render a header', () => {
      expect(component.find('.previewer-header').length).toBe(1)
    })
    it('should render the logo', () => {
      expect(component.find('.logo').length).toBe(1)
    })
    it('should render the search bar with the search text and the onSearch handler', () => {
      expect(component.find('.search').length).toBe(1)
      expect(component.find('SearchBar').length).toBe(1)
      expect(component.find('SearchBar').props()).toEqual({ val: props.searchText, onChange: props.onSearchChange })
    })
    it('should render the content tag', () => {
      expect(component.find('.previewer-content').length).toBe(1)
    })
  })
  describe('when trying to render the component', () => {
    describe('and the user has not started the search', () => {
      const component = shallow(<PreviwerPage {...props}/>)
      it('should render the main message as a previewer message', () => {
        const previewerMsg = component.find('.previewer-message')

        expect(previewerMsg.text()).toBe(MSG.mainMsg)
      })
    })
    describe('and the user has started the search', () => {
      const newProps = {
        ...props,
        searchText: 'text'
      }
      describe('and not movies are feched', () => {
        const component = shallow(<PreviwerPage {...newProps}/>)
        it('should render the main message as a previewer message', () => {
          const previewerMsg = component.find('.previewer-message')

          expect(previewerMsg.text()).toBe(MSG.noMoviesMsg)
        })
      })
      describe('and there are some movies feched', () => {
        const currentProps = {
          ...newProps,
          movies: [{ name: 'movie' }, {name: 'second-movie'}]
        }
        const component = shallow(<PreviwerPage {...currentProps}/>)
        it('will render as many card as movies received', () => {
          expect(component.find('CardContainer').length).toBe(currentProps.movies.length)
        })
      })
    })
  })
})