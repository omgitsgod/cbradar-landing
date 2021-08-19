import badge from "./google-play-badge.png";
import './Hero.css'

function Hero() {
  return (
    <div className='hero-image'>
      <div className='hero-text'>
        <h1>CBRadar</h1>
        <p>Find a Citibike from you wrist</p>
        <a target="_" href='https://play.google.com/store/apps/details?id=com.penchen.cbradar'>
          <img alt='google play store' className='badge' src={badge} />
        </a>
      </div>
    </div>
  );
}

export default Hero;