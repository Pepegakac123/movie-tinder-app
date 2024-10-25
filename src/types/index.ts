export type Movies = {
	id: string;
	imageURL: string;
	title: string;
	summary: string;
	rating: number;
};

export type MovieCardSchema = {
	movie: Movies;
	handleRemove: (id: string) => void;
};
