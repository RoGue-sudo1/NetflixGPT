import { useSelector } from "react-redux"
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies"
import usePopularMovies from "../../hooks/usePopularMovies"
import useTopRatedMovies from "../../hooks/useTopRatedMovies"
import useUpcomingMovies from "../../hooks/useUpcomingMovies"
import GptSearch from "../GptSearch/GptSearchPage"
import Header from "../Header"
import MainContainer from "./MainContainer/MainContainer"
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer"


function Browse() {
  const gptSearchShow = useSelector(store=>store.gpt.gptSearchShow)
  
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
      <Header/>
     { gptSearchShow ? <GptSearch/> : 
     <>
      <MainContainer/>
      <SecondaryContainer/>
      </>}
    </div>
  )
}

export default Browse
