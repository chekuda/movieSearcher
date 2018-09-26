import React, { Component } from 'react'

import PreviewerPage from '../../Pages/PreviewerPage'
import { get } from '../../helpers/customFetch'

class Previewer extends Component {
  state = {
    movies: []
  }

  retrieveData = (query, page) => {
    const currentPage = `&page=${page ? page : 1}`
    const currentQuery = `&query=${query ? query : 'mama'}`
    get('https://api.themoviedb.org/3/search/multi', `${currentQuery}${currentPage}`)
    .then(data =>
      this.setState({
        movies: data.results.filter(ele => ele.title && ele.backdrop_path)
      })
    )
  }

  onSearchChange = ({ target }) => {
    const { value } = target

    this.retrieveData(value)
    this.setState({
      searchText: value,
      searchStarted: true
    })
  }

  componentDidMount(){
    this.retrieveData()
  }
  render() {
    return (
      <PreviewerPage
        onSearchChange={this.onSearchChange}
        movies={this.state.movies}
        searchText={this.state.searchText}
        searchStarted={this.state.searchStarted}
      />
    )
  }
}

export default Previewer
