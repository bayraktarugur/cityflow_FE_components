'use client'
import React from "react";
import { Link } from '@/i18n/routing';
import { useConfig } from "@/hooks/use-config";
import { useMenuHoverConfig } from "@/hooks/use-menu-hover";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from 'next/image';

const Logo = () => {
    const [config] = useConfig()
    const [hoverConfig] = useMenuHoverConfig();
    const { hovered } = hoverConfig
    const isDesktop = useMediaQuery('(min-width: 1280px)');

    if (config.sidebar === 'compact') {
        return <Link href="/dashboard/analytics" className="flex items-center justify-center">
            <Image
                src="/images/logo/logoendian.png"
                alt="Logo Endian"
                width={300}
                height={300}
                className="w-36"
            />
        </Link>
    }
    if (config.sidebar === 'two-column' || !isDesktop) return null

    return (
        <Link href="/dashboard/analytics" className="flex items-center">
            <Image
                src="/images/logo/logoendian.png"
                alt="Logo Endian"
                width={300}
                height={300}
                className="w-36"
            />
        </Link>
    );
};

export default Logo;
