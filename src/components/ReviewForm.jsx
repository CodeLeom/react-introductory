import {useState} from 'react'
import Card from "./Card"
import Button from './Button'

function ReviewForm() {
    const [text, setText] = useState('')

    const textChangeHandler = (e) => {
        setText(e.target.value)
    }

  return (
    <Card>
        <form>
            <h4>Kindly Review Our Service You Just Experienced!</h4>
            <div className="input-group">
                <input onChange={textChangeHandler} type="text" placeholder="write us a review" value={text} />
                <Button type="submit">Submit</Button>
            </div>
        </form>
    </Card>
  )
}

export default ReviewForm
