import React, { Component } from 'react'

import PreviewerPage from '../../Pages/PreviewerPage'
import { get } from '../../helpers/customFetch'

class Previewer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  retrieveData = query => {
    if(query) {
      get('https://api.themoviedb.org/3/search/multi', `&query=${query}`)
      .then(data =>
        this.setState({
          movies: (data.results || []).filter(ele => ele.title && ele.backdrop_path)
        })
      )
    } else {
        this.setState({ movies: [] })
    }
  }

  onSearchChange = ({ target }) => {
    const { value } = target
    this.retrieveData(value)
    this.setState({
      searchText: value
    })
  }

  render() {
    return (
      <PreviewerPage
        onSearchChange={this.onSearchChange}
        movies={this.state.movies}
        searchText={this.state.searchText}
      />
    )
  }
}

export default Previewer
