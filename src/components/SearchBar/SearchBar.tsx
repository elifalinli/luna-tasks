import { useState, FormEvent, ChangeEvent } from "react";
import "./SearchBar.css"
import { Article } from "../../types";

interface ISearchBar {
    onSearch: (keyword: string) => void;
    searchResults: Article[];
    searched: boolean;
    setSearched: (keyword: boolean) => void;
};
  

export function SearchBar ({onSearch, searchResults, searched, setSearched}: ISearchBar) {
    const [searchKeyword, setSearchKeyword] = useState<string>("")

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSearch(searchKeyword)
        setSearched(true)
        setSearchKeyword("")
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value)
    }
return (
    <>
     <form className="SearchBar" onSubmit={handleSearch}> 
    <label htmlFor="lsearch"></label>
    <input className="inputBar" type="search" id="lsearch" name="lsearch" placeholder="Search for a keyword" value={searchKeyword} onChange={handleChange}/>
    <button className="searchButton" type="submit" aria-label="Search the keyword in articles">🔍 </button> 
    </form>
    {searched && searchResults.length === 0 ? <p style={{display: "flex", justifyContent: "center"}}>Not found any results 💔. Try a different word?</p> : searchResults.length > 0 ? <p style={{display: "flex", justifyContent: "center"}}>We have found {searchResults.length} article{searchResults.length === 1 ? '! 💜' : 's! 💜'}  </p> : null}
    </>
)
}
