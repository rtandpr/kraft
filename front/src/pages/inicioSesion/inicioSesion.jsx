import React, { useState, useEffect } from "react";
import styles from "./inicioSesion.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import iniImg from "../../assets/titSes.png"
import Input from "../../components/inputs/input";
import botonLog from "../../assets2/botonLog2.png"
import productosImg from "../../assets/productos.png";
import { Link, useNavigate } from "react-router-dom";
import usePageTracking from "../../hooks/useGa";
import Swal from "sweetalert2";
import LogoImg from "../../assets2/logo.png";
import titularIMG from "../../assets2/titular.png";

//importamos iconos
import iconoSes from "../../assets/ico_nombre.png";
import inconoPass from "../../assets/ico_contra.png";
import inconoPassDer from "../../assets/ico_ojo.png";
import kraft_heinz from "../../assets2/kraft_heinz.png";
import LogosRedes from "../../components/logosRedes/LogosRedes";



const InicioSesion = () => {
  usePageTracking()
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");


  useEffect(() => {

    document.title = 'Inicia Sesión / 7UP® & SCHWEPPES: ESTA PROMO ESTA DE MADRES';

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


  ///funcion para enviar la info al servidor
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Loading) return
    setLoading(true)

    let json = {
      pass: formData.Contraseña,
      email: formData.Correo,
    }

    try {
      const response = await fetch("http://localhost:3000/user/getUserByEmail", {
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
      localStorage.setItem("userData", JSON.stringify(data.data));

      navigate("/perfil")


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
      Correo,
      Contraseña
    } = formData;

    // Validar campos obligatorios y checkboxes obligatorios
    const camposCompletos = Correo && Contraseña


    return camposCompletos
  };

  ///Funcion para aplicar las validaciones
  const postResetPas = async () => {

    try {
      let json = {
        email: formData.Correo,
      }

      const response = await fetch("http://localhost:3000/user/generateTokenByUser", {
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
      html: '¿Querés que te enviemos un email para recuperarla?',
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
      <div style={{ height: "60px" }} className='divSpac'></div>
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

        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <Input
              placeholder="Correo electrónico"
              type="email"
              iconoIzq={iconoSes}
              handleChange={handleCorreo}
            //   borderErr={touchCorreo && formData.Correo == ""}
            //   msjErr={"El correo es obligatorio."}
            />
            <div style={{ width: "50px" }}></div>

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

          <p className={styles.p}>
            Si olvidaste tu contraseña, escribe tu correo electrónico
            <br />
            en el campo correspondiente, y da clic

            <a
              // href=""
              className={styles.a}
              onClick={recuperarPass}
              style={{ cursor: "pointer", borderBottom: "2px solid white" }}

            > a este enlace</a>


          </p>


          <p
            className={styles.p}>
            Si no tienes un cuenta,
            <Link
              to="/Registro"
              className={styles.a}
              onClick={recuperarPass}
            >regístrate aquí</Link>
          </p>
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
  )
}


export default InicioSesion