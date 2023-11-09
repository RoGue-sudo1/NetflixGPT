import { BACKDROP_CDN } from "../../../utils/constants";

function MovieCard({ posterPath, title }) {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img
        src={BACKDROP_CDN + posterPath}
        alt={title}
        className="rounded-md"
      />
    </div>
  );
}

export default MovieCard;
