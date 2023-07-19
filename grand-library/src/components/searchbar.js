import Magnifiericon from '../assets/imgs/magnifiericon.svg'
import React, { useEffect, useState } from 'react';
import { items } from './toolslist';
import Gradienthunt from '../assets/imgs/gradienthunt.PNG';
import Cardhero from './cardpagehero';
import Refresh from '../assets/imgs/refresh.svg';
import Boxshadow from "../assets/imgs/boxshadow.PNG";
import Haikei from "../assets/imgs/haikei.PNG";
import Bootstrap from "../assets/imgs/bootstrap.PNG";
import Keyframes from "../assets/imgs/keyframes.PNG";
import Fullpage from "../assets/imgs/fullpage.PNG";
import Anime from "../assets/imgs/animejs.PNG";
import Swiper from "../assets/imgs/swiperjs.PNG";
import Threejs from "../assets/imgs/threejs.PNG";
import Leaflet from "../assets/imgs/leaflet.PNG";
import Mui from "../assets/imgs/MUI.PNG";
import Reactbootstrap from "../assets/imgs/reactbootstrap.PNG";
import Nivo from "../assets/imgs/nivo.PNG";
import Undraw from "../assets/imgs/undraw.PNG";
import Framer from "../assets/imgs/framer.PNG";

export const Searchbar = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  let filters = ["Css", "JavaScript", "React"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory)
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const options = [
    { label: 'Gradient Hunt', image: Gradienthunt, link: 'https://gradienthunt.com/' },
    { label: 'Box-Shadow', image: Boxshadow, link: 'https://gradienthunt.com/' },
    { label: 'Haikei', image: Haikei, link: 'https://gradienthunt.com/' },
    { label: 'Bootstrap', image: Bootstrap, link: 'https://gradienthunt.com/' },
    { label: 'KeyFrames', image: Keyframes, link: 'https://gradienthunt.com/' },
    { label: 'FullPage.js', image: Fullpage, link: 'https://gradienthunt.com/' },
    { label: 'Anime.js', image: Anime, link: 'https://gradienthunt.com/' },
    { label: 'Swiper.js', image: Swiper, link: 'https://gradienthunt.com/' },
    { label: 'Three.js', image: Threejs, link: 'https://gradienthunt.com/' },
    { label: 'Leaflet.js', image: Leaflet, link: 'https://gradienthunt.com/' },
    { label: 'MUI', image: Mui, link: 'https://gradienthunt.com/' },
    { label: 'React-bootstrap', image: Reactbootstrap, link: 'https://gradienthunt.com/' },
    { label: 'Nivo', image: Nivo, link: 'https://gradienthunt.com/' },
    { label: 'Undraw.co', image: Undraw, link: 'https://gradienthunt.com/' },
    { label: 'Framer Motion', image: Framer, link: 'https://gradienthunt.com/' },
    // ...
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);

    // Filter options based on input value
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredOptions);
  };

  const handleOptionClick = (option) => {
    setSearchText(option.label);
    setSearchResults([]);
  };

  const handleClearInput = () => {
    setSearchText('');
    setSearchResults([]);
  };

  return (
    <section>
      <div className='search_wrapper'>
        <div className='search_container autocomplete'>
          <img className='search_icon_left' src={Magnifiericon}></img>
          <input type="text" value={searchText} onChange={handleInputChange} className='search_input' placeholder='Search or Filter by languages, styles, and more...'></input>
          <div>
            <button className="clear-button" onClick={handleClearInput}>

            </button>
          </div>
        </div>
        {searchResults.length > 0 && (
          <ul className="autocomplete-options">
            {searchResults.map((option) => (
              <li className='search_option' key={option.label} onClick={() => handleOptionClick(option)}>
                {option.image && (
                  <img
                    className="option-image"
                    src={option.image}
                    alt=""
                  />
                )}
                {option.label}

              </li>
            ))}
          </ul>
        )}

      </div>
      <div className='search_filter_wrapper'>
        <div className='search_filter_container'>

          <div>
            <Cardhero />
          </div>
          <div className='buttons_container_search'>
            {filters.map((category, idx) => (
              <button onClick={() => handleFilterButtonClick(category)} className={`filter_button ${selectedFilters?.includes(category) ? "active" : ""}`} key={`filters-${idx}`}>
                {category}
              </button>
            ))}
          </div>
          <div className='item_container'>
            {filteredItems.map((item, idx) => (
              <div key={`items-${idx}`} className="item">
                <p className='card_name'>{item.name}</p>
                <img className='item_img' src={item.image} alt=""></img>
                <p className='card_desc'>{item.desc}</p>
                <div className='category_container'>
                  <p className='category'>{item.category}</p>
                  <a className='live_link_btn' href={item.link} target="_blank">{item.button}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Searchbar;