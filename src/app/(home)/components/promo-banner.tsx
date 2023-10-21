import Image, { ImageProps } from 'next/image'

export function PromoBanner({ alt, ...rest }: ImageProps) {
  return (
    <Image
      width={0}
      height={0}
      className="h-auto w-full px-5"
      sizes="100vw"
      quality={100}
      alt={alt}
      {...rest}
    />
  )
}
