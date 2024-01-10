import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../store/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const handleBackclick = () => {
    navigate("/");
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (id) => {
    //console.log('remove')
    dispatch(removeFromCart(id));
  };

  const price = cart.reduce((acc, curr) => acc + curr.price, 0);

  console.log(price);

  return (
    <div className="flex min-h-[50vh] flex-col justify-center items-center ">
      {cart && cart.length > 0 ? (
        <div className="flex justify-around w-full mt-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {cart?.map((product) => {
              return (
                <div className="group flex w-[250px]  h-[200px] mt-1 rounded-xl justify-center flex-col items-center gap-1 border-2 border-green-700 ">
                  <div className="h-[80px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="w-25 truncate mt-3 text-gray-700 font-bold text-lg">
                    <h1>{product.title.slice(0, 14)}...</h1>
                  </div>
                  <div className="flex items-center justify-center w-full mt-1">
                    <button
                      onClick={
                        cart.findIndex((item) => item.id === product.id) === -1
                          ? () => handleAddToCart(product)
                          : () => handleRemoveFromCart(product.id)
                      }
                      className={`p-1 ${
                        cart.findIndex((item) => item.id === product.id) === -1
                          ? "bg-green-600"
                          : "bg-red-500"
                      } text-white font-bold text-sm rounded hover:scale-95`}
                    >
                      {cart.findIndex((item) => item.id === product.id) === -1
                        ? "ADD TO CART"
                        : "REMOVE FROM CART"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div>
              <h1>Total Items : </h1>
              <p>{cart.length} Items</p>
            </div>
            <div>
              <h1>Total Price : </h1>
              <p>{price} &euro;</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-2xl">Cart is empty ! Please continue Shopping</p>
          <button
            onClick={handleBackclick}
            className="bg-blue-500 text-white font-semibold text-lg p-1 rounded hover:scale-95"
          >
            BACK TO SHOPE
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
