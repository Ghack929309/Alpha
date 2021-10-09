import React, { useContext } from "react";
import { PictureContext } from "../context/Context";
import LikeItem from "../components/LikeItem";
import { TrashIcon } from "@heroicons/react/solid";

const Like = () => {
	const { likeItems, removeFormLike, emptyLike } = useContext(PictureContext);

	const favoriteItem = likeItems.map((item) => (
		<LikeItem
			key={item.id}
			src={item}
			removeFormLike={removeFormLike}
			Trash={TrashIcon}
		/>
	));
	return (
		<div>
			<h1 className=" flex text-4xl  font-semibold justify-center mt-2">
				Your favorite items
			</h1>
			<div className=" w-screen flex flex-col space-y-4 items-start  ">
				{favoriteItem}
			</div>

			<div className="flex justify-center ">
				{likeItems.length > 0 ? (
					<button
						className="inline-flex items-center justify-center px-5 py-3 
                        border border-transparent text-base 
                        font-medium rounded-md text-red-600 bg-white hover:bg-red-50"
						onClick={() => emptyLike()}
					>
						Delete All
					</button>
				) : (
					<p className="text-xl pt-2">You have no favorite item</p>
				)}
			</div>
		</div>
	);
};

export default Like;
