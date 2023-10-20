import Image, { ImageProps } from 'next/image'

export function PromoBanner({ alt, ...rest }: ImageProps) {
  return (
    <Image
      width={0}
      height={0}
      className="mt-[30px] h-auto w-full px-5"
      sizes="100vw"
      alt={alt}
      {...rest}
    />
  )
}
