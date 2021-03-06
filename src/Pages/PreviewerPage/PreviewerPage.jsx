import React from 'react'

import SearchBar from '../../Components/SearchBar'
import CardContainer from '../../Containers/CardContainer'

import logo from '../../assets/images/ms.png'

import './PreviewerPage.scss'

export const MSG = {
  mainMsg: 'Please start your searching ...',
  noMoviesMsg: 'Oops!! Nothing match your search'
}

const PreviewerPage = ({ searchText, onSearchChange, movies }) => (
  <div className="previewer-container">
    <header className="previewer-header">
      <img className="logo" width="100" height="50" src={logo} alt="logo" />
      <div className="search">
        <SearchBar
          val={searchText}
          onChange={onSearchChange}
        />
      </div>
    </header>
    <main className="previewer-content">
    {
      searchText && movies.length > 0
        ? movies.map(movie =>
          <div key={movie.id} className="previewer-card">
              <CardContainer {...movie} />
          </div>
        )
        : <h1 className="previewer-message">{searchText ? MSG.noMoviesMsg : MSG.mainMsg}</h1>
    }
    </main>
  </div>
)

export default PreviewerPage
