import Magnifiericon from '../assets/imgs/magnifiericon.svg'


export const Searchbar = () => {
  return (
    <section>
      <div className='search_wrapper'>
        <div className='search_container'>
          <img className='search_icon_left' src={Magnifiericon}></img>
          <input className='search_input' placeholder='Search by languages, styles, and more...'></input>
        </div>
      </div>
    </section>
  )
}

export default Searchbar;