import {Routes , Route} from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";
import MovieList from "../pages/MovieList";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";

const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
          <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home"/>}/>
            <Route path="movie/:id" element={<MovieDetail apiPath="movie/" />}/>
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />}/>
            <Route path="movies/topRated" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}/>
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
            <Route path="search" element={<Search apiPath="search/movie"/>}/>
            <Route path="*" element={<PageNotFound title="Page Not Found"/>} />
          </Routes>
    </div>
  );
}

export default AllRoutes;
