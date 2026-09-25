import { useState } from "react";


const Search = ()=>{
    const [searchText, setSearchText] = useState("")
    const handleSubmit = (e) => {
  e.preventDefault();

  fetchData(searchText);

  navigate(`/search/${searchText}`);
};
   return(
    <input
        value={searchText}
        onChange ={(e)=> setSearchText(e.target.value)}
    />

   )

}

export default Search

