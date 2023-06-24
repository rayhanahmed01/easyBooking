import React from "react"
import "./searchItem.css"
import {Link} from "react-router-dom"


const SearchItem = ({ item }) => {
  const discountPrice = () => {
    const discount = (item.cheapestPrice * 15) / 100
    const discountp = (item.cheapestPrice - discount)
    return discountp;
  }
  return (
    <div>
      <div className="stext">
        
        Here are the property of {item.city}
      </div>
      
    <div className='searchItem'>
        <img src={item.photos[1]}  className="siImg"/>
    
    <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Exellent</span>
          <button>{item.rating}</button>
        </div>}
          <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>    
          <span>Discount offer</span>
          <span>${discountPrice()} only</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
          </div>
        </div>
    </div>
    </div>
  )
}

export default SearchItem;