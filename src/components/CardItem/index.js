// Write your code here.
import './index.css'

const Card = props => {
  const {cardDetails} = props

  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card`}>
      <h1>{title}</h1>

      <p>{description}</p>

      <img src={imgUrl} className="cardImage" alt={title} />
    </li>
  )
}

export default Card
