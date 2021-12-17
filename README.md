## Flight Indicators JS Sample (FIJS Sample)

This basic implementation shows how to use [FIJS][2] with `npm` and [webpack][1].

[ ![NPM Status](https://img.shields.io/npm/v/flight-indicators-js.svg?style=flat) ][2]

### Installation

- Create a new module using `npm`:

```console
npm init
```

- Add `webpack` and plugins:

```console
npm i webpack webpack-cli --save-dev
npm i webpack-dev-server --save-dev
npm i css-loader --save-dev
npm i copy-webpack-plugin --save-dev
```

- Create directories `src`, `img` and `css`:

```console
mkdir src
mkdir css
mkdir img
```
- Copy `package.json` and `webpack.config.js` files from this repository into your project directory.

- In the `src` directory copy `index.html` and `index.js`

- Install `FIJS`:
```console
npm i flight-indicators-js@latest
```

- Copy the `svg` images form the library into the `img` directory

```sh
cp -v node_modules/flight-indicators-js/img/*.svg ./img
```

- Copy the `flight-indicators.css` file form the library into the `css` directory

```sh
cp -v node_modules/flight-indicators-js/css/flight-indicators.css ./css
```

- Your directory must look like:
```console
project/
|-css/
    |-flight-indicators.css
    |-style.css
|-img/
    |-*.svg
|-src/
    |-index.js
    |-index.html
|-package.json
|-webpack.config.js
```

- Finally, start the dev server:
```console
npm run start

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
...
webpack 5.65.0 compiled successfully in 847 ms
```

- Then open `http://localhost:8080/` in your browser.

### Author

Teocci (teocci@yandex.com)

### License

The code supplied here is covered under the MIT Open Source License.

### Credits

Flight Indicators JS svg images was developed based on [Flight Indicators jQuery plugin][4].


[1]: https://webpack.js.org
[2]: https://www.npmjs.com/package/flight-indicators-js
[3]: https://github.com/teocci/js-module-flight-indicators/blob/main/assets/fijs-sample.png?raw=true
[4]: http://sebmatton.github.io