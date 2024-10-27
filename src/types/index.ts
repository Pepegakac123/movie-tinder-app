export type Movies = {
	id: string;
	imageURL: string;
	title: string;
	summary: string;
	rating: number;
};

export type MovieCardSchema = {
	movie: Movies;
	handleSwipe: (id: string, direction: "left" | "right") => void;
};

export type ControlPanelSchema = {
	movie: Movies;
	handleSwipe: (id: string, direction: "left" | "right") => void;
	isBeingSwiped: boolean;
};

export type AppContextType = {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	swipeAnimation: {
		movieId: string;
		direction: "left" | "right";
	} | null;
	triggerSwipeAnimation: (movieId: string, direction: "left" | "right") => void;
	resetSwipeAnimation: () => void;
};
