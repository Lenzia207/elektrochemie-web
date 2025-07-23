import createNextIntlPlugin from "next-intl/plugin";
import { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  //   output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = withNextIntl(nextConfig);
