import axios from "axios";
import styles from "./Search.module.scss";
import React, { useEffect } from "react";
// import React from 'react'

const index = ( {setCountries}) => {

const [searchInput,setSearchInput] = React.useState("")

const getSearchCountry =async (searchInput)=>{
const {data} = await axios.get(`https://restcountries.com/v3.1/name/${searchInput}`)
setCountries(data)
}



useEffect(()=>{

getSearchCountry(searchInput)

},[searchInput])



console.log(searchInput);

  return (
    
    <div className={styles.search}>


      <form className={styles.formInput}>
      <span className="material-symbols-outlined">
search
</span>
        <input  value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} type="search" placeholder="Search for a country..." className={styles.searchInput} />
      </form>
      
    </div>
  );
};

export default index;
