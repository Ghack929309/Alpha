import React from "react";
import { TrashIcon } from "@heroicons/react/outline";
import useHover from "../hook/useHover";
const LikeItem = ({ src, removeFormLike, Trash }) => {
	const [hovered, ref] = useHover();

	return (
		<div className=" flex ">
			<i ref={ref} className="self-center ml-2 mr-auto cursor-pointer">
				{hovered ? (
					<Trash className="h-5 " onClick={() => removeFormLike(src.id)} />
				) : (
					<TrashIcon className="h-5" />
				)}
			</i>

			<img
				src={src.urls.raw}
				width="150px"
				className="ml-2"
				alt={src.urls.raw}
			/>
		</div>
	);
};

export default LikeItem;
