import React from "react";
import styles from "./Logos.module.css";
// import logoFb from '../../assets/facebook.png';

import logoFb from '../../assets2/rrss.png';

const LogosRedes = () => {

    return (
        <div className={styles.social}>
          <div className={styles.socialIcons}>
            <span>Síguenos en redes</span>

            <div className={styles.contentIcons}>
              <a href="https://www.facebook.com/7UPPR" target="_blank" rel="noopener noreferrer">
                <img src={logoFb} alt="Facebook" />
              </a>
              {/* <a href="https://www.facebook.com/7UPPR" target="_blank" rel="noopener noreferrer">
                <img src={logoFb} alt="Facebook" />
              </a>
              <a href="https://www.facebook.com/7UPPR" target="_blank" rel="noopener noreferrer">
                <img src={logoFb} alt="Facebook" />
              </a> */}
            </div>
            
          </div>



        </div>
    )
}


export default LogosRedes;