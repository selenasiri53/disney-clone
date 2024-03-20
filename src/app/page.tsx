import MoviesCarousel from "@/components/ui/MoviesCarousel";
import { getUpcomingMovies, getTopRatedMovies, getPopularMovies } from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
// lib > getMovies.ts

  return (
    <main>
      {/* className="bg-red-500" */}

      {/* CarouselBannerWrapper */}

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}