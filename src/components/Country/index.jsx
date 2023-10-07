import styles from "./Country.module.scss";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
const Country = ({flags, name, population, capital, region}) => {
  
  return (
    <Link to={`/${name.common}`}>
      <div className={styles.countryInfo}>
      
        <img src={flags.svg} alt="" className={styles.flagSvg} />
        <ul>
        <h3>{name.common}</h3>
          <li className={styles.info}>
            {" "}
             Population: <span>{population.toLocaleString()}</span>
          </li>
          <li className={styles.info}>
            {" "}
            Region: <span>{region}</span>
          </li>
          <li className={styles.info}>
            {" "}
            Capital: <span>{capital}</span>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default Country;
