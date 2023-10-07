import { useEffect } from "react";
import  Search  from '../Search';
import Select from "../Select";
import styles from "./countries.module.scss";
import Country from "../Country";
import axios from "axios";
const index = ({countries, setCountries}) => {
 
  
  const getCountries = async () => {
    const { data } = await axios.get(
      "https://restcountries.com/v3.1/all"
    );

    setCountries(data);
  };

 
  useEffect(() => {
    getCountries();
  
  }, []);
console.log(countries[0]);
  
  return (<>
  <div className={styles.search}><Search className={styles.input} countries={countries} setCountries={setCountries}/>
  <Select setCountries={setCountries} /></div>
    
    <div className={styles.countries}>
      {countries?.map((country) => (
        <Country key={country.name.common}  {...country} />
      ))}
    </div>
    </>
  );
};

export default index;
