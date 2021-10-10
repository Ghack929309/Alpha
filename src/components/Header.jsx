import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/outline";
import { PictureContext } from "../context/Context";

const Header = ({ ShoppingFill, HeartFill }) => {
	const { cartItems, likeItems } = useContext(PictureContext);
	return (
		<div className="  flex bg-red-600 justify-between pr-4 pl-4 h-16 items-center text-white ">
			<Link to="/" className="text-2xl font-bold cursor-pointer">
				Alpha Bank
			</Link>
			<div className="flex flex-row space-x-4">
				{likeItems.length > 0 ? (
					<Link to="/like">
						<HeartFill className="h-8 cursor-pointer" />
					</Link>
				) : (
					<Link to="/like">
						<HeartIcon className="h-8 cursor-pointer" />
					</Link>
				)}
				{cartItems.length > 0 ? (
					<Link to="/cart">
						<ShoppingFill className="h-8 cursor-pointer" />
					</Link>
				) : (
					<Link to="/cart">
						<ShoppingCartIcon className="h-8 cursor-pointer" />
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
