import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    movies && (
      <div className="p-6">
        <div>
          <h1 className="text-2xl text-white px-6 py-2">{title}</h1>
          <div className="flex overflow-x-scroll scrollbar-hide">
            {movies.map((movie) => {
              return (
                <div className="w-72">
                  <MovieCard
                    key={movie.id}
                    title={movie.title}
                    posterPath={movie.poster_path}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
}

export default MovieList;
