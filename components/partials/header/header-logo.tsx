'use client'
import React from 'react'
import { Link } from '@/components/navigation'
import Image from 'next/image'
import { useConfig } from '@/hooks/use-config'
import { useMediaQuery } from '@/hooks/use-media-query'

const HeaderLogo = () => {
    const [config] = useConfig();
    const isDesktop = useMediaQuery('(min-width: 1280px)');

    return (
        config.layout === 'horizontal' ? (
            <Link href="/dashboard/analytics" className="flex items-center">
                <Image
                    src="/images/logo/logoendian.png"
                    alt="Logo Endian"
                    width={300}
                    height={300}
                    className="w-36"
                />
            </Link>
        ) :
            !isDesktop && (
                <Link href="/dashboard/analytics" className="flex items-center">
                    <Image
                        src="/images/logo/logoendian.png"
                        alt="Logo Endian"
                        width={300}
                        height={300}
                        className="w-36"
                    />
                </Link>
            )
    )
}

export default HeaderLogo;