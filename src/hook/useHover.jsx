import { useState, useEffect, useRef } from "react";

const useHover = () => {
	const [hovered, setHovered] = useState(false);
	const ref = useRef(null);
	// mouse hover true
	const enter = () => {
		setHovered(true);
	};
	const leave = () => {
		setHovered(false);
	};

	useEffect(() => {
		ref.current.addEventListener("mouseenter", enter);
		ref.current.addEventListener("mouseleave", leave);
	}, []);
	return [hovered, ref];
};

export default useHover;
