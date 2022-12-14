import {useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import Header from "./components/Header"
import ReviewStats from './components/ReviewStats'
import ReviewList from "./components/ReviewList"
import reviewData from './components/data/reviewData'
import ReviewForm from './components/ReviewForm'
import About from './components/pages/About'
import AboutLink from './components/AboutLink'


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
      <Router>
          <Header />
            <div className="container">
              <Routes>
                  
                    <Route exact path='/' element = {
                        <>
                          <ReviewForm handleAdd={addReview} />
                          <ReviewStats review={review} />
                          <ReviewList review={review} revDelete={deleteReview} />
                          <AboutLink />
                        </>
                          }
                    ></Route>
                    
                    
                    <Route path='/about' element={<About />} />
              </Routes>
              
            </div>
      </Router>
    )
}


export default App




