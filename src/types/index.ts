export type Movies = {
	id: string;
	imageURL: string;
	title: string;
	summary: string;
	rating: number;
};

export type MovieCardSchema = {
	movie: Movies;
	handleSwipe: (id: string) => void;
};

export type AppContextType = {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
};
