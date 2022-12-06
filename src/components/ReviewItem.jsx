function ReviewItem({item}) {
  return (
    <>
      <div className="card">
        <div className="num-display">{item.rating}</div>
        <p>{item.text}</p>
      </div>
    </>
  )
}

export default ReviewItem