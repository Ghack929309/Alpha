import React, { useEffect, useState, createContext } from "react";
import { HeartIcon } from "@heroicons/react/outline";

export const PictureContext = createContext();

const Context = ({ children }) => {
	const [photos, setPhotos] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [likeItems, setLikeItems] = useState([]);

	const url =
		"https://api.unsplash.com/search/photos?query=office&client_id=U2FpiuL0JDWmByRIeERJbq5_y2o8r6Sa1XN7rfKMwTQ";
	// fetching data from unsplash api
	const fetchPhotos = async () => {
		const pictures = await fetch(url);
		const data = await pictures.json();
		setPhotos(data.results);
		return data.results;
	};
	useEffect(() => {
		fetchPhotos();
	}, []);

	// getting every item that have been stored in the local storage
	useEffect(() => {
		const cartFromLocal = JSON.parse(localStorage.getItem("cartItem"));
		cartFromLocal && setCartItems(cartFromLocal);
		const likeFromLocal = JSON.parse(localStorage.getItem("likeItem"));
		likeFromLocal && setLikeItems(likeFromLocal);
	}, []);

	// storing every item to local storage when items are added to cart or liked
	useEffect(() => {
		localStorage.setItem("cartItem", JSON.stringify(cartItems));
		localStorage.setItem("likeItem", JSON.stringify(likeItems));
	}, [cartItems, likeItems]);

	// add Item to cart
	const addToCart = (newItem) => {
		setCartItems((prev) => [...prev, newItem]);
	};

	// remove Item from the cart
	const removeFromCart = (id) => {
		const remove = cartItems?.filter((item) => item.id !== id);
		setCartItems(remove);
	};
	// remove item from favorite
	const removeFormLike = (id) => {
		const remove = likeItems?.filter((item) => item.id !== id);
		setLikeItems(remove);
	};
	// add Like item
	const addLike = (newItem) => {
		setLikeItems((prev) => [...prev, newItem]);
	};
	// remove like item
	const removeLike = (id) => {
		const remove = likeItems?.filter((like) => like.id !== id);
		setLikeItems(remove);
	};
	// empty all the item selected
	const emptyCart = () => {
		setCartItems([]);
	};
	// empty all element liked
	const emptyLike = () => {
		setLikeItems([]);
	};
	return (
		<PictureContext.Provider
			value={{
				photos,
				Icon: HeartIcon,
				addToCart,
				removeFromCart,
				removeFormLike,
				addLike,
				removeLike,
				cartItems,
				likeItems,
				price: 9.99,
				emptyCart,
				emptyLike,
			}}
		>
			{children}
		</PictureContext.Provider>
	);
};

export default Context;
