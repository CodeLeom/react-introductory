import {useState} from 'react'
import Card from "./Card"
import Button from './Button'
import GiveRating from './GiveRating'

function ReviewForm({handleAdd}) {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const textChangeHandler = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if (text !== '' && text.trim().length <=15){
            setMessage('input text must be above 15 characters')
            setBtnDisabled(true)
        }else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const formSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 15){
            const newReview = {
                text,
                rating
            }
            handleAdd(newReview)
            setText('')
        }
    }

  return (
    <Card>
        <form onSubmit={formSubmit}>
            <h4 className='head'>Kindly Review Our Service You Just Experienced!</h4>
            <GiveRating select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={textChangeHandler} type="text" placeholder="write us a review" value={text} />
                <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default ReviewForm
