import {useState} from 'react'
import Card from "./Card"
import Button from './Button'

function ReviewForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

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

  return (
    <Card>
        <form>
            <h4>Kindly Review Our Service You Just Experienced!</h4>
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
