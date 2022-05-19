import './styling/header.css';
import laptop4 from '../images/laptop4.png'
import arrow from '../images/arrow.png'
import TypeAnimation from 'react-type-animation';

const Header = () => {
  return (
    <div class='centering'>
      <div class='main'>
        <div class='text-wrapper'>
          <TypeAnimation
            cursor={true}
            sequence={['Hi!', 4000, 'I\'m Derek! :)', 4000, '']}
            wrapper="h1"
            repeat={Infinity}
          />
          <p1>a second year computer science student at UNSW</p1>
        </div>
        <img alt="laptop" src={laptop4}></img>
      </div>
      <a href='#scrollDest' id='arrow-link'><img alt="arrow" src={arrow} id='arrow'></img></a>
    </div>
  )
}

export default Header