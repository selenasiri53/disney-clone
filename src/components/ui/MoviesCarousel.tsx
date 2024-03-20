import { Movie } from "../../../typings"
import MovieCard from "./MovieCard"
import { cn } from "@/lib/utils"

type Props = {
    title?: string; // ? - optional
    movies: Movie[];
    isVertical?: boolean; 
}

function MoviesCarousel({title, movies, isVertical}: Props) {
  return (
    <div className="z-50">
        <h2>{title}</h2>

        {/* cn - combines classNames (part of shadui installation) */}
        <div className={cn("flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide")}>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
  )
}

export default MoviesCarousel