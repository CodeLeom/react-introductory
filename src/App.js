import {useState} from 'react'
import Header from "./components/Header"
import ReviewList from "./components/ReviewList"
import reviewData from './components/reviewData'


function App(){

    const [review, setReview] = useState(reviewData)

    const deleteReview = (id) => {
      if(window.confirm('Are you sure you want to delete this review from the review list?')){
      setReview(review.filter((item) => item.id !== id))
      }
    }
  
    
    return ( 
      <div className="container">
        
        <Header />
        <ReviewList review={review} revDelete={deleteReview} />
      </div>
    )
}


export default App




