<h1 align='center'>gatsby-plugin-windicss<sup>unofficial</sup></h1>

<p align='center'><a href="https://github.com/windicss/windicss">Windi CSS</a> for Gatsby, it's fast! ⚡️<br>
<sup><em>a.k.a On-demand Tailwind CSS</em></sup>
</p>

<p align='center'>
<a href='https://www.npmjs.com/package/nuxt-windicss'>
<img src='https://img.shields.io/npm/v/nuxt-windicss?color=0EA5E9&label='>
</a>
</p>

<p align='center'>
<a href='https://twitter.com/antfu7/status/1361398324587163648'>⚡️ See speed comparison with Tailwind</a>
</p>

## Features

- ⚡️ **It's FAST** - 20~100x times faster than [tailwindcss](https://tailwindcss.com/)
- 🧩 On-demand CSS utilities (Compatible with Tailwind CSS v2) and native elements style resetting
- 🍃 Load configurations from `tailwind.config.js`
- 📄 CSS `@apply` / `@screen` directives transforms
- 🎳 Support Utility Groups - e.g. `bg-gray-200 hover:(bg-gray-100 text-red-300)`

## Install

```bash
yarn add windicss gatsby-plugin-windicss
# npm i windicss gatsby-plugin-windicss
```

:warning: This module is a pre-release, please report any [issues](https://github.com/blackcater/gatsby-plugin-windicss/issues) you find.

## Usage

Within your `gatsby-config.js` add the following.

```js
// gatsby-config.js
module.exports = {
  // ...
  plugins: [
    {
      resolve: `gatsby-plugin-windicss`,
      options: {
        // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      },
    },
  ],
};
```

This module won't work with `tailwindcss`, you will need to remove it.

```diff
 plugins: [
   {
     resolve: `gatasby-plugin-postcss`,
     options: {
       // ...
-      require("tailwindcss"),
       // ...
     },
   },
 ],
```

If you have a `tailwind.config.js`, please rename it to `windi.config.js` or `windi.config.ts`.

See [here](https://windicss.org/guide/configuration.html) for configuration details.

## Migrating

If you were previously using `tailwindcss`, please consult the [documentation](https://windicss.org/guide/migration.html) on migrating.

## Configuration

- Default:

```js
export default {
  scan: { exclude: ["node_modules/**/*", ".git/**/*"] },
  transformCSS: "pre",
};
```

- See [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts) for configuration reference.

### Examples

#### Disable Preflight

_gatsby-config.js_

```js
// gatsby-config.js
module.exports = {
  // ...
  plugins: [
    {
      resolve: `gatsby-plugin-windicss`,
      options: {
        preflight: false,
      },
    },
  ],
};
```

## Caveats

### Scoped Style

`@media` directive with scoped style can **only work** with `css` `postcss` `scss` but not `sass`, `less` nor `stylus`

## Credits

- Windy team
- [@antfu](https://github.com/antfu) Based on his Rollup / Vite implementation & his util package

## License

MIT License © 2021 [blackcater](https://github.com/blackcater)
