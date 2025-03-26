import Image from 'next/image';
import { PLACEHOLDER_IMAGE } from '../../../../public/images/blurImages/blurImages';
import styles from './Description.module.sass';

export const Description = () => {
  return (
    <section className={styles.Description}>
      <figure className={styles.Description__imageContainer}>
        <Image
          src="/images/description.jpeg"
          alt="products marketplace"
          placeholder='blur'
          blurDataURL={PLACEHOLDER_IMAGE}
          fill
        />
      </figure>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>{"Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us."}</p>
      </div>
    </section>
  )
}