/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.pstatic.net",
        port: "",
        pathname: "/static/**",
      },
      {
        protocol: "https",
        hostname: "tanstack.com",
        port: "",
        pathname: "/build/**",
      },
      {
        protocol: "https",
        hostname: "storybook.js.org",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "codeit-frontend.codeit.com",
        port: "",
        pathname: "/static/**",
      },
      {
        protocol: "https",
        hostname: "assets.vercel.com",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "reactjs.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jasonwatmore.com",
        port: "",
        pathname: "/_content/**",
      },
      {
        protocol: "https",
        hostname: "codeit.kr",
        port: "",
        pathname: "/static/**",
      },
      {
        protocol: "https",
        hostname: "testing-library.com",
        port: "",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "static.cdninstagram.com",
        port: "",
        pathname: "/rsrc.php/**",
      },
      {
        protocol: "https",
        hostname: "codeit-images.codeit.com",
        port: "",
        pathname: "/badges/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
        port: "",
        pathname: "/ipfs/**",
      },
      {
        protocol: "https",
        hostname: "ca.slack-edge.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "spring.io",
        port: "",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "www.rust-lang.org",
        port: "",
        pathname: "/static/**",
      },
      {
        protocol: "https",
        hostname: "react.dev",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "resources.jetbrains.com",
        port: "",
        pathname: "/storage/**",
      },
      {
        protocol: "http",
        hostname: "www.coffeebeankorea.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "akamai.pizzahut.co.kr",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "http",
        hostname: "www.istarbucks.co.kr",
        port: "",
        pathname: "/common/**",
      },
      {
        protocol: "https",
        hostname: "www.baskinrobbins.co.kr",
        port: "",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "cdn.goob-ne.com",
        port: "",
        pathname: "/goobne/**",
      },
    ],
  },
};

module.exports = nextConfig;
