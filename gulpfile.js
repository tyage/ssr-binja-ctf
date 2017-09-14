const gulp = require('gulp')
const plumber = require('gulp-plumber')
const less = require('gulp-less')
const webpack = require('webpack-stream')
const webpackConfig = require('./webpack.config.js')

gulp.task('js', () => {
  webpackConfig.forEach(config => {
    gulp.src('')
      .pipe(plumber())
      .pipe(webpack(config))
      .on('error', (e) => console.error(e))
      .pipe(gulp.dest('build'))
  })
});

gulp.task('css', () => (
  gulp.src('style/app.less')
    .pipe(plumber())
    .pipe(less())
    .on('error', (e) => console.error(e))
    .pipe(gulp.dest('build'))
));

gulp.task('watch', () => {
  gulp.watch('src/**', ['js']);
  gulp.watch('style/**', ['css']);
});

gulp.task('default', ['js', 'css'], () => {});
