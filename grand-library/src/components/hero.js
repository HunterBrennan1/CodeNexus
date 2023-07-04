import DeveloperGif from '../assets/imgs/developers-gif-showcase.gif';
import Blob from '../assets/imgs/blob.svg';



export const Hero = () => {
  return (
    <section className="homepage_wrapper">
      <div className="homepage_hero_container">
        <div className="homepage_hero_text_container">
          <h1 className="homepage_hero_title">Developing made easier for you!</h1>
          <p className="homepage_hero_text">find the perfect library or tool or get inspired by other developers.</p>
          <a className="explore_btn btn--primary">Start Exploring!</a>
          <a className="about_us_btn">Learn about us</a>
        </div>
        <div className='gif_container'>
          <img className='hero_gif' src={DeveloperGif}></img>
        </div>
      </div>
    </section>
  )
}

export default Hero;