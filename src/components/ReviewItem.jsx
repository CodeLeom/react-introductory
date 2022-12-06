import {useState} from 'react'

function ReviewItem() {
  const [rating, setRating] = useState(11)
  const [text, setText] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit.')

  const mdyState = () => {
    setRating(8)
    setText ('This is a new state of the text')
  }

  return (
    <>
      <div className="card">
        <div className="num-display">{rating}</div>
        <p>{text}</p>
        <button onClick={mdyState}>Click me</button>
      </div>
    </>
  )
}

export default ReviewItem