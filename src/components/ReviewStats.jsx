import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'

function ReviewStats() {
  const {review} = useContext(ReviewContext)

     let avg = review.reduce((acc, cur) => {
        return acc + cur.rating
     }, 0) / review.length

     avg = avg.toFixed(1)

  return (
    <>
        <div className="review-stats">
            <h3>Total Reviews: {review.length}</h3>
            <h3>Average Rating: {isNaN(avg)? 0 : avg} </h3>
        </div>
    </>
  )
}

export default ReviewStats
