import { useSelector } from "react-redux";
import { BACKDROP_CDN } from "../../utils/constants";

function MovieSuggestions() {
  const movieSearchResult = useSelector(
    (store) => store.movies.movieSearchResult
  );
  return (
    movieSearchResult &&
    (movieSearchResult && movieSearchResult.backdrop_path ? (
      <div className="flex justify-center mt-10">
        <div className="bg-gray-900 text-white md:w-[19%] w-[75%] p-1  rounded-lg flex justify-center ">
          <div  >
            <img
              src={BACKDROP_CDN + movieSearchResult.backdrop_path}
              alt="backdrop_path"
              className="rounded-xl  "
            />
            <h1 className="text-center font-bold text-2xl ">
              {movieSearchResult.title}
            </h1>
            <p className="font-bold text-xl max-md:hidden p-2">Overview:</p>
            <p className="px-2  text-md max-md:hidden">{movieSearchResult.overview}</p>
            <p className="font-bold text-xl text-center p-2">
              Average Rating: {movieSearchResult.vote_average}
            </p>
            <p className="px-2 text-md"></p>
          </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-wrap align-middle pl-14 md:p-2 justify-center">
        <p className="font-bold text-white text-3xl mt-12">): Sorry the requested movie is not available.</p>
      </div>
    ))
  );
}

export default MovieSuggestions;
