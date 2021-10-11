import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/outline";
import { PictureContext } from "../context/Context";

const Header = ({ ShoppingFill, HeartFill }) => {
	const { cartItems, likeItems } = useContext(PictureContext);
	return (
		<div className="  flex bg-red-600 justify-between pr-4 pl-4 h-16 items-center text-white ">
			<Link to="/" className="text-3xl font-bold cursor-pointer">
				Alpha Bank
			</Link>
			<div className="flex flex-row space-x-4">
				{likeItems.length > 0 ? (
					<Link to="/like">
						<HeartFill className="  h-10 cursor-pointer relative" />
					</Link>
				) : (
					<Link to="/like">
						<HeartIcon className="h-10 cursor-pointer" />
					</Link>
				)}
				{cartItems.length > 0 ? (
					<Link to="/cart">
						<ShoppingFill className="h-10 cursor-pointer relative" />
						<span class=" absolute top-0 right-0 inline-flex items-center justify-center px-2 py-2 mr-2 text-sm font-bold leading-none text-red-100 bg-red-600 rounded-full">
							{cartItems.length}
						</span>
					</Link>
				) : (
					<Link to="/cart">
						<ShoppingCartIcon className="h-10 cursor-pointer" />
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
