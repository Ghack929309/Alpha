import React, { useContext } from "react";
import Image from "../components/Image";
import { PictureContext } from "../context/Context";

const Photos = () => {
	const { photos, price } = useContext(PictureContext);
	console.log(photos);

	return (
		<div>
			<div className="bg-white">
				<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 className="sr-only">Products</h2>

					<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{photos?.map((photo) => (
							<section key={photo.id}>
								<Image img={photo.urls.raw} photo={photo} />

								<h3 className="mt-4 text-sm text-gray-700">
									{photo.user.name}
								</h3>
								<p className="mt-1 text-lg font-medium text-gray-900">
									{price}
								</p>
							</section>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Photos;
