// import type {FunctionComponent, FC } from 'react'
import Image from 'next/image'

const random = (): number => Math.floor(Math.random()*123)+1

const RandomFox = (): React.JSX.Element => {
  const srcImage = `https://randomfox.ca/images/${random()}.jpg`

  return (
    <Image
      src={srcImage}
      alt="fox-image"
      width={400}
      height={400}
    />
  )
}

export { RandomFox }

// export const RandomFoxV2: FunctionComponent = () => {
//   return (
//     <img src="" alt="" />
//   )
// }

// export const RandomFoxV2: FC = () => {
//   return (
//     <img src="" alt="" />
//   )
// }