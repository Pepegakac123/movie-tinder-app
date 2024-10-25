import { movies } from "../utils";
import type { Movies } from "../types";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const MoviesCard = () => {
	return (
		<>
			{movies.map((movie) => {
				return (
					<motion.div
						key={movie.id}
						className="w-96 h-fit-content bg-slate-500 border-slate-400 rounded-xl overflow-hidden shadow-xl"
						style={{ gridRow: 1, gridColumn: 1 }}
						drag="x"
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
									<h2 className="text-xl font-bold text-center">
										{movie.title}
									</h2>
									<span className={`text-lg font-semibold`}>
										★ {movie.rating}/10
									</span>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				);
			})}
		</>
	);
};

export default MoviesCard;
