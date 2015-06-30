
# gulp-bryn-md-render

## install

```sh
$ npm install gulp-bryn-md-render --save-dev
```


## usage

In your `gulpfile.js`:

```js
var brynMdRender = require('gulp-bryn-md-render')

//...

gulp.src('./src/**/*.md', {basedir: '.'})
    .pipe(brynMdRender())
    .pipe('./build')

//...
```

## license

ISC


## authors/contributors

- [bryn.bellomy@gmail.com](mailto:bryn.bellomy@gmail.com)
