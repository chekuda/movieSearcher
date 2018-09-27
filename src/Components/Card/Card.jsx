import React from 'react'

import './Card.scss'

import start from '../../assets/images/star-solid.svg'

const Card = ({
  id,
  title,
  backdrop_path,
  vote_average,
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
      <img className='card-image' src={`http://image.tmdb.org/t/p/w342/${backdrop_path}`} alt={title} />
      <section className={`description ${isActive}`}>
        <div className="title info">
          { title }
        </div>
        <div className="info-block">
          <div className="info">
            <img className="star" src={start} width="15" height="20"/>{ vote_average }
          </div>
        </div>
      </section>
    </article>
  )
}

export default Card