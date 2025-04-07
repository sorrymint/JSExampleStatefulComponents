# Next.js Image Gallery

Fork and clone down this repo. Then run `npm install` to get all necessary packages. 

## Packages

This project uses third party packages from [shadcn](https://ui.shadcn.com/).

```bash
npx shadcn@latest add slider
npx shadcn@latest add card

```

## Add Outside Resources

Project makes use of images stored on Wikipedia so we need to add it as an resources. Make a `next.config.js` file in root and add the following content.

```js
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                port: "",
                pathname: "/**",
                search: "",
            },
        ],
    },
};
```
