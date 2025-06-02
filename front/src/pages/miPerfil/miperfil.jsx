import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./miperfil.module.css";
import Navbar from "../../components/navbar/navbar";
import botonLog from "../../assets2/bot_cargar.png"
import LogoImg from "../../assets2/logo.png";
import titularIMG from "../../assets2/titular.png";

import usePageTracking from "../../hooks/useGa";

//importamos las imagenes de corazones
import LogosRedes from "../../components/logosRedes/LogosRedes";

import kraft_heinz from "../../assets2/kraft_heinz.png";

const MiPerfil = () => {
  const [data, setData] = useState(false);
  const [imgUser, setImgUser] = useState([]);
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  usePageTracking()

  useEffect(() => {
    try {
        const storedData = localStorage.getItem("userData");
        const dateUser = storedData ? JSON.parse(storedData) : null;
        setData(dateUser);            
    } catch (error) {
        navigate("/Registro")
    }

  }, []);


  useEffect(() => {

    document.title = 'Mi Perfil / KRAFT HEINZ: SABE A GANAR EN VERANO, SABE A KRAFT HEINZ';

  }, []);

    ///se carga la vista desde el top 
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  useEffect(() => {

    const fetchImage = async () => {
      
      if (data.id) {
        const json = {
          userId: data.id,
        };

        setLoading(true)

        try {
          const response = await fetch("https://kraft-production.up.railway.app/img/getImgByidUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(json),
          });

          const result = await response.json();
          console.log("prueba info", result);
          setImgUser(result.data)
        } catch (error) {
          console.error("Error en el registro:", error);
        } finally {
          setLoading(false)
        }
      }
    };

    fetchImage();

  }, [data.id]);


  const redirect = (param) => {
    navigate(param)
  };


  const deleteUser = async () => {

    // let json = {
    //   id: data.id,
    // }

    // try {
    //   const response = await fetch("https://kraft-production.up.railway.app/user/deleteUser", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(json),
    //   });


    //   const data = await response.json();

    //   console.log("data GET INFO USER", data);
    //   localStorage.setItem("userData", JSON.stringify(data.data));



    //   if (data?.message == "User deleted") {
    //     localStorage.setItem("userData", JSON.stringify(false));
    //     navigate("/Registro")
    //   }

    // } catch (error) {
    //   console.error("Error en el registro:", error);
    //   Swal.fire(
    //     "¡UPPPSS!",
    //     "Error al eliminar el usuario",
    //     "error"
    //   );
    // }

    localStorage.setItem("userData", JSON.stringify(false));
    navigate("/inicioSesion")
  };





  return (
    <div className={styles.Fondo}>
      <Navbar></Navbar>
      <div style={{ height: "10px" }} className='divSpac'></div>
      <div className={styles.container}>

        <h1 className={styles.title}>
          <Link to={"/"}>
            <img
              src={LogoImg}
              className={styles.titleImg}
            />
          </Link>
        </h1>

        <h1 className={styles.title}>
          <img
            src={titularIMG}
            className={styles.titularIMG}
          />
        </h1>

        {/* <h1 className={styles.title}>
          <img src={iniImg} alt="iniImg" className={styles.titleImg} />
        </h1> */}



        <div className={styles.contentUserData}>
          <div className={styles.datosUserDiv}>
            <div className={styles.datosUser}>
              <h1>{data?.name?.split(" ")[0]}</h1>
              <p className={styles.p1}>{data?.lastName?.split(" ")[0]}</p>

              <p className={styles.p2} onClick={deleteUser}>Cerrar sesión</p>
            </div>

            <h1 className={styles.title2} style={{ cursor: "pointer" }}>
              <img src={botonLog} alt="iniImg" className={styles.btnSend} onClick={() => redirect("/SubirVoucher")} />
            </h1>
          </div>

          <div className={styles.datosVucherDiv}>
            <div className={styles.datosImg}>

              {
                !Loading ? <>
                  <h1>Llevas {imgUser?.length > 0 ? imgUser?.length : 0} recibos de <br />pago subido(s)</h1>
                  <p className={styles.p1}>¡Entre más vouchers registres, más oportunidades tienes de ganar!</p>
                  <div
                    className={styles.containImgs}
                  >
                    {imgUser?.map((el, index) => (
                      <img
                        key={index}
                        src={el.img} // o solo el.img si es una URL
                        alt={`Imagen ${index + 1}`}
                        style={{
                          width: '200px',
                          height: 'auto',
                          borderRadius: '8px',
                          flexShrink: 0, // evita que se redimensionen
                        }}
                      />
                    ))}
                  </div>
                </> : <h2 className={styles.h2Mob} style={{ fontSize: "60px", color: "#2b469c;", position: "relative", top: "-60px" }}>Cargando...</h2>
              }

            </div>
          </div>

        </div>

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
  )
}


export default MiPerfil