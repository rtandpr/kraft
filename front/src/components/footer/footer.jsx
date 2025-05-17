import React from 'react';
import styles from './footer.module.css';
import logoFb from '../../assets/facebook.png';
import logoRalph from '../../assets/Ralphs.png';
import { Link } from 'react-router-dom';
import productosImg from "../../assets/productos.png";
import LogosRedes from '../logosRedes/LogosRedes';

const Footer = () => {
  return (
    <>

      <footer className={styles.footer}>


        <div className={styles.links}>
          <Link to="/tyc">TÉRMINOS Y CONDICIONES</Link>
          <br className={styles.brResp} />
            <a href="https://www.kraftheinz.com/privacy-policy" target="_blank">
              AVISO DE PRIVACIDAD
            </a>        </div>
        <div className={styles.textjUST}>


          <span className={styles.promotion}>"Sorteo termina el 31 de julio de 2025. Puede participar toda persona mayor de edad, residente legal de PR. No es necesario comprar para participar y ganar.
            <br />
            Promotor: Kraft Foods Group Puerto Rico, LLC. Reglas oficiales en sabeakraftheinz.com
          </span>
        </div>

        <LogosRedes></LogosRedes>

      </footer>
    </>
  );
};

export default Footer;