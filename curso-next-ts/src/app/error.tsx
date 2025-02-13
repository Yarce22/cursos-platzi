"use client"

import Image from "next/image";
import styles from "../styles/global-error.module.css";

const GlobalError = ({ reset }: ErrorPageProps) => {
  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
      <Image 
        src="/images/error.png" 
        alt="Error" 
        width={500} 
        height={500}
      />
      <p className={styles.Error__message}>Ocurrió un error</p>
      <button className={styles.Error__button} onClick={reset}>Volver a intentar</button>
    </main>
  );
}

export default GlobalError;