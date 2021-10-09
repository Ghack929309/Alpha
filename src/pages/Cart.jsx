import React, { useContext, useState } from "react";
import { PictureContext } from "../context/Context";
import CartItem from "../components/CartItem";
import { TrashIcon } from "@heroicons/react/solid";
const Cart = () => {
	const { cartItems, removeFromCart, price, emptyCart } =
		useContext(PictureContext);
	const [placingOrder, setPlacingOrder] = useState(false);
	const totalCost = cartItems.length * 9.99;

	const orderHandler = () => {
		setPlacingOrder(true);
		setTimeout(() => {
			setPlacingOrder(false);
			emptyCart();
		}, 3000);
	};
	const itemsAdded = cartItems.map((item) => (
		<CartItem
			key={item.id}
			src={item}
			removeFromCart={removeFromCart}
			Trash={TrashIcon}
			price={price}
		/>
	));
	return (
		<main>
			<h1 className=" flex text-3xl  font-semibold justify-center mt-2">
				Check Out
			</h1>
			<div className=" w-screen flex flex-col space-y-4 items-start  ">
				{itemsAdded}
			</div>
			<p className=" flex justify-end text-2xl font-bold mr-3">
				Total:{" "}
				{totalCost.toLocaleString("en-US", {
					style: "currency",
					currency: "USD",
				})}
			</p>
			<div className="flex justify-center ">
				{cartItems.length > 0 ? (
					<button
						className="inline-flex items-center justify-center px-5 py-3 
                        border border-transparent text-base 
                        font-medium rounded-md text-red-600 bg-white hover:bg-red-50"
						onClick={orderHandler}
					>
						{placingOrder ? "Ordering..." : "Place Order"}
					</button>
				) : (
					<p className="text-xl">You have no item in your cart yet</p>
				)}
			</div>
		</main>
	);
};

export default Cart;
