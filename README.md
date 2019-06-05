# React Edge SSR on Cloudflare Workers

A simple React application, rendered on the edge using server-side rendering. [react-helmet](https://github.com/nfl/react-helmet) included as a sample of some _slightly_ complex SSR behavior that compiles and renders without any issue on [Cloudflare Workers](https://workers.cloudflare.com) 🙌

## How to use

1. [Install Wrangler](https://workers.cloudflare.com/docs/quickstart/cli-setup/)
2. Grab a subdomain: `wrangler subdomain <your_subdomain>`
3. [Fill in your config details](https://workers.cloudflare.com/docs/quickstart/api-keys/) in `wrangler.toml`
4. Deploy using `wrangler publish`
