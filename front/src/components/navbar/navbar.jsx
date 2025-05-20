import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css"; // Importar estilos como módulo
import Logo from "../../assets/logo.png";

import menu1 from "../../assets/menu_1.png";
import menu2 from "../../assets/menu_2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const redirect = (param) => {

    if (param == "/inicioSesion") {
      if (userData?.id) {
        navigate("/Perfil")
      } else {
        navigate("/inicioSesion")
      }

      return
    }
    navigate(param)
  };


  useEffect(() => {

    try {
      const storedData = localStorage.getItem("userData");
      const dateUser = storedData ? JSON.parse(storedData) : null;
      setUserData(dateUser);
    } catch (error) {
      console.log("ERROR", error);
    }

  }, []);





  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  



  return (
    <div className={!isScrolled ? styles.navbar : styles.navbartransparent}>
      {/* <div className={styles["navbar-logo"]}>
      <Link to="/">
      <div className={styles.containImg}>
        <img
          src={Logo}
          alt="7UP Logo"
          className={!isScrolled ? styles.imgresp : styles.imgrespScroll}
        />
      </div>
        </Link>
      </div> */}
      <div
        className={`${styles["navbar-links"]} ${isMenuOpen ? styles["menu-open"] : ""
          }`}
      >

        <Link to="/ganadores" style={{ textDecoration: 'none' }}>Ganadores</Link>
        {
          userData?.id ?
          <Link to='/Perfil' style={{ textDecoration: 'none' }}> {"Mi perfil"} </Link> : 
          <Link to='/inicioSesion' style={{ textDecoration: 'none' }}> {"Iniciar Sesión"} </Link> 
        }
        <Link to="/registro" style={{ textDecoration: 'none' }}>Regístrate</Link>

        {/* <button className={`${styles.btn} ${styles["btn-login"]}`} onClick={() => redirect("/inicioSesion")}>
           {userData?.id ? "Mi perfil" : "Iniciar Sesión"} 
        </button>

        <button className={`${styles.btn} ${styles["btn-register"]}`} onClick={() => redirect("/Registro")}>
          Regístrate
        </button> */}
      </div>
      <div className={styles["menu-toggle"]} onClick={toggleMenu}>
        {isMenuOpen ? <img src={menu2} alt="" /> : <img src={menu1} alt="" />}
        <i>

        </i>
      </div>
    </div>
  );
};

export default Navbar;