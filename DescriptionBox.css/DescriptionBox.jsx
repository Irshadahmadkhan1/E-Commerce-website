import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p> An expansive online marketplace offering a diverse range of products from clothing and electronics to home goods and more,
            providing convenience and accessibility for shoppers worldwide. With user-friendly navigation and secure transactions,
            it's your go-to destination for all your shopping needs.</p>
            <p>An innovative e-commerce platform offering a diverse range of products, seamless user experience, and secure transactions, 
            providing customers with a convenient and enjoyable online shopping destination. Explore a curated selection of items and enjoy the ease of browsing,
            ordering, and doorstep delivery.</p>
        </div>
    </div>
  )
}

export default DescriptionBox