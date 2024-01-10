import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../store/slices/cartSlice'

const ProductItem = ({ product }) => {

  const  cart  = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  const handleRemoveFromCart = () => {
    //console.log('remove')
    dispatch(removeFromCart(product.id))
  }

  const isInCart = cart.findIndex(item => item.id === product.id)

  //console.log(cart)
  return (
    <div>
      <div className='group flex p-4 h-[360px] mt-10 ml-5 rounded-xl justify-center flex-col items-center gap-3 border-2 border-green-700' >
        <div className="h-[180px]">
          <img 
            src={product.image} 
            alt={product.title} 
            className='object-cover h-full w-full'
          />
        </div>
        <div className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
          <h1>{(product.title).slice(0, 14)}...</h1>
        </div>
        <div className='flex items-center justify-center w-full mt-5'>
          <button onClick={ isInCart === -1 ? handleAddToCart : handleRemoveFromCart } className={`p-2 ${ isInCart === -1 ? 'bg-green-600' : 'bg-red-500' } text-white font-bold text-lg rounded hover:scale-95`}>
            {
              isInCart === -1 ? 'ADD TO CART' : 'REMOVE FROM CART'
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem