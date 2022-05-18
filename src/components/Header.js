import './styling/header.css';
import laptop4 from '../images/laptop4.png'
import arrow from '../images/arrow.png'
const Header = () => {
  return (
    <div class='centering'>
      <div class='main'>
        <div class='text-wrapper'>
          <h1 id='name'>Hi, my name is Derek</h1>
          <p1 id='description'>a second year computer science student at UNSW</p1>
        </div>
        <img src={laptop4}></img>
      </div>
      <a href='#scrollDest' id='arrow-link'><img src={arrow} id='arrow'></img></a>
    </div>
  )
}

export default Header