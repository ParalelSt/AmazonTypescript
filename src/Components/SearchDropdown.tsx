import { SearchDropdownContainer } from "./SearchDropdown.styled";

function SearchDropdown() {
  return (
    <>
      <SearchDropdownContainer>
        <select name="search-navigation" id="searchNav">
          <option value="all-departments">All departments</option>
          <option value="alexa-skills">Alexa Skills</option>
          <option value="amazon-devices">Amazon Devices</option>
          <option value="amazon-global-store">Amazon Global Store</option>
          <option value="amazon-warehouse">Amazon Warehouse</option>
          <option value="apps-and-games">Apps & games</option>
          <option value="audible">Audible Audiobooks</option>
          <option value="baby">Baby</option>
          <option value="beauty">Beauty</option>
          <option value="books">Books</option>
          <option value="vehicle">Car & Motorbike</option>
          <option value="music">CDs & Vinyl</option>
          <option value="classical">Classical Music</option>
          <option value="computers">Computers & Accessories</option>
          <option value="deals">Deals</option>
          <option value="digital-music">Digital Music</option>
          <option value="diy">DIY & Tools</option>
          <option value="diy-storage">DIY & Blu-ray</option>
          <option value="electronics">Electronics & Photo</option>
          <option value="fashion">Fashion</option>
          <option value="fashion-women"> Women</option>
          <option value="fashion-men"> Men</option>
          <option value="fashion-girls"> Girls</option>
          <option value="fashion-boys"> Boys</option>
          <option value="fashion-baby"> Baby</option>
          <option value="outdoor">Garden & Outdoor</option>
          <option value="gift-cards">Gift Cards</option>
          <option value="grocery">Grocery</option>
          <option value="handmade">Handmade</option>
          <option value="drugstore">Health & Personal Care</option>
          <option value="kitchen">Home & Kitchen</option>
          <option value="industrial">Industrial & Scientific</option>
          <option value="digital-text">Kindle Store</option>
          <option value="appliances">Large Appliances</option>
          <option value="lighting">Lighting</option>
          <option value="luggage">Luggage and travel gear</option>
          <option value="luxury">Luxury Stores</option>
          <option value="musical-equipment">
            Musical Instrument & DJ Equipment
          </option>
          <option value="video-games">PC & Video Games</option>
          <option value="pets">Pet Supplies</option>
          <option value="luxury-beauty">Premium Beauty</option>
          <option value="instant-video">Prime Video</option>
          <option value="software">Software</option>
          <option value="sports">Sports & Outdoors</option>
          <option value="office-products">Stationery & Office Supplies</option>
          <option value="subscribe-and-save">Subscribe & Save</option>
          <option value="toys">Toys & Games</option>
        </select>
      </SearchDropdownContainer>
    </>
  );
}

export default SearchDropdown;
