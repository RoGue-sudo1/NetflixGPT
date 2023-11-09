import useNowPlayingMovies from "../../hooks/useNowPlayingMovies"
import usePopularMovies from "../../hooks/usePopularMovies"
import useTopRatedMovies from "../../hooks/useTopRatedMovies"
import useUpcomingMovies from "../../hooks/useUpcomingMovies"
import Header from "../Header"
import MainContainer from "./MainContainer/MainContainer"
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer"


function Browse() {
  
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse