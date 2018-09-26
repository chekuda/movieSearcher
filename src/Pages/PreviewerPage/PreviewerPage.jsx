import React from 'react'

import SearchBar from '../../Components/SearchBar'
import CardContainer from '../../Containers/CardContainer'

import logo from '../../Assets/images/ms.png'

import './PreviewerPage.scss'

const PreviewerPage = ({ searchText, onSearchChange, movies, searchStarted }) => (
  <div className="previewer-container">
    <header className="previewer-header">
      <img width="100" height="50" src={logo} alt="logo" />
      <div className="search">
        <SearchBar
          val={searchText}
          onChange={onSearchChange}
        />
      </div>
    </header>
    <main className="previewer-content">
     {
       searchStarted
        ? movies.map(movie =>
          <div key={movie.id} className="previewer-card">
              <CardContainer {...movie} />
          </div>
        )
        : <h1 className="previewer-message">Please start your searching ...</h1>
     }
    </main>
  </div>
)

export default PreviewerPage
