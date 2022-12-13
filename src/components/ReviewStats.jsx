import PropTypes from 'prop-types'

function ReviewStats({review}) {

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

ReviewStats.propTypes = {
  review: PropTypes.array
}
export default ReviewStats
