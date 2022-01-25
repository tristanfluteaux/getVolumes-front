import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [name, setName] = useState([]);

  useEffect(() => {
      const searchData = async () => {
            const results = await axios.get(`http://localhost:4000/guitars/${searchValue}`)
            setName(results.data)
        }
        searchData()
    }, [searchValue])


  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const resetInput = () => {
    setSearchValue("");
  };
  return (
    <>
    <div>

      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <input
          style={{ borderRadius: "30px", height: "35px", width: "200px", textAlign: "center" }}
          value={searchValue}
          onChange={handleChange}
          type="text"
          placeholder="Search"
          autoComplete="off"
          />
      </div>
      <div className='search-result'>
        <ul className='result-ul'>
          {searchValue &&
            name &&
            name.map((elem) => (
              <li key={elem.id}>
                <NavLink
                  onClick={resetInput}
                  className='suggest'
                  to={`/product/${elem.id}`}
                  >
                  {elem.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
            </div>
    </>
  );
};

export default SearchBar;
