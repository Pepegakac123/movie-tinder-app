import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "@/context";

const Modal = ({
	movieSummary,
	movieTitle,
}: { movieSummary: string; movieTitle: string }) => {
	const context = useGlobalContext();
	if (!context) return null;
	const { isModalOpen, closeModal } = context;

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 grid place-items-center ${isModalOpen ? "z-10 opacity-100" : "hidden opacity-0"} transition-opacity duration-300`}
		>
			<div className="w-[25vw] h-[25vh] bg-gray-900 rounded-xl text-center grid place-items-center relative text-white shadow-lg">
				<h3>{movieTitle}</h3>
				<p>{movieSummary}</p>
				<button
					className="absolute top-3 right-3 text-lg bg-transparent border-transparent cursor-pointer text-white"
					onClick={closeModal}
				>
					<FaTimes />
				</button>
			</div>
		</div>
	);
};

export default Modal;
