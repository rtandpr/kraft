import React, { useEffect } from "react";
import styles from "./home.module.css";
import LogoImg from "../../assets2/logo.png";
import titularIMG from "../../assets2/titular.png";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import button from "../../assets2/boton.png";
import text2IMG from "../../assets2/texto_abajo.png";
import usePageTracking from "../../hooks/useGa";
import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";
///importamos las animaciones 
import { Zoom } from "react-awesome-reveal";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  const navigate = useNavigate();

  usePageTracking()
  const { ref, inView } = useInView({
    triggerOnce: false, // queremos que se repita
    threshold: 0.7,    // porcentaje visible para activar (20%)
  });


  ///animaciones con AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  useEffect(() => {
    const sectionId = localStorage.getItem('scrollTo');
    if (sectionId) {
      const scrollTo = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        localStorage.removeItem('scrollTo'); // Limpiamos después de hacer scroll
      };

      // Esperamos un poco para asegurar que el DOM ya está montado
      setTimeout(scrollTo, 300);
    }

    document.title = 'KRAFT HEINZ: SABE A GANAR EN VERANO, SABE A KRAFT HEINZ';

  }, []);



  const redirect = (param) => {

        const storedData = localStorage.getItem("userData");
        const dateUser = storedData ? JSON.parse(storedData) : null;
        
  
        
        navigate("/Registro")
  

  };

  return (
    <div className={styles.homeFondo}>
      {/* <Navbar></Navbar> */}
      <div className={styles.homeBackground}>

        <div className={styles.containerLogo} style={{ marginTop: "-40px" }}>

          <img
            src={LogoImg}
            className={styles.LogoImg}
          // data-aos="fade-right"
          />




        </div>

        <div className={styles.containerLogo} >
          <img
            // data-aos="zoom-in"
            src={titularIMG}
            className={styles.titularIMG}
          />
        </div>


        <div className={styles.contentText} >


          <p>Sube tu recibo de compra con productos participantes</p>


          <img
            // data-aos="zoom-in"
            src={button}
            className={styles.buttonLog}
            onClick={() => redirect("")}
          />

        </div>


        
        <div className={styles.footerRes}>
          <Footer></Footer>
        </div>


      </div>




    </div >
  );
}

export default Home;