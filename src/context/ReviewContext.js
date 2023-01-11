import {v4 as uuidv4} from 'uuid'
import {createContext, useState, useEffect} from 'react'
// import reviewData from '../components/data/reviewData'

const ReviewContext = createContext()

export const ReviewProvider = ({children}) => {
    // const [review, setReview] = useState(reviewData) //data coming from the default review data
    const [review, setReview] = useState([]) //data coming from the mock backend
    const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  fetch('/review?_sort=id&_order=desc')
    .then(res => res.json())
    .then(data => {
      setReview(data)
      setIsLoading(false)
    })
})

const addReview = (newReview) => {
    newReview.id = uuidv4()
    setReview([newReview, ...review])
  }

const deleteReview = (id) => {
    if(window.confirm('Are you sure you want to delete this review from the review list?')){
    setReview(review.filter((item) => item.id !== id))
    }
  }

    return <ReviewContext.Provider value={{
        review,
        isLoading,
        deleteReview,
        addReview
    }}>
            {children}
    </ReviewContext.Provider>
}


export default ReviewContext