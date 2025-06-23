import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./registro.module.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import iniImg from "../../assets/tit2.png"
import Input from "../../components/inputs/input";
import botonLog from "../../assets2/boton2.png"
import LogoImg from "../../assets2/logo.png";
import titularIMG from "../../assets2/titular.png";
//importamos iconos
import iconoSes from "../../assets/ico_nombre.png";
import inconoPass from "../../assets/ico_contra.png";
import inconoPassDer from "../../assets/ico_ojo.png";
import iconoCorreo from "../../assets/ico_correo.png";
import iconoTel from "../../assets/ico_telefono.png";
import VoucherBTN from "../../assets2/VoucherBTN.png"
import textoFooter from "../../assets2/texto_abajo.png"

//importamos las imagenes de corazones
import kraft_heinz from "../../assets2/kraft_heinz.png";
import Swal from "sweetalert2";
import usePageTracking from "../../hooks/useGa";
import LogosRedes from "../../components/logosRedes/LogosRedes";
import InputLarge from "../../components/inputLarge/inputLarge";
import Textarea from "../../components/textArea/textArea";


const Registro = () => {
  usePageTracking()


  useEffect(() => {

    document.title = 'Regístrate / KRAFT HEINZ: SABE A GANAR EN VERANO, SABE A KRAFT HEINZ';

  }, []);

  const [formData, setFormData] = useState({
    Nombres: "",
    Correo: "",
    Teléfono: "",
    userText: "",

  });

  const [touchName, setTouchName] = useState(false);
  const [touchCorreo, setTouchCorreo] = useState(false);
  const [touchTeléfono, setTouchTeléfono] = useState(false);
  const [touchText, setTouchText] = useState(false);
  const [imagenBase64, setImagenBase64] = useState(null);

  const [Loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));

    if (name == "aceptaPrivacidad") setTouchaceptaPrivacidad(true)
    if (name == "aceptaTerminos") setTouchaceptaTerminos(true)
    if (name == "aceptaInfo") setTouchaceptaInfo(true)
  };


  const handleName = (e) => {
    const { value } = e.target;

    // Permitir solo letras y espacios (con acentos y ñ)
    const soloLetras = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');

    setFormData((prevData) => ({
      ...prevData,
      "Nombres": soloLetras
    }));

    setTouchName(true);
  };



const handleCorreo = (e) => {
  const { value } = e.target;

  // // Regex básico para validar formato xxx@xxx.xxx
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // // Solo actualiza si el valor cumple el formato o está vacío (para permitir borrar)
  // if (value === '' || emailRegex.test(value)) {
    setFormData((prevData) => ({
      ...prevData,
      "Correo": value
    }));
  // }

  setTouchCorreo(true);
};



const handleTeléfono = (e) => {
  const { name, value } = e.target;

  // Eliminar todo lo que no sean números
  const soloNumeros = value.replace(/[^0-9]/g, '');

  setFormData((prevData) => ({
    ...prevData,
    "Teléfono": soloNumeros
  }));

  setTouchTeléfono(true);
};



  const handleText = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      "userText": value
    }));

    setTouchText(true)

  };






  ///funcion para enviar la info al servidor
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Loading) return
    setLoading(true)

    let json = {
      name: formData.Nombres,
      tel: formData.Teléfono,
      email: formData.Correo,
      userText: formData.userText,
      img: imagenBase64
    }


    console.log("json ", json);


    try {
      const response = await fetch("https://kraftweb-production.up.railway.app/user/createUser", {
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


      if (data.message == "Ya existe un usuario registrado con ese email.") {
        Swal.fire({
          title: "Error",
          text: "Ya existe un usuario registrado con ese email.",
          icon: "error",
          confirmButtonText: "OK"
        });
        return

      }

      navigate("/Final");

      // Swal.fire({
      //   title: "¡Listo!",
      //   text: "Para culminar tu registro, revisa el email que acabamos de enviarte y sigue las instrucciones.",
      //   icon: "success",
      //   confirmButtonText: "OK"
      // }).then(() => {
      //   navigate("/inicioSesion");
      // });



    } catch (error) {
      console.error("Error en el registro:", error);
      setLoading(false)
      alert("Ocurrió un error al registrar. Intenta nuevamente.");
    }

  };




  ///Funcion para aplicar las validaciones
  const isFormValid = () => {

    const {
      Nombres,
      Correo,
      Teléfono,
      userText
    } = formData;


    // Validar campos obligatorios y checkboxes obligatorios
    return Nombres && Correo && Teléfono && userText


  };


  //funcion para cargar la imagen 

  const inputRef = useRef(null);


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



  return (
    <div className={styles.Fondo}>
      {/* <Navbar></Navbar> */}
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

        <div style={{ width: "100%", display: "flex", justifyContent: "center" }} >


          <form className={styles.loginForm} >
            <div className={styles.formGroup}>
              <InputLarge
                placeholder="Nombre y apellido"
                type="text"
                iconoIzq={iconoSes}
                handleChange={handleName}
                borderErr={touchName && formData.Nombres == ""}
                msjErr={"El nombre es obligatorio."}
                value={formData.Nombres}
              />


            </div>

            <div className={styles.formGroup}>


              <Input
                placeholder="Número de teléfono"
                type="text"
                iconoIzq={iconoTel}
                handleChange={handleTeléfono}
                borderErr={touchTeléfono && formData.Teléfono == ""}
                msjErr={"El teléfono es obligatorio."}
                value={formData.Teléfono}
              />

              <div style={{ width: "100px" }} />

              <Input
                placeholder="E-mail"
                type="email"
                iconoIzq={iconoCorreo}
                handleChange={handleCorreo}
                borderErr={touchCorreo && formData.Correo == ""}
                msjErr={"El correo es obligatorio."}
                value={formData.Correo}
              />

            </div>


            <div className={styles.formGroup} >

              <img
                src={VoucherBTN}
                alt="img/subir voucher"
                className={styles.imgVoucher}
                onClick={handleClickImagen}
              />

              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleImagenChange}
                style={{ display: "none" }}
              />

            </div>




            <div className={styles.formGroup} >

              <Textarea
                placeholder="¿A qué te sabe Kraft Heinz?"
                type="text"
                iconoIzq={iconoSes}
                handleChange={handleText}
                borderErr={touchText && formData.userText == ""}
                msjErr={"La descripción es obligatoria."}
                minHeigth={"150px"}
              />

            </div>





            <h1 className={styles.title} style={{ marginTop: "70px" }}>
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

        </div>

        <footer className={styles.footer}>

          <div className={styles.formGroup} >

            <img src={textoFooter} alt="" className={styles.imgTexto} />

          </div>



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


export default Registro