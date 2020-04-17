![](./timeytim.png)

## TimeyTim Client

## Features

* Linting via [ESLint](http://eslint.org/).
  * Run manually via `npm run lint`.
  * Integrates with Visual Studio Code via [vscode-eslint](https://github.com/Microsoft/vscode-eslint/).
  * Uses [AirBNB ESLint plugin](https://github.com/airbnb/javascript).
  * TypeScript support via [typescript-eslint-parser](https://github.com/eslint/typescript-eslint-parser).
* Formatting via [Prettier](https://github.com/prettier/prettier).
  * Run manually via `npm run format`.
  * Integrates well with Visual Studio Code via [prettier-vscode](https://github.com/prettier/prettier-vscode).
    * Set `"editor.formatOnSave": true` to automatically format files on save.
* `import/export` statements are verified via [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import).

## NPM Script Commands

* `npm run test` -- Runs tests, lint and build.
* `npm run lint` -- Runs ESLint.
* `npm run format` -- Reformats all of the `.ts` and `.tsx` files with Prettier.
* `npm run build` -- Regenerates `lib` folder that gets included into NPM module.

## License

MIT
