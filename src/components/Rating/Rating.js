import React from 'react'
import { Rating, RatingSpan } from './RatingStyles'

const Ratings = (props) => {
  const { rating, numReviews } = props

  return (
    <div>
      <Rating>
        <RatingSpan>
          <i
            className={
              rating >= 1
                ? 'fa fa-star'
                : rating >= 0.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>
        </RatingSpan>
        <RatingSpan>
          <i
            className={
              rating >= 2
                ? 'fa fa-star'
                : rating >= 1.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>
        </RatingSpan>
        <RatingSpan>
          <i
            className={
              rating >= 3
                ? 'fa fa-star'
                : rating >= 2.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>
        </RatingSpan>
        <RatingSpan>
          <i
            className={
              rating >= 4
                ? 'fa fa-star'
                : rating >= 3.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>
        </RatingSpan>
        <RatingSpan>
          <i
            className={
              rating >= 5
                ? 'fa fa-star'
                : rating >= 4.5
                ? 'fa fa-star-half-o'
                : 'fa fa-star-o'
            }
          ></i>
        </RatingSpan>
        <RatingSpan>{numReviews + ' reviews'}</RatingSpan>
      </Rating>
    </div>
  )
}

export default Ratings
