import '../styles.css'
import airbnbLogo from '../images/airbnb 1.png'

export default function Header() {
  return (
    <header>
      <img src={airbnbLogo} alt="logo"></img>
    </header>
  )
}