import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'
import ReviewItem from './ReviewItem'

function ReviewList() {
  const {review} = useContext(ReviewContext)
  
    if (!review || review.length === 0){
        return <p>No review Yet</p>
    }
  return (
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
