import { FaTimes, FaCheck, FaInfo } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import type { MovieCardSchema } from "@/types";
import Modal from "./modal";
import { useGlobalContext } from "@/context";
const ControlPanel = ({ movie, handleSwipe }: MovieCardSchema) => {
	const context = useGlobalContext();
	if (!context) return null;
	const { openModal, isModalOpen } = context;

	return (
		<>
			<Modal movieSummary={movie.summary} movieTitle={movie.title} />
			<section className="w-72 sm:w-96  py-4 flex justify-between align-center">
				<Button
					variant="outline"
					className="rounded-full  bg-red-600 h-12 w-12 border-none hover:bg-red-400 transition-all hover:scale-110 duration-300"
					onClick={() => handleSwipe(movie.id)}
				>
					<FaTimes className="h-16 w-16 text-white" />
				</Button>
				<Button
					variant="outline"
					className="rounded-full  bg-zinc-950 hover:bg-zinc-900 h-12 w-12 border-none transition-all hover:scale-110 duration-300"
					onClick={openModal}
				>
					<FaInfo className="h-16 w-16 text-white" />
				</Button>
				<Button
					variant="outline"
					className="rounded-full  bg-green-600 h-12 w-12 border-none hover:bg-green-400 transition-all hover:scale-110 duration-300"
					onClick={() => handleSwipe(movie.id)}
				>
					<FaCheck className="h-16 w-16" />
				</Button>
			</section>
		</>
	);
};
export default ControlPanel;
