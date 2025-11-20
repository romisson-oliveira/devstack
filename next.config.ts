import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        domains: [
            "source.unsplash.com",
            "images.unsplash.com",
            "picsum.photos",
        ],
    },
}

export default nextConfig
