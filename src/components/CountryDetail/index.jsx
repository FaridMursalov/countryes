import styles from "./CountryDetail.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Link, useParams } from "react-router-dom";
import Button from "../Button";

const Index = () => {
  const [detail, setDetail] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      setDetail(data[0]);
    };
    getCountry();
  }, [name]);

  console.log(detail);
  return (
    <>
      <div className={styles.countryDetails}>
        <span>
          {" "}
          <Link to={"/"}>
            <Button
              icon={
                <span class="material-symbols-outlined">
                  keyboard_backspace
                </span>
              }
              title={"Back"}
            />
          </Link>{" "}
        </span>
        <img className={styles.img} src={detail?.flags?.svg} alt="" />
        <div className={styles.container}>
          <div className={styles.detialInfo}>
            <div>
              <h3> {detail?.name?.common} </h3>
              <ul>
                <li>
                  Native Name:{" "}
                  <span>
                    {detail.name &&
                      Object.values(detail.name.nativeName)[0].common}
                  </span>{" "}
                </li>
                <li>
                  Population:{" "}
                  <span>{detail?.population?.toLocaleString()} </span>{" "}
                </li>
                <li>
                  Region: <span>{detail?.region}</span>{" "}
                </li>
                <li>
                  Sub Region: <span>{detail?.subregion}</span>{" "}
                </li>
                <li>
                  Capital: <span>{detail?.capital}</span>{" "}
                </li>
              </ul>
            </div>
            <ul>
              <li>
                Top Level Domain:{" "}
                <span>{detail.tld && Object.values(detail.tld)[0]}</span>{" "}
              </li>
              <li>
                Currenices:{" "}
                <span>
                  {" "}
                  {detail.currencies &&
                    Object.values(detail.currencies)[0].name}
                </span>{" "}
              </li>
              <li>
                Languages:
                {detail.languages &&
                  Object.values(detail.languages).map((language, index) => (
                    <span key={index}> {language} </span>
                  ))}
              </li>
            </ul>
          </div>
          <div>
            <h3>Border Countries:</h3>
            <span className={styles.borders}>
              {detail.borders &&
                Object.values(detail.borders).map((border) => (
                  <Button title={border} />
                ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
