import Magnifiericon from '../assets/imgs/magnifiericon.svg'
import React, { useEffect, useState } from 'react';
import { items } from './toolslist';
import Gradienthunt from '../assets/imgs/gradienthunt.PNG';
import Cardhero from './cardpagehero';

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

  return (
    <section>
      <div className='search_wrapper'>
        <div className='search_container'>
          <img className='search_icon_left' src={Magnifiericon}></img>
          <input className='search_input' placeholder='Search or Filter by languages, styles, and more...'></input>
        </div>
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