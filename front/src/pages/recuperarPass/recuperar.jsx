import React, { useEffect, useState } from "react";
import styles from "./recuperar.module.css";
import Navbar from "../../components/navbar/navbar";
import Input from "../../components/inputs/input";
import botonLog from "../../assets2/bot_recuperar.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import usePageTracking from "../../hooks/useGa";
import LogoImg from "../../assets2/logo.png";

//importamos iconos
import inconoPass from "../../assets/ico_contra.png";
import inconoPassDer from "../../assets/ico_ojo.png";



//importamos las imagenes de corazones
import LogosRedes from "../../components/logosRedes/LogosRedes";
import kraft_heinz from "../../assets2/kraft_heinz.png";
import titularIMG from "../../assets2/titular.png";



const RecuperarPass = () => {

  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");
  const { id } = useParams();
  usePageTracking()


  useEffect(() => {

    document.title = 'Recuperar Contraseña / KRAFT HEINZ: SABE A GANAR EN VERANO, SABE A KRAFT HEINZ';

  }, []);

  const [formData, setFormData] = useState({
    Correo: "",
    Contraseña: ""
  });

  const handleCorreo = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      "Correo": value
    }));

  };

  const handleContraseña = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      "Contraseña": value
    }));


  };

  useEffect(() => {

    console.log("id param", id);

  }, [id])


  ///funcion para enviar la info al servidor
  const handleSubmit = async (e) => {


    e.preventDefault();
    if (Loading) return
    setLoading(true)



    let json = {
      pass: formData.Contraseña,
      tokenResetPass: id,
    }

    try {
      const response = await fetch("https://kraft-production.up.railway.app/user/resetPass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }

      const data = await response.json();

      setLoading(false)
      console.log("data GET INFO USER", data);
      localStorage.setItem("userData", JSON.stringify(data.message));

      // Mostrar mensaje y redirigir
      Swal.fire({
        title: "¡Contraseña actualizada!",
        text: "Tu contraseña fue cambiada correctamente.",
        icon: "success",
        timer: 5000,
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/perfil");
      });


    } catch (error) {
      console.error("Error en el registro:", error);
      setLoading(false)
      Swal.fire(
        "¡UPPPSS!",
        "El Email o Contraseña que enviaste no está registrado o lo escribiste mal. <br> Por favor, intenta con otro número",
        "error"
      );
    }

  };


  ///Funcion para aplicar las validaciones
  const isFormValid = () => {
    const {
      Contraseña
    } = formData;

    // Validar campos obligatorios y checkboxes obligatorios
    const camposCompletos = Contraseña


    return camposCompletos
  };

  ///Funcion para aplicar las validaciones
  const postResetPas = async () => {

    try {
      let json = {
        email: formData.Correo,
      }

      const response = await fetch("https://kraft-production.up.railway.app/user/generateTokenByUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
      });

      if (!response.ok) {
        throw new Error("Error al enviar los datos");
      }

    } catch (error) {
      console.error("Error en el registro:", error);
      setLoading(false)
      Swal.fire(
        "¡UPPPSS! 😓",
        "Olvidaste escribir tu correo electrónico. Por favor, escríbelo e inténtalo nuevamente.",
        "error"
      );
    }


  };

  ///Funcion para aplicar las validaciones
  const recuperarPass = () => {

    Swal.fire({
      title: '¿Olvidaste tu contraseña?',
      html: '¿Quieres que te enviemos un email para recuperarla?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviarlo',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí podrías llamar a tu función para generar el token y enviar el correo
        Swal.fire({
          title: '¡Listo!',
          text: 'Te enviamos un mensaje a tu correo con instrucciones para recuperar tu contraseña.',
          icon: 'success'
        });

        postResetPas();

      } else {
        Swal.fire({
          title: 'Cancelado',
          text: 'No se envió ningún correo.',
          icon: 'info'
        });
      }
    });


  };



  return (
    <div className={styles.Fondo}>
      <Navbar></Navbar>
       <div style={{height:"10px"}} className='divSpac'></div> 
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

        <h1 className={styles.title}>
          {/* <img src={iniImg} alt="iniImg" className={styles.titleImg} /> */}
          <p style={{ fontWeight: "400" , color:"#1d40a0"}}>
            Crea una nueva contraseña
            y haz clic en el botón
          </p>
        </h1>

        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            {/* <Input
                          placeholder="Correo electrónico"
                          type="email"
                          iconoIzq={iconoSes}
                          handleChange={handleCorreo}
                        //   borderErr={touchCorreo && formData.Correo == ""}
                        //   msjErr={"El correo es obligatorio."}
                        /> */}

            <Input
              placeholder="Contraseña"
              type="password"
              iconoIzq={inconoPass}
              iconoDer={inconoPassDer}
              handleChange={handleContraseña}
            //   borderErr={touchconfirmarContraseña && formData.confirmarContraseña !== formData.Contraseña}
            //   msjErr={ "Las contraseñas no coinciden."}
            />
          </div>

          <h1 className={styles.title} style={{ marginTop: "40px" }}>
            <img
              src={botonLog}
              alt="iniImg"
              className={styles.titleImg2}

              onClick={isFormValid() ? handleSubmit : null}
              style={{
                filter: isFormValid() ? "none" : "grayscale(100%)",
                opacity: isFormValid() ? 1 : 0.5,
                pointerEvents: isFormValid() ? "auto" : "none",
                cursor: isFormValid() ? "pointer" : "not-allowed",
              }}
            />
          </h1>


        </form>

        {/* 
                <div >
                    <h1 className={styles.title} style={{marginTop:"40px"}}>
                        <img
                            src={productosImg}
                            className={styles.productosImg}
                            />                 
                    </h1>
                </div> */}
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


export default RecuperarPass