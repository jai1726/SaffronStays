/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|avi)$/, // Match video file extensions
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]', // Name pattern for processed files
            outputPath: 'static/media/', // Folder for output
            publicPath: '/_next/static/media/', // Public URL path for served files
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;