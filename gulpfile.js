// plugin
const gulp = require('gulp')
const ejs = require('gulp-ejs')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

// ejs compile
gulp.task('ejs', () => {
  return gulp.src(['./src/ejs/**/*.ejs', '!./src/ejs/_partial/*.ejs']).
    pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')})).
    pipe(ejs({}, {}, {'ext': '.html'})).
    pipe(gulp.dest('./src/assets'))
})

gulp.task('watch', () => {
  gulp.watch('./src/ejs/**/*.ejs', ['ejs'])
})

gulp.task('default', ['watch'])
