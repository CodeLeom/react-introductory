import {createContext, useState} from 'react'

const ReviewContext = createContext()

export const ReviewProvider = ({children}) => {
    const [review, setReview] = useState([{
        id: 1,
        text: 'Accumsan justo quisque curabitur dis iaculis facilisi erat nasc.',
        rating: 10
    }])

    return <ReviewContext.Provider value={{
        review,
    }}>
            {children}
    </ReviewContext.Provider>
}


export default ReviewContext