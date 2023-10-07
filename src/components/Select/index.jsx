import { useEffect, useState } from "react";
import styles from "./selection.module.scss";
import axios from "axios";
// eslint-disable-next-line react/prop-types
const Select = ({setCountries}) => {
  const [select, setSelect] = useState("");



    
    const getSelectRegion = async (region) => {
      if (region === "") {
        const { data } = await axios.get(`https://restcountries.com/v3.1/all`);
        setCountries(data);
      } else {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/region/${region}`
        );
        setCountries(data);
      }
    };

  

useEffect(()=>{
getSelectRegion(select)



},[select])


console.log(select);
  return (
    <div className={styles.selectContainer}>
      {" "}
      <select name="" id="" value={select} onChange={(e)=>setSelect(e.target.value)}  className={styles.select}>
        <option className={styles.option} value="">
          {" "}
          Filter by Region
        </option>
        <option className={styles.option} value="Africa">
          Africa
        </option>
        <option className={styles.option} value="America">
          America
        </option>
        <option className={styles.option} value="Asia">
          Asia
        </option>
        <option className={styles.option} value="Europe">
          Europe
        </option>
        <option className={styles.option} value="Oceania">
          Oceania
        </option>
      </select>{" "}
    </div>
  );
};

export default Select;
