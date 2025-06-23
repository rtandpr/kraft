import React, { useState } from "react";
import styles from "./textArea.module.css";

const Textarea = ({ type, placeholder, iconoIzq, iconoDer, handleChange, borderErr, msjErr,minHeigth }) => {
    const [showPassword, setShowPassword] = useState(false);

    // Solo aplicar el toggle si el tipo original es password
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;


    const handleTogglePassword = () => {
        console.log("se ejecuta", inputType);

        if (isPassword) setShowPassword(prev => !prev);
    };

    return (
        <div className={styles.content} >
            <div className={styles.contentInput}>
                <label className={styles.label}>
                    
                    {placeholder}
                </label>

                <textarea

                    type={inputType}
                    id={type}
                    name={type}
                    className={styles.inputField}
                    onChange={handleChange}
                    // style={{ border: borderErr ? "2px solid red" : "1px solid white" }}
                     style={{  minHeight:minHeigth ? minHeigth  : "" }}
                />

                {borderErr && <p className={styles.Perr}>{msjErr}</p>}
            </div>
        </div>
    );
};

export default Textarea;
