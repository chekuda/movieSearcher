import React from 'react'
import { shallow } from 'enzyme'

import SearchBar from './SearchBar'

describe('SearchBar', () => {
  describe('when trying to render it', () => {
    const props = {
      onChange: jest.fn(),
      val: 'value'
    }
    const input = shallow(<SearchBar {...props}/>).find('.search-bar')
    it('should render input with props provided', () => {

      expect(input.length).toBe(1)
      expect(input.props().value).toBe(props.val)
    })
    describe('when change the input value', () => {
      it('onchange handler should be called', () => {
        const newValue = 'newValue'
        input.simulate('change', newValue)
        expect(props.onChange).toHaveBeenCalledWith(newValue)
      })
    })
  })
})