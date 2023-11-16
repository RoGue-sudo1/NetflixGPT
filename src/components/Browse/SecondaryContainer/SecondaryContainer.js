import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  return (
    (nowPlayingMovies || popularMovies || topRatedMovies || upComingMovies) && (
      <div className="bg-black ">
        <div className=" pt-5 md:-mt-64 relative z-20 pl-2 md:pl-10">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Upcoming"} movies={upComingMovies} />
        </div>
      </div>
    )
  );
}

export default SecondaryContainer;
