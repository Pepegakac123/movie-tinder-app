import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "@/context";

const Modal = ({
	movieSummary,
	movieTitle,
}: {
	movieSummary: string;
	movieTitle: string;
}) => {
	const context = useGlobalContext();
	if (!context) return null;
	const { isModalOpen, closeModal } = context;

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 grid place-items-center ${isModalOpen ? "z-10 opacity-100" : "hidden opacity-0"} transition-opacity duration-300`}
		>
			<div className="w-[50vw] max-h-[80vh] xl:w-[25vw] bg-gray-900 rounded-xl text-center flex flex-col gap-y-4 py-4 px-8 justify-center relative text-white shadow-lg overflow-auto">
				<h3 className="font-bold md:text-lg capitalize">{movieTitle}</h3>
				<p className="text-sm md:text-md text-wrap break-words">
					{movieSummary}
				</p>
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
