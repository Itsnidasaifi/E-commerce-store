
import React from 'react'
import '../styles/card.css'

const Card = ({item, handleClick}) => {
  // console.log("the types is",typeof handleClick)
  return (
    <div className="cards">
        <div className="image_box">
            <img src={item.image} alt='item.name'/>
        </div>
        <div className="details">
            <p>{item.name}</p>
            <p>{item.author}</p>
            <p>Price -{item.price}Rs</p>
            <button onClick={()=>handleClick(item)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card

