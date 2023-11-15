import { useSelector } from "react-redux";
import { BACKDROP_CDN } from "../../utils/constants";

function GptMovieSuggestions() {
  const movieSearchResult = useSelector(
    (store) => store.movies.movieSearchResult
  );
  return (
    movieSearchResult &&
    (movieSearchResult && movieSearchResult.backdrop_path ? (
      <div className="flex justify-center mt-10">
        <div className="bg-gray-900 text-white w-[19%] p-1  rounded-lg flex justify-center ">
          <div >
            <img
              src={BACKDROP_CDN + movieSearchResult.backdrop_path}
              alt="backdrop_path"
              className="rounded-xl  "
            />
            <h1 className="text-center font-bold text-2xl ">
              {movieSearchResult.title}
            </h1>
            <p className="font-bold text-xl p-2">Overview:</p>
            <p className="px-2  text-md">{movieSearchResult.overview}</p>
            <p className="font-bold text-xl p-2">
              Average Rating: {movieSearchResult.vote_average}
            </p>
            <p className="px-2 text-md"></p>
          </div>
        </div>
      </div>
    ) : (
      <div className="flex justify-center">
        <p className="font-bold text-white text-3xl mt-12">): Sorry the requested movie is not available.</p>
      </div>
    ))
  );
}

export default GptMovieSuggestions;
