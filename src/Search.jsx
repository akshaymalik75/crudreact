import { useState } from "react";

const Search = ({searchdata}) => {

    const [searchText , setSearchText]=useState('')

    const handleSubmit=(e)=>
    {   e.preventDefault()
       searchdata(searchText)
    }


    return (
        <div className="search-bar">
            <h3>Search:</h3>
            <form className="form" onSubmit={handleSubmit}>
                
            <input type="text"
            id="search"
            required
            value={searchText}
            onChange={(e)=>
            {
                setSearchText(e.target.value)
            }}
            placeholder="Backend or Frontend" />

            <button className="update-btn">Search</button>
            </form>
            
        </div>
      );
}
 
export default Search;