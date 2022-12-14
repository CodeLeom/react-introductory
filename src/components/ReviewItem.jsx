import PropTypes from 'prop-types'
import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'
import Card from "./Card"
import { FaTimes } from 'react-icons/fa'


function ReviewItem({item}) {
  const {deleteReview} = useContext(ReviewContext)
  
  return (
    <>
      <Card>
        <div className="num-display">{item.rating}</div>
          <button onClick={() => {deleteReview(item.id)}} className='close'>
            <FaTimes color='#FF6A95' />
          </button>
        <p>{item.text}</p>
      </Card>
    </>
  )
}


ReviewItem.propTypes = {
  item: PropTypes.object,
}
export default ReviewItem