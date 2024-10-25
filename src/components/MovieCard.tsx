import { Card, CardContent } from "@/components/ui/card";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { Movies, MovieCardSchema } from "@/types";

const MovieCard = ({ movie, handleRemove }: MovieCardSchema) => {
	const x = useMotionValue(0);
	const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]); // IF the x value reach -150  opacity value should be equal 0, IF the x == 0 opacity == 1 and so on
	const rotate = useTransform(x, [-150, 150], [-18, 18]);

	const handleDragEnd = () => {
		if (Math.abs(x.get()) > 50) {
			handleRemove(movie.id);
		}
	};

	return (
		<motion.div
			className="w-96 h-fit-content bg-slate-500 border-slate-400 rounded-xl overflow-hidden shadow-xl hover:cursor-grab active:cursor-grabbing"
			style={{ gridRow: 1, gridColumn: 1, x, opacity, rotate }}
			drag="x"
			dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }} // Values are sticking to the center if not moved enough
			onDragEnd={handleDragEnd}
		>
			<Card className="bg-slate-500 border-slate-500">
				<img
					src={movie.imageURL}
					alt={movie.title}
					className="h-auto w-full object-cover rounded-lg"
					draggable="false"
				/>
				<CardContent className="p-4">
					<div className="flex flex-col justify-between items-center mb-2">
						<h2 className="text-xl font-bold text-center">{movie.title}</h2>
						<span className="text-lg font-semibold">★ {movie.rating}/10</span>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
};
export default MovieCard;
