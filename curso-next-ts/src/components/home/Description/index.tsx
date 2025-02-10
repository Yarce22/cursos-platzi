import Image from "next/image"
import style from "./style.module.css"

const Description = () => {
  return ( 
    <section className={style.Description}>
      <div className={style.Description__imageContainer}>
        <Image
          src="/images/description.jpeg"
          alt="products marketplace"
          priority={false}
          fill
        />
      </div>
      <div>
        <h2>Description</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos molestiae omnis corporis. Iusto aliquam nemo fugit beatae? Eos doloremque dignissimos error explicabo, odit possimus reiciendis consequuntur consectetur accusamus magnam eaque.</p>
      </div>
    </section>
  )
}

export default Description