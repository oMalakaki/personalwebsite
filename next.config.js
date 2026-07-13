/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.node/,
            use: 'raw-loader',
        });

        // react-pdf/pdf.js optionally uses the Node-only canvas package.
        // The resume viewer runs in the browser, so exclude that optional module.
        config.resolve.fallback = {
            ...config.resolve.fallback,
            canvas: false,
        };

        return config;
    },
};
