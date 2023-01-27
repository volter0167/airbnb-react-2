import Card from "./Card";
import '../styles.css'
import offerCards from '../data/offerCards'

export default function CardList() {
  const renderedCards = offerCards.map(card => {
    return <Card
      key={card.id}
      {...card}
      />
  })
  return (
    <div className="card-list"> 
      {renderedCards}
    </div>
  )
}