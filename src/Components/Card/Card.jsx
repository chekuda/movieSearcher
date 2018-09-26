import React from 'react'

import './Card.scss'

const Card = ({
  id,
  title,
  backdrop_path,
  vote_average,
  release_date,
  original_language,
  cardHovered,
  onCardHover
}) => {
  const isActive = id === cardHovered ? 'active' : 'inactive'
  return (
    <article
      className="card"
      onMouseEnter={() => onCardHover(id)}
      onMouseLeave={() => onCardHover()}
    >
      <img src={`http://image.tmdb.org/t/p/w342/${backdrop_path}`} alt={title} />
      <section className={`description ${isActive}`}>
        <div className="title info">
          { title }
        </div>
        <div className="info-block">
          <div className="info">
            { vote_average }
          </div>
          <div className="info">
            { release_date }
          </div>
          <div className="info">
            { original_language }
          </div>
        </div>
      </section>
    </article>
  )
}

export default Card