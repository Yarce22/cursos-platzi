// import type {FunctionComponent, FC } from 'react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type Props = {src: string}

const RandomFox = ({ src }: Props): React.JSX.Element => {
  const node = useRef<HTMLImageElement>(null)
  const [image, setImage] = useState('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setImage(src)
        }
      })
    })

    if (node.current) {
      observer.observe(node.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [src])

  return (
    <Image
      ref={node}
      src={image}
      alt="fox-image"
      width={400}
      height={400}
      className='bg-gray-300'
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