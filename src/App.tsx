import MoviesCard from "./components/MoviesCard";
import { Toaster } from "@/components/ui/toaster";
const App = () => {
	return (
		<main className="h-screen w-screen bg-slate-600 overflow-hidden grid content-center gap-y-8 ">
			<h1 className="text-3xl font-bold capitalize text-slate-200 text-center mt-8 ">
				Movie Tinder App
			</h1>
			<div className="h-full w-full  grid place-items-center content-center gap-y-8 ">
				<MoviesCard />
			</div>
			<Toaster />
		</main>
	);
};
export default App;
