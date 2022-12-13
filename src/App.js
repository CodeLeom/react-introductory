import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header"
import ReviewStats from './components/ReviewStats'
import ReviewList from "./components/ReviewList"
import reviewData from './components/data/reviewData'
import ReviewForm from './components/ReviewForm'


function App(){

    const [review, setReview] = useState(reviewData)

    const addReview = (newReview) => {
      newReview.id = uuidv4()
      setReview([newReview, ...review])
    }
    
    const deleteReview = (id) => {
      if(window.confirm('Are you sure you want to delete this review from the review list?')){
      setReview(review.filter((item) => item.id !== id))
      }
    }
  
    
    return ( 
      <>
        <Header />
          <div className="container">
            <ReviewForm handleAdd={addReview} />
            <ReviewStats review={review} />
            <ReviewList review={review} revDelete={deleteReview} />
          </div>
      </>
    )
}


export default App




