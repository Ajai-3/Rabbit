import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "Shirt",
      size: "M",
      color: "Red",
      price: 100,
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Pant",
      size: "M",
      color: "Blue",
      price: 200,
      quantity: 1,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Shoes",
      size: "M",
      color: "Black",
      price: 300,
      quantity: 1,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 4,
      name: "Watch",
      size: "M",
      color: "Black",
      price: 400,
      quantity: 1,
      image: "https://picsum.photos/200?random=4",
    },
    {
      productId: 5,
      name: "Bag",
      size: "M",
      color: "Black",
      price: 500,
      quantity: 1,
      image: "https://picsum.photos/200?random=5",
    },
    {
      productId: 6,
      name: "Hat",
      size: "M",
      color: "Black",
      price: 600,
      quantity: 1,
      image: "https://picsum.photos/200?random=6",
    },
    {
      productId: 7,
      name: "Shirt",
      size: "M",
      color: "Black",
      price: 700,
      quantity: 1,
      image: "https://picsum.photos/200?random=7",
    },
    {
      productId: 8,
      name: "Pant",
      size: "M",
      color: "Black",
      price: 800,
      quantity: 1,
      image: "https://picsum.photos/200?random=8",
    },
    {
      productId: 9,
      name: "Shoes",
      size: "M",
      color: "Black",
      price: 900,
      quantity: 1,
      image: "https://picsum.photos/200?random=9",
    },
    {
      productId: 10,
      name: "Watch",
      size: "M",
      color: "Black",
      price: 1000,
      quantity: 1,
      image: "https://picsum.photos/200?random=10",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b border-gray-800"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover mr-4 rounded"
            />

            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border border-gray-500 hover:border-rabbit-green hover:text-rabbit-green rounded w-7 h-7 font-medium text-md text-gray-500">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border border-gray-500 hover:border-rabbit-green hover:text-rabbit-green rounded w-7 h-7 font-medium text-md text-gray-500">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>₹ {product.price.toLocaleString()}</p>
            <button><RiDeleteBin3Line className="mt-2 w-6 h-6 text-red-500" /> </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
