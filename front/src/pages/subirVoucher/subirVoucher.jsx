import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./subirVoucher.module.css";
import Navbar from "../../components/navbar/navbar";
import botonLog from "../../assets2/bot_cargar.png"
import espacio_stv from "../../assets2/espacio_st.png";
import Swal from "sweetalert2";
import usePageTracking from "../../hooks/useGa";
import LogoImg from "../../assets2/logo.png";
import titularIMG from "../../assets2/titular.png";
import LogosRedes from "../../components/logosRedes/LogosRedes";
import kraft_heinz from "../../assets2/kraft_heinz.png";

const SubirVoucher = () => {
  const [imagenBase64, setImagenBase64] = useState(null);
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  usePageTracking()

  const inputRef = useRef(null);


  useEffect(() => {
    try {
      const storedData = localStorage.getItem("userData");
      const dateUser = storedData ? JSON.parse(storedData) : null;
      setData(dateUser);
    } catch (error) {
      navigate("/Registro")
    }
  }, []);


  const handleImagenChange = (e) => {

    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagenBase64(reader.result); // esto es la imagen en base64
    };
    reader.readAsDataURL(file);

  };

  const handleClickImagen = () => {
    inputRef.current.click(); // activa el input escondido
  };

  ///funcion para enviar la info al servidor
  const enviarImagen = async (e) => {

    if (!imagenBase64) {
      alert("Por favor selecciona una imagen antes de enviar.");
      return;
    }

    let json = {
      userId: data.id,
      img: imagenBase64
    }

    setLoading(true)
    try {
      const response = await fetch("https://kraft-production.up.railway.app/img/createImg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
      });

      const data = await response.json();

      if (data.success) {
        setLoading(false)
        navigate("/Perfil")
      }

      if (data.message == 'El usuario ya cargó esta imagen previamente.') {
        Swal.fire(
          "¡UPPPSS!",
          "ya cargó esta imagen previamente.",
          "error"
        );
      }

      console.log("data", data);

    } catch (error) {
      console.error("Error en el registro:", error);
      Swal.fire(
        "¡UPPPSS!",
        "Algo salió mal",
        "error"
      );
      setLoading(false)
    }

  };


  return (
    <div className={styles.Fondo}>
      <Navbar />

      <div style={{ height: "10px" }} className='divSpac'></div>

      <div className={styles.container}>

        <h1 className={styles.title}>
          <Link to={"/"}>
            <img
              src={LogoImg}
              className={styles.LogoImg}
            />
          </Link>
        </h1>

        <h1 className={styles.title}>
          <img
            src={titularIMG}
            className={styles.titularIMG}
          />
        </h1>


        <form className={styles.loginForm}>
          <p className={styles.p}>
            ¡Entre más vouchers registres, más oportunidades tienes de ganar!
          </p>

          <div className={styles.divUp}>
            <img
              src={espacio_stv}
              alt="espacio_stv"
              className={styles.espacio_stv}
              onClick={handleClickImagen}
              style={{ cursor: "pointer" }} // buena UX
            />
          </div>

          {/* Input para subir imagen */}
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleImagenChange}
            style={{ display: "none" }}
          />

          <h1 className={styles.title} style={{ marginTop: "40px", cursor: "pointer", }}>
            {
              !loading ? <img
                src={botonLog}
                alt="boton cargar"
                className={styles.titleImg2}
                onClick={enviarImagen}
              /> : <h2 style={{ fontSize: "60px", color: "white", position: "relative", top: "-60px" }}>Cargando...</h2>
            }

          </h1>


          {/* Mostrar imagen previa */}
          {imagenBase64 && (
            <div style={{ marginTop: "20px", maxWidth: "90%" }}>
              {/* <p style={{ color: "" }}>Previsualización:</p> */}
              <img src={imagenBase64} alt="preview" style={{ maxWidth: "100%", maxHeight: "300px", border: "2px solid white" }} />
            </div>
          )}
        </form>

      </div>

      <div className={styles.containerFooter}>
        {/* <Footer></Footer> */}
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
    </div>
  );
};

export default SubirVoucher;
