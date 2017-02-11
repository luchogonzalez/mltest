var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('minify-html', function() {
  return gulp.src('index-min.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('.'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/styles-min.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});

gulp.task('minify-js', function() {
  gulp.src('js/script-min.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'))
});

gulp.task('default', ['minify-html', 'minify-js', 'minify-css']);