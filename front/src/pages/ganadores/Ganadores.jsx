import React, { useEffect } from 'react';
import styles from './Ganadores.module.css';
import Navbar from '../../components/navbar/navbar';
import title from "../../assets/titulo_ganadores.png";
import Footer from '../../components/footer/footer';
import usePageTracking from "../../hooks/useGa";
import { Link } from 'react-router-dom';
import LogoImg from "../../assets2/logo.png";
import titularIMG from "../../assets2/titular.png";
import LogosRedes from '../../components/logosRedes/LogosRedes';
import kraft_heinz from "../../assets2/kraft_heinz.png";

const Ganadores = () => {
  usePageTracking();


  useEffect(() => {

    document.title = 'Ganadores / KRAFT HEINZ: SABE A GANAR EN VERANO, SABE A KRAFT HEINZ';

  }, []);


  return (
    <div className={styles.tycBackground}>
      <div className={styles.container}>
        <div className={styles.navbarStyles}>
          <Navbar></Navbar>
          <div style={{ height: "100px" }} className='divSpac'></div>

        </div>


        <h1 className={styles.title}>
          <Link to={"/"}>
            <img
              src={LogoImg}
              className={styles.LogoImg2}
            />
          </Link>
        </h1>


        <h1 className={styles.title}>
          <img
            src={titularIMG}
            className={styles.titularIMG}
          />
        </h1>

        <div className={styles.container2}>
          {/* <h1 className={styles.title}>
                <img src={title} alt="title" className={styles.titleImg} />
            </h1> */}
          <p className={styles.text}>
            Muy pronto tendremos aquí a los ganadores de nuestra promoción.
            <br />
            Mientras tanto <a href="inicioSesion">sigue participando</a>
          </p>
        </div>

        {/* <h1 className={styles.containImg}>
        <img src={ProductosImg} alt="ProductosImg" className={styles.porductosImg} />
     </h1> */}
      </div>

      {/* 

     <h1 className={styles.containImg2}>
        <img src={ballonder2} alt="ballonder2" className={styles.ballonder2} />
     </h1>

     <h1 className={styles.containImg3}>
        <img src={ballonder} alt="ballonder3" className={styles.ballonder} />
     </h1>


     <h1 className={styles.containImg4}>
        <img src={ballon1zq} alt="ballon1zq" className={styles.ballon1zq} />
     </h1> */}

        <footer className={styles.footer}>
          <div className={styles.links}>
            <Link to="/tyc">TÉRMINOS Y CONDICIONES</Link>
            <br className={styles.brResp} />
            <a href="https://www.kraftheinz.com/privacy-policy" target="_blank">
              AVISO DE PRIVACIDAD
            </a>
          </div>
          <div className={styles.social}>
            <LogosRedes></LogosRedes>
          </div>
          <div className={styles.logo}>
            <img src={kraft_heinz} alt="iniImg" className={styles.logoImg} />
          </div>
        </footer>


    </div>

  );
};

export default Ganadores;