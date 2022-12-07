import PropTypes from 'prop-types'
import Card from "./Card"


function ReviewItem({item}) {
  return (
    <>
      <Card>
        <div className="num-display">{item.rating}</div>
        <p>{item.text}</p>
      </Card>
    </>
  )
}


ReviewItem.propTypes = {
  item: PropTypes.object,
}
export default ReviewItem