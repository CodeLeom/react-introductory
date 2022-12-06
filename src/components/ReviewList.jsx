import ReviewItem from './ReviewItem'

function ReviewList({review}) {
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
