// import type {FunctionComponent, FC } from 'react'
import Image from 'next/image'

type Props = {src: string}

const RandomFox = ({ src }: Props): React.JSX.Element => {

  return (
    <Image
      src={src}
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