import Link from 'next/link';
import Image from 'next/image';

type Props = {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
};

export function Logo({ width = 200, height = 45 }: Props) {
  return (
    <Link href='/'>
      <Image
        src='/images/blackwell-global-logo-69b3f245a509a.webp'
        alt='Blackwell Global logo'
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}
