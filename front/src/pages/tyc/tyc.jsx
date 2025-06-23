import React, { useEffect } from 'react';
import styles from './tyc.module.css';
import Navbar from '../../components/navbar/navbar';
import title from "../../assets/tituloc.png";
import Footer from '../../components/footer/footer';
import usePageTracking from "../../hooks/useGa";
import LogosRedes from '../../components/logosRedes/LogosRedes';

import kraft_heinz from "../../assets2/kraft_heinz.png";
import titularIMG from "../../assets2/titular.png";
import { Link } from 'react-router-dom';
import LogoImg from "../../assets2/logo.png";

const TyC = () => {
  usePageTracking()
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Términos & Condiciones / KRAFT HEINZ: SABE A GANAR EN VERANO, SABE A KRAFT HEINZ';

  }, []);


  return (
    <div className={styles.tycBackground} id='tyc'>
      <div style={{ height: "60px" }} className='divSpac'></div>
      <div className={styles.container}>
        <div className={styles.navbarStyles}>
          {/* <Navbar></Navbar> */}
        </div>

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


        <div className={styles.container2}>
          {/* <h1 className={styles.title}>
                <img src={title} alt="title" className={styles.titleImg} />
            </h1> */}



          <h1 style={{ textAlign: "center", color: "white" }}>
            Reglas Oficiales de la Promoción <br />
            Sabe A KraftHeinz con KraftHeinz <br />
            27 de mayo al 31 de julio de 2025
          </h1>


          <h2 className={styles.text} style={{color:"#1d40a0"}}>
            NADA QUE COMPRAR PARA PARTICIPAR O GANAR.
          </h2>

          <p className={styles.text}>
            1)   Elegibilidad: El Sorteo Sabe A KraftHeinz con KraftHeinz (el "Sorteo") está abierto sólo a los residentes legales de Puerto Rico que tengan 18 años o más al momento de la inscripción y solo es válido en el archipiélago de Puerto Rico. Empleados y contratistas de The KraftHeinz Company, distribuidores de KraftHeinz, RosadoToledo&, y sus respectivas compañías matrices, subsidiarias, afiliadas y agentes, y los proveedores de premios y las agencias que participan en el desarrollo o la ejecución de este sorteo o cualquiera de sus materiales, y la familia inmediata (cónyuge, madre/padre, hermanos e hijos, tíos y sobrinos) y los integrantes del hogar de cada una de esas personas no son elegibles. El sorteo está sujeto a todas las leyes y regulaciones federales, estatales y locales aplicables, y es nulo fuera de Puerto Rico.
          </p>

          <p className={styles.text}>
            2)  Patrocinador: KraftHeinz Company, 9615 Los Romeros Ave. Suite 514 San Juan, PR 00926; (787) 781-2070. Administrador: RosadoToledo&, LLC, 207 Calle del Parque Ste 10 San Juan, PR 00912.; (787) 314-5350.
          </p>


          <p className={styles.text}>
            3) Acuerdo con las Reglas oficiales: Al participar en el Sorteo, la persona participante acepta completa e incondicionalmente estas reglas oficiales y las decisiones del Patrocinador y Administrador, que son finales y vinculantes en todos los asuntos relacionados con el Sorteo.
          </p>


          <p className={styles.text}>
            4) Período de la promoción: La promoción comienza a las 12:00 a.m. hora estándar de Puerto Rico, el 27 de mayo de 2025 y finaliza con el sorteo de premios el 31 de julio de 2025 (el "Período de Promoción"). La computadora del Administrador es el dispositivo oficial para la medición del tiempo de este sorteo.
          </p>


          <p className={styles.text}>
            5)  Cómo participar: Hay dos (2) formas de participar:
            1. Primer metodo de participación - Realizando una compra cualificada: Durante el período de la promoción, visite uno de los siguientes Supermercados en Puerto Rico: Amigo, Comercios CC, Econo, FamCoop, Hatillo KK, Mr. Special, Napo Vélez, Plaza Loíza, Plaza Somos, Pueblo, Ralph’s, Selectos, Supermax, Walmart (los "supermercados participantes") y compre cualquier combinación de uno (1) o dos (2) productos participantes de las siguientes marcas: Ore-Ida, Kraft Salsa BBQ, Kraft Salad Dressing, Kraft Mayo, Philadelphia, Delimex, Capri Sun y Productos Oscar Mayer (No incluye Lunchables), en una sola transacción (cada una se considerará una "Compra Cualificada"). Tome una foto de su recibo completo. La foto del recibo debe ser clara y legible, incluir la fecha de compra y mostrar la evidencia de la Compra Cualificada en el Supermercado participante, el precio y el monto total gastado en el recibo. Luego, visite sabeakraftheinz.com y siga los enlaces e instrucciones para completar y enviar el formulario de inscripción en el sorteo, con su nombre y apellido, dirección de correo electrónico válido, número de teléfono, municipio donde reside, fecha de compra y rango de edad. Luego, siga las instrucciones para cargar la foto de su recibo completo en el portal. Una vez que haya completado con éxito su participación y se haya recibido la imagen de su recibo, ello constituirá una (1) participación válida en el sorteo. Tenga en cuenta que cada recibo solo se puede cargar una vez. Puede participar cuantas veces quiera siempre y cuando lo haga en participaciones separadas e individuales. Si un recibo incluye más de una (1) compra cualificada, solo podrá cargarlo una vez y, por lo tanto, solo equivaldrá a una (1) participación en el sorteo. Solo habrá un premio por persona y por familia, entendiéndose aquellas personas vinculadas por enlace consanguíneo o afinidad. Las participaciones por vía electrónica con compra pueden participar hasta el 31 de julio de 2025.
            <br />
            2.Segundo método para participar – Puntos de venta: Visite los puntos de ventas participantes y acérquese al ”booth” de la promoción luego de hacer su compra.  Debe mostrar su recibo para poder completar y enviar el formulario de inscripción, con su nombre y apellido, dirección de correo electrónico válido, número de teléfono, municipio donde reside, fecha de compra y rango de edad. Las participaciones ganadoras serán seleccionadas mediante una tómbola, ante notario público, y al azar para saber cual es el premio que recibirá el participante

            Método de participación sin nada que comprar: Durante el período de la promoción, para participar sin realizar una compra, proporcione la siguiente información dentro de un sobre: (i) Escribiendo a mano en una hoja de papel, su nombre completo, dirección física y postal, número de teléfono, dirección de correo electrónico válida y fecha de nacimiento; y (ii) dos (2) dibujos originales hechos a mano (en blanco y negro o en color) de dos (2) productos diferentes de las marcas participantes, entiendase: Ore-Ida, Kraft Salsa BBQ, , Kraft Salad Dressing, Kraft Mayo, Philadelphia, Delimex, Capri Sun y Productos Oscar Mayer (No incluye Lunchables). No se aceptarán copias de facímiles de las participaciones. Envíe su participación por correo en un sobre con el franqueo correspondiente a "Sorteo Sabe A KraftHeinz con KraftHeinz" – participación gratuita, c/o RosadoToledo&, LLC, 207 Calle del Parque Ste 10 San Juan, PR 00912. Solo una participación diaria. Si la participación por correo cumple con todos los requisitos, ello constituirá una participación para el sorteo. Límite: una (1) participación por sobre sellado. Todas las participaciones por correo deben estar escritas a mano y deben tener sello postal en o antes del 17 de julio de 2025 y recibirse en o antes del 30 de julio de 2025 para poder ser consideradas como participaciones elegibles. Todas las participaciones por correo se convierten en propiedad exclusiva del Patrocinador y ninguna será desglosada o devuelta. El Patrocinador no es responsable de las participaciones por correo perdidas, tardías, incompletas, inválidas, ininteligibles, ilegibles, mal dirigidas o con franqueo vencido, las que serán descalificadas. Las participaciones recibidas por este método serán incluidas en el banco electrónico con igual posibilidad de ser seleccionadas como ganadoras al azar, ante notario público.

            Límite: Una (1) participación por persona por día durante el período de la promoción, mediante el método de participación sin compra. No se permite que varios participantes compartan la misma dirección de correo electrónico. Cualquier intento por parte de cualquier participante de obtener más participaciones de las que se especifique mediante el uso de múltiples o diferentes direcciones de correo electrónico, identidades, registros o inicios de sesión, o cualquier otro método, anulará las participaciones de ese participante y ese participante podrá ser descalificado del sorteo. Cualquier uso de métodos o agentes de participación robóticos, repetitivos, automáticos, programados o similares (incluidos, entre otros, los servicios de inscripción en sorteos) anulará todas las participaciones de ese participante. En el caso de una disputa sobre cualquier participación digital, el titular de la cuenta autorizada de la dirección de correo electrónico utilizada para participar se considerará el participante. El "titular autorizado de la cuenta" es la persona física a la que se le asigna una dirección de correo electrónico por parte de un proveedor de acceso a Internet, un proveedor de servicios en línea u otra organización responsable de asignar direcciones de correo electrónico para el dominio asociado con la dirección presentada. Es posible que se requiera que los ganadores potenciales muestren pruebas de ser los titulares de cuentas autorizadas. Un solo premio por persona.

          </p>


          <p className={styles.text}>
            6) Sorteos: Las determinaciones del Administrador en relación con este concurso son definitivas y vinculantes. <br />
            Los sorteos serán en las oficinas del Bufete Colón Santana & Román, en las siguientes fechas: <br />
            1. Miércoles 11 de junio <br />
            2. Miércoles 18 de junio <br />
            3. Miércoles 25 de junio <br />
            4. Miércoles 2 de julio <br />
            5. Miércoles 9 de julio <br />
            6. Miércoles 16 de julio <br />
            7. Miércoles 23 de julio <br />
            8. Miércoles 30 de julio    </p>


          <p className={styles.text}>
            7) Selección de Ganadores: El Administrador seleccionará el nombre de la posible persona ganadora en un sorteo al azar entre todas las participaciones elegibles. Las probabilidades de ganar un premio dependen de la cantidad de participaciones elegibles recibidas durante el período de la promoción. El mismo día del sorteo se seleccionarán las personas ganadoras alternas para el caso de que la persona previamente seleccionada no acepte o no cualifique para el premio. Serán convocadas al premio en el mismo orden en el que sean seleccionadas o descalificadas hasta que se adjudique el premio. Los términos para recibir y reclamar el premio de las personas ganadoras aplicarán a las ganadoras alternas..
            Las posibles personas ganadoras serán notificada por el teléfono indicado en su participación, o por correo electrónico si no se logra contacto por teléfono (luego de 3 intentos en 24 horas). Se hará el intento de contactar al posible ganador hasta 7 días calendarios luego del sorteo. De no lograr respuesta, se procederá con el ganador alterno.
          </p>


          <p className={styles.text}>
            8) Los Premios del Sorteo son los siguientes:
            Primer método a través de página web y/o método de participación sin nada que comprar - Ocho (8) Premios semanales de cien dólares ($100) (Total: $800)
            Segundo método Disponible en Puntos de Ventas Participantes - Premios instantáneos de cuarenta (40) Vanilla Gift Cards valoradas en cincuenta dólares ($50) y artículos promocionales de Kraft Heinz que incluyen: French fries cups, Delantales, Basting brush, Bocinas, Toallas de playa, BBQ sets, Cooler bags, Neveras de playa, BBQ portátiles, Spread knife, mochilas pequeñas y Board w/ dip cups.    </p>


          <p className={styles.text}>
            9) Requisitos de las posibles personas ganadoras: El ganador potencial debe cumplir con las reglas oficiales. El ganar depende del azar y del cumplimiento de la persona participante con todos los requisitos de estas reglas. El ganador potencial debe firmar y entregar al Administrador, a no más tardar 5 días laborales luego de haber sido notificado, una Declaración de Cumplimiento, Responsabilidad y relevo/consentimiento de publicidad. Si una persona ganadora potencial del premio no proporciona una Declaración de cumplimiento, Responsabilidad y Relevo de publicidad, o cualquier otra información solicitada (según corresponda), él / ella puede ser descalificado y perder el premio. En el caso de que no se pueda contactar a un ganador potencial, pierda el premio o sea descalificado por algún motivo, el Administrador seleccionará un ganador potencial alterno en un sorteo al azar de entre todas las entradas elegibles restantes, hasta 4 ganadores alternos. Si los posibles ganadores alternativos son descalificados, se seleccionarán ganadores alternos adicionales hasta entregar el premio anunciado. El Administrador le indicará al ganador la fecha y hora para recibir personalmente el premio en el lugar que el Administrador indique. El ganador debe estar disponible para recibir el premio no más tardar de 30 días de aceptar formalmente los términos y firmar los relevos de responsabilidad, de lo contrario, el premio será adjudicado a una persona ganadora alterna.
          </p>


          <p className={styles.text}>
            10) Publicidad: Para reclamar su premio, la persona participante se obliga a suscribir un relevo de publicidad para que el Patrocinador y sus designados utilicen el nombre, imagen, voz, e información del premio, ciudad y país de residencia del participante con fines promocionales en cualquier medio publicitario y redes sociales sin compensación alguna.
          </p>


          <p className={styles.text}>
            11) Condiciones generales: En el caso de que la operación, la seguridad o la administración del Sorteo se vean afectadas por cualquier motivo, incluyendo, pero sin limitarse a, fraude, virus u otro problema técnico, el Patrocinador puede, en ese caso a su entera discreción, y la autorización del DACO, cuando ello sea requerido, ya sea: (a) suspender la promoción, cancelar el Sorteo para mitigar el daño y luego reanudar el sorteo de la manera que mejor se ajuste al espíritu de estas reglas oficiales requiriendo el endoso de las autoridades correspondientes; o (b) cancelar el sorteo y otorgar los premios en un sorteo al azar de entre todas las participaciones elegibles recibidas hasta el momento del incidente. El Patrocinador se reserva el derecho, a su sola discreción, de descalificar a cualquier persona que encuentre que esté manipulando el proceso de inscripción o la operación del sorteo o que actúe en violación de las reglas oficiales de esta o de cualquier otra promoción, o de manera antideportiva o de manera que pueda comprometer la legitimidad y efectividad de la promoción y el certamen. Cualquier intento por parte de cualquier persona de socavar el funcionamiento legítimo del sorteo puede constituir una violación de las leyes penales y civiles, por lo que el Patrocinador se reserva el derecho de referir la persona a las autoridades y reclamar daños y perjuicios a dicha persona en la medida permitida por ley. El hecho de que el Patrocinador no haga cumplir cualquiera de los términos de estas reglas oficiales no constituirá una renuncia a los mismos.
          </p>


          <p className={styles.text}>

            12) Relevo y limitaciones de responsabilidad: Al participar en el sorteo, los participantes aceptan relevar y mantener exentos de responsabilidad a The KraftHeinz Company, distribuidores de KraftHeinz, RosadoToledo&, y sus respectivas compañías matrices, subsidiarias, afiliados, socios promocionales, socios de premios, agentes y agencias, y los funcionarios, directores y empleados de ellos (las “Partes Relevadas”) desde y contra cualquier reclamo o causa de acción que surja de la participación en el Sorteo o recibo o uso de cualquier premio, que incluyen, entre otros: (a) intervención humana no autorizada en el Sorteo; (b) errores técnicos relacionados con computadoras, servidores, proveedores, impresoras o líneas telefónicas o de red; (c) errores de impresión; (d) errores en la administración del sorteo o en el procesamiento de las inscripciones; (e) correo atrasado, perdido o no entregable; o (f) lesiones o daños a personas o bienes que pueden ser causados, directa o indirectamente, en su totalidad o en parte, por la participación del participante en el Sorteo o por recibir cualquier premio. La persona participante acuerda además que, en cualquier causa de acción, la responsabilidad de las Partes Relevadas se limitará al costo de participar y participar en el Sorteo y, en ningún caso, las Partes Relevadas serán responsables de los honorarios de los abogados. la persona participante renuncia al derecho a reclamar cualquier daño, incluidos, entre otros, daños punitivos, emergentes, directos o indirectos. Si, por cualquier motivo, se confirma que la participación de un participante se ha eliminado, perdido o destruido o dañado de forma errónea, la única solución del participante es otra participación al Sorteo, si es posible. Si el Sorteo, o cualquier parte de él, se suspende por cualquier motivo, el Patrocinador, a su entera discreción, puede optar por realizar un sorteo al azar entre todas las participaciones elegibles recibidas hasta la fecha de discontinuación de cualquier premio ofrecido en este documento. No se otorgarán más premios que los indicados. En el caso de que la producción, los datos técnicos, la programación o cualquier otro motivo causen más que la cantidad de premios establecida según lo establecido en este documento, estén disponibles y/o se reclamen, el Patrocinador se reserva el derecho de otorgar solo la cantidad de premios establecida, de forma aleatoria, entre todos los reclamantes de premios elegibles, legítimos, no reclamados ni adjudicados.
          </p>


          <p className={styles.text}>

            13) Disputas: la persona participante acepta que: (a) todas las controversias, reclamaciones y causas de acción que surjan de o estén relacionadas con este sorteo o cualquier premio otorgado se resolverán individualmente, sin recurrir a ninguna forma de acción colectiva o de clase, y exclusivamente por el Tribunal de Primera Instancia del Estado Libre Asociado de Puerto Rico, Sala de San Juan; y (b) todos y cada uno de los reclamos, juicios y adjudicaciones se limitarán a los costos del premio realmente incurridos, pero en ningún caso se incluirán honorarios de abogados. Todas las inquietudes y preguntas relacionadas con la redacción, validez, interpretación y exigibilidad de estas reglas oficiales, o los derechos y obligaciones del participante y el Patrocinador en relación con el sorteo, se regirán e interpretarán de acuerdo con las leyes del Estado Libre Asociado de Puerto Rico, sin dar margen la aplicación de la ley de otra jurisdicción, o conflicto de leyes (ya sea del Estado Libre Asociado de Puerto Rico o de cualquier otra jurisdicción), que pueda ocasionar la aplicación de las leyes de cualquier jurisdicción que no sea el Estado Libre Asociado de Puerto Rico. Las reglas del certamen serán publicadas en www.sabeakraftheinz.com.
          </p>


          <p className={styles.text}>

            14) Términos adicionales: En caso de que exista controversia sobre la identidad de cualquier participante, las participaciones se entenderán sometidas por el dueño autorizado de la cuenta de correo electrónico, suministrada al momento de participación. El dueño autorizado de la cuenta se considera la persona natural a quien se le asignó esa dirección de correo electrónico, por un proveedor de acceso al Internet, proveedor de servicio u otra organización en línea que sea responsable de la asignación de direcciones de correo electrónico para el dominio asociado con el correo electrónico suministrado. Se le puede requerir a un ganador que suministre al Promotor, Rosado Toledo&, que el ganador es el dueño autorizado de la cuenta de correo electrónico asociada con la participación ganadora. El Promotor no es responsable por avería técnica alguna de cualquier red, servidor, equipo de computadora, teléfono inteligente, aplicación, programa o falta del Promotor de recibir participación alguna debido a problemas técnicos o de congestión de tráfico en el Internet o en cualquier sitio web o aplicación. El Promotor y sus agentes no son responsables de errores de impresión, distribución o producción en los materiales del Sorteo. En ningún caso se otorgarán más del número de premios anunciados. Está prohibido publicar vocabulario obsceno, palabras soeces o inapropiadas, o cualquier otro comentario que viole las reglas. Esta conducta es causa suficiente para la descalificación del participante.
          </p>


          <p className={styles.text}>

            15) Información personal del participante: La información recopilada de los participantes está sujeta a la política de privacidad del Patrocinador y la política de privacidad del Administrador. Para obtener una copia de la Política de privacidad del Administrador, envíe una carta con un sobre pre-dirigido y pre-sellado a RosadoToledo&, LLC, 207 Calle del Parque Ste 10 San Juan, PR 00912.

          </p>


          <p className={styles.text}>

            Reglas Abreviadas
            *Sorteo termina el 31 de julio de 2025. Puede participar toda persona mayor de edad residente legal de PR. No es necesario comprar para participar y ganar. Promotor: Kraft Foods Group Puerto Rico, LLC. Reglas o­ficiales en sabeakraftheinz.com
          </p>

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

  );
};

export default TyC;