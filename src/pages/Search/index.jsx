import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import "./Search.css";

const Search = () => {
  // useState()
  const [searchResults, setSearchResults] = useState([]);

  // QueryString Extracter
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const searchTerm = query.get("q");

  // Axios
  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.log(error); // 오류 발생 시 catch
    }
  };
  // useEffect()
  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

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
                  navigate(`${item.id}`);
                }}
              >
                <div className="movie_column-poster">
                  <img
                    src={movieImgURL}
                    alt="movie_poster"
                    className="movie_poster"
                  />
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
        <p>찾고자하는 검색어 "{searchTerm}"과 일치하는 영화가 없습니다.</p>
      </section>
    );
  }
};

export default Search;
