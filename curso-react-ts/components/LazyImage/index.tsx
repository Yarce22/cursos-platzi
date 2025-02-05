// import type {FunctionComponent, FC } from 'react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

type LazyImageProps = {
  src: string,
  width: number,
  height: number,
  onLazyLoad?: (node: HTMLImageElement | null) => void
}

type ImageNative = ImgHTMLAttributes<HTMLImageElement>

type Props = LazyImageProps & ImageNative

const LazyImage = ({ src, onLazyLoad, ...imgProps }: Props): React.JSX.Element => {
  const node = useRef<HTMLImageElement>(null)
  const [image, setImage] = useState<string>('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setImage(src)
        }
      })
    })

    if (node.current) {
      if (onLazyLoad) {
        onLazyLoad(node.current);
      }
      observer.observe(node.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [src, onLazyLoad])

  return (
    <Image
      ref={node}
      src={image}
      alt="fox-image"
      {...imgProps}
    />
  )
}

export { LazyImage }

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