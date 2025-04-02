'use client'
import React from "react";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useMounted } from "@/hooks/use-mounted";

const Loader = () => {
    const mounted = useMounted()
    return (
        mounted ? null : <div className="h-screen flex items-center justify-center flex-col space-y-2">
            <div className="flex items-center">
                <Image
                    src="/images/logo/icon.gif"
                    alt="Logo Endian"
                    width={32}
                    height={32}
                    className="h-8 w-8 animate-spin"
                />
            </div>
            <span className="inline-flex gap-1 items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
            </span>
        </div>
    );
};

export default Loader;

