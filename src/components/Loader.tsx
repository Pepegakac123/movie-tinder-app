import { Loader2 } from "lucide-react";

const Loader = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-full bg-slate-600 bg-opacity-100 grid place-items-center">
			<div className="flex flex-col items-center justify-center min-h-screen">
				<Loader2 className="w-16 h-16 animate-spin text-white" />
				<p className="mt-4 text-xl font-medium font-bold text-slate-400">
					Loading
				</p>
			</div>
		</div>
	);
};
export default Loader;
