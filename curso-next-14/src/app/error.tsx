'use client';
import Image from "next/image";
import styles from "app/sass/global-error.module.sass";

export default function GlobalError({ error, reset }: ErrorProps) {
  console.error(error);

  return (
    <main className={styles.Error}>
      <h1 className="style.Error__title">¡Ups! Un error inesperado ocurrió.</h1>
      <Image 
        src="/images/error.png"
        alt="Error inesperado"
        width={500}
        height={500}
      />
      <p className="styles.Error__message">Al parecer ha ocurrido un error, pero no te sientas</p>
      <button className="styles.Error__button" onClick={() => reset()}>Intentar nuevamente</button>
    </main>
  );
}