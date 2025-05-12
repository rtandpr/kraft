import React from "react";
import styles from "./Logos.module.css";
import logoFb from '../../assets2/rrss_1.png';
import logoIg from '../../assets2/rrss_2.png';
import logoYt from '../../assets2/rrss_3.png';

// import logoFb from '../../assets2/rrss.png';

const LogosRedes = () => {

  return (
    <div className={styles.social}>
      <div className={styles.socialIcons}>
        <span>Síguenos en redes</span>

        <div className={styles.contentIcons}>
          <a href="https://www.facebook.com/KraftHeinzPR" target="_blank" rel="noopener noreferrer">
            <img src={logoFb} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/kraftheinzpr/" target="_blank" rel="noopener noreferrer">
            <img src={logoIg} alt="Facebook" />
          </a>
          <a href="https://www.youtube.com/@KraftHeinzPR " target="_blank" rel="noopener noreferrer" style={{position: "relative", top: "-3px" }}>
            <img src={logoYt} alt="Facebook" />
          </a>
        </div>

      </div>



    </div>
  )
}


export default LogosRedes;