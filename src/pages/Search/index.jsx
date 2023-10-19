import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import "./Search.css";
import { useDebounce } from "../../hooks/useDebounce";

const Search = () => {
  // useState()
  const [searchResults, setSearchResults] = useState([]);

  // QueryString Extracter
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 지연 적용할 value와 지연 시간

  // Axios
  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${debouncedSearchTerm}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.log(error); // 오류 발생 시 catch
    }
  };

  // useEffect()
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const navigate = useNavigate();

  // Main Content
  if (searchResults.length > 0) {
    return (
      <section className="searchResult">
        {searchResults.map((item) => {
          if (item.backdrop_path !== null && item.media_type !== "person") {
            const movieImgURL = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`;
            return (
              <div
                className="movie"
                key={item.id}
                onClick={() => {
                  navigate(`/${item.id}`);
                }}
              >
                <div className="movie_column-poster">
                  <img
                    src={movieImgURL}
                    alt="movie_poster"
                    className="movie_poster"
                  />
                </div>
                <div
                  className="hoverSection"
                  onClick={() => {
                    navigate(`/${item.id}`);
                  }}
                >
                  <p className="movie_title">
                    {item.title ? item.title : item.name}
                    <span className="movie_launch">
                      {item.release_date ? item.release_date : ""}
                    </span>
                  </p>
                  <p>
                    {item.overview
                      ? `${item.overview.substring(0, 69)}...`
                      : ""}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return (
      <section className="noResult">
        <div className="noResultText"></div>
        <p>
          찾고자하는 검색어 "{debouncedSearchTerm}"과 일치하는 영화가 없습니다.
        </p>
      </section>
    );
  }
};

export default Search;
