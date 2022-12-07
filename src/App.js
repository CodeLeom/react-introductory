import {useState} from 'react'
import Header from "./components/Header"
import ReviewList from "./components/ReviewList"
import reviewData from './components/reviewData'


function App(){

    const [review, setReview] = useState(reviewData)

    
    return ( 
      <div className="container">
        
        <Header />
        <ReviewList review={review} />
      </div>
    )
}


export default App




