'use client'
import Image from 'next/image';
import { useTheme } from "next-themes";

const Logo = () => {
    const { theme: mode } = useTheme();
  return (
    <div>
      <Image
        src="/images/logo/logoendian.png"
        alt="Logo Endian"
        width={300}
        height={300}
        className="w-36"
      />
    </div>
  );
}

export default Logo;