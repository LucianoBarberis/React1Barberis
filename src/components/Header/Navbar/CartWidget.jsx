import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <figure className='cart'>
            <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/shopping-basket.png" alt="shopping-basket"/>
            <div className='counter'>1</div>
        </figure>
    )
}

export default CartWidget