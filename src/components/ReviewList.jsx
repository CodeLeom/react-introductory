import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'
import ReviewItem from './ReviewItem'
import Spinner from './Spinner'

function ReviewList() {
  const {review, isLoading} = useContext(ReviewContext)
  
    if (!isLoading && (!review || review.length === 0)){
        return <p>No review Yet</p>
    }
  return isLoading ? <Spinner /> : (
    <>
    <div>
        {review.map((item) =>(
            <ReviewItem key={item.id} item={item} />
        ))}
    </div>
    </>
  )
}


export default ReviewList
