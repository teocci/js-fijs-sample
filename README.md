## Flight Indicators JS Sample (FIJS Sample)

This basic implementation shows how to use [FIJS][2] with `npm`.

[ ![NPM Status](https://img.shields.io/npm/v/flight-indicators-js.svg?style=flat) ][2]

### Installation

Create a new module using `npm`:

```console
npm init
```

Add `webpack` and plugins:

```console
npm i webpack webpack-cli --save-dev
npm i css-loader --save-dev
npm i copy-webpack-plugin --save-dev
```

Create directories `src`, `img` and `css`:

```console
mkdir src
mkdir css
mkdir img
```
Copy `package`, `webpack.config.js` files from this repository.

Install `FIJS`:
```console
npm i flight-indicators-js@latest
```

In the `src` directory copy `index.html` and `index.js`

Finally, build and open the file `./build/index.html`
```console
npm run build
```

### Author

Teocci (teocci@yandex.com)

### License

The code supplied here is covered under the MIT Open Source License.

### Credits

Flight Indicators JS svg images was developed based on [Flight Indicators jQuery plugin][4].


[1]: https://img.shields.io/npm/v/flight-indicators-js.svg?style=flat
[2]: https://www.npmjs.com/package/flight-indicators-js
[3]: https://github.com/teocci/js-module-flight-indicators/blob/main/assets/fijs-sample.png?raw=true
[4]: http://sebmatton.github.io/