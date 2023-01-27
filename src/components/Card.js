import '../styles.css'
import starImg from '../images/Star 1.png'

export default function Card(props) {
  return (
    <div className='card'>
      <div className='card--header'>
        <div className='card--tag'>
            {props.openSpots ? 'Online' : 'Sold Out'}
        </div>
        <img src={`images/${props.coverImg}`} className="card--logo" alt="card">
        
        </img>
      </div>
      
      <div className='card--star-section'>
        <img src={starImg} alt="star"></img>
        <p>
          <span>
            {props.stats.rating}
          </span>
           ({props.stats.reviewCount}) {props.location}
        </p>
      </div>
      <p className='card--title'>{props.title}</p>
      <p className='price'>
        <span>From ${props.price} </span>
        / person
      </p>
    </div>
  )
}