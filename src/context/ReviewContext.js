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
}, [])


const addReview = async (newReview) => {
  const res = await fetch('/review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newReview)
  })
    const data = await res.json()
    setReview([data, ...review])
  }

const deleteReview = async (id) => {
    if(window.confirm('Are you sure you want to delete this review from the review list?')){
      await fetch(`/review/${id}`, {
        method: 'DELETE'
      })
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