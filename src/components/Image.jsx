import React, { useContext, useState } from "react";
import { PictureContext } from "../context/Context";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/solid";
import useHover from "../hook/useHover";

const Image = ({ img, photo }) => {
	const {
		Icon,
		addToCart,
		removeFromCart,
		addLike,
		removeLike,
		cartItems,
		likeItems,
	} = useContext(PictureContext);
	const [hovered, ref] = useHover();
	const [changeToCart, setChangeToCart] = useState(false);
	const [changeToLike, setChangeToLike] = useState(false);

	const cartIcon = () => {
		const selectedItems = cartItems?.find((item) => item.id === photo.id);
		if (hovered && !selectedItems) {
			return (
				<PlusCircleIcon
					onClick={() => addToCart(photo)}
					className="h-8 text-red-400 absolute top-0 right-0 mt-2 ml-2 "
				/>
			);
		} else if (selectedItems) {
			return (
				<ShoppingCartIcon
					onClick={() => removeFromCart(photo.id)}
					className="h-8 text-red-400 absolute top-0 right-0 mt-2 ml-2 "
				/>
			);
		}
	};
	const likeIcon = () => {
		const selectedItems = likeItems.find((item) => item.id === photo.id);
		if (hovered && !selectedItems) {
			return (
				<Icon
					onClick={() => addLike(photo)}
					className="h-8 text-red-400 absolute top-0 left-0 mt-2 mr-2 "
				/>
			);
		} else if (selectedItems) {
			return (
				<HeartIcon
					onClick={() => removeLike(photo.id)}
					className="h-8 text-red-400 absolute top-0 left-0 mt-2 mr-2 "
				/>
			);
		}
	};

	return (
		<div
			ref={ref}
			className="w-full relative bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
		>
			<img
				src={img}
				alt="office"
				className="w-full h-full object-center object-cover "
			/>

			<div
				className="cursor-pointer"
				onClick={() => setChangeToLike(!changeToLike)}
			>
				{likeIcon()}
			</div>
			<div
				className="cursor-pointer"
				onClick={() => setChangeToCart(!changeToCart)}
			>
				{cartIcon()}
			</div>
		</div>
	);
};

export default Image;
