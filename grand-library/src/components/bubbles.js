import Penicon from '../assets/imgs/penicon.svg'
import Database from '../assets/imgs/sqlicon.svg'
import Computericon from '../assets/imgs/computericon.svg'
import Layers from '../assets/imgs/layerstackicon.svg'
import Magnifier from '../assets/imgs/magnifiericon.svg'


export const Bubbles = () => {
  return (
    <section className="bubbles_section_wrapper">
      <div className="bubbles_container">
        <div className="bubble">
          <div className='bubble_inside'>
            <img className="bubble_img" src={Penicon}></img>
            <h2 className="bubble_title">Styling Tools</h2>
            <p className="bubble_text">Find useful tools for creative inspiration</p>
          </div>
        </div>
        <div className="bubble">
          <div className='bubble_inside'>
            <img className="bubble_img" src={Database}></img>
            <h2 className="bubble_title">Save Tools</h2>
            <p className="bubble_text">Login and save apps to your homepage</p>
          </div>
        </div>
        <div className="bubble">
          <div className='bubble_inside'>
            <img className="bubble_img" src={Computericon}></img>
            <h2 className="bubble_title">Design Smart</h2>
            <p className="bubble_text">Work smarter not harder!</p>
          </div>
        </div>
        <div className="bubble">
          <div className='bubble_inside'>
            <img className="bubble_img" src={Layers}></img>
            <h2 className="bubble_title">For Developers</h2>
            <p className="bubble_text">Made by developers, For developers</p>
          </div>
        </div>
        <div className="bubble">
          <div className='bubble_inside'>
            <img className="bubble_img" src={Magnifier}></img>
            <h2 className="bubble_title">Look Around!</h2>
            <p className="bubble_text">Searching made easier for you</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bubbles;