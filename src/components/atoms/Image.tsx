import NextImage, { ImageProps } from 'next/image';

export default function Image({
  src,
  layout = 'fixed',
  width = 100,
  height = 100,
  ...args
}: ImageProps) {
  return (
    <NextImage
      src={src}
      layout={layout}
      width={width}
      height={height}
      {...args}
    />
  );
}
