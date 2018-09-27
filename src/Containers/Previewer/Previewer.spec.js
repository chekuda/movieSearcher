import React from 'react'
import { shallow } from 'enzyme'

import { get } from '../../helpers/customFetch'

import Previewer from './Previewer'

jest.mock('../../helpers/customFetch')

const DUMMYDATA = {
  results: [
    { movie: 1, title: 'movie1', backdrop_path: 'dummy1' },
    { movie: 2, title: 'movie2', backdrop_path: 'dummy2' },
    { movie: 3 }
  ]
}
get.mockImplementation(() => Promise.resolve(DUMMYDATA))

describe('Previewer', () => {
  const component = shallow(<Previewer />)
  describe('when trying to render the previewer', () => {
    it('should render the previewer page', () => {
      expect(component.find('PreviewerPage').length).toBe(1)
    })
  })
  describe('when the search has changed', () => {
   describe('and search is not empty', () => {
     const dummySearch = { target: { value: 'dummyQuery' } }
     const instance = component.instance()

     it('should try to retrieve the data and save the data retrieved in the state', async () => {
        await instance.onSearchChange(dummySearch)
        expect(instance.state.movies).toEqual(DUMMYDATA.results.filter(ele => ele.title && ele.backdrop_path))
     })
     it('search text will be saved in the state', () => {
        expect(instance.state.searchText).toBe(dummySearch.target.value)
     })
   })
  })
})