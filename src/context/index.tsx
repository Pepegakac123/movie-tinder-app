import { createContext, useState, useContext } from "react";
import type { AppContextType } from "@/types";

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [swipeAnimation, setSwipeAnimation] = useState<{
		movieId: string;
		direction: "left" | "right";
	} | null>(null); // Which card have to be animated and to which direction

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const triggerSwipeAnimation = (
		//Initite the animation of the card that have to be swiped
		movieId: string,
		direction: "left" | "right",
	) => {
		setSwipeAnimation({ movieId, direction });
	};

	const resetSwipeAnimation = () => {
		setSwipeAnimation(null);
	};

	return (
		<AppContext.Provider
			value={{
				isModalOpen,
				openModal,
				closeModal,
				swipeAnimation,
				triggerSwipeAnimation,
				resetSwipeAnimation,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
