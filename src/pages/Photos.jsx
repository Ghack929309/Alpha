import React, { useContext } from "react";
import Image from "../components/Image";
import { PictureContext } from "../context/Context";

const Photos = () => {
	const { photos } = useContext(PictureContext);
	console.log(photos);

	return (
		<div className="grid grid-cols-16 gap-3 grid-flow-row-dense relative mt-2 mr-2 ml-2">
			{photos.map((photo) => (
				<Image key={photo.id} img={photo.urls.raw} photo={photo} />
			))}
		</div>
	);
};

export default Photos;
