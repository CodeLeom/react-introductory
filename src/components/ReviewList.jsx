import PropTypes from 'prop-types'
import ReviewItem from './ReviewItem'

function ReviewList({review, revDelete}) {
    if (!review || review.length === 0){
        return <p>No review Yet</p>
    }
  return (
    <>
    <div>
        {review.map((item) =>(
            <ReviewItem key={item.id} item={item} revDelete={revDelete} />
        ))}
    </div>
    </>
  )
}


ReviewList.propTypes = {
  review: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  )
}
export default ReviewList
