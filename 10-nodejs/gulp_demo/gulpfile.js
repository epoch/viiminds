var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var browserify = require('browserify');
var autoprefixer = require('gulp-autoprefixer');

var watchify = require('watchify');
var source = require('vinyl-source-stream');

var b = watchify(browserify('./app.js'));
gulp.task('bundle',function() {
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build'))
    .pipe( connect.reload() );
});

gulp.task('server', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('./*.html')
    .pipe( connect.reload() )
});

gulp.task('sass', function() {
  gulp.src('./*.scss')
    .pipe( sass() )
    .pipe( autoprefixer() )
    .pipe( gulp.dest('css') )
    .pipe( connect.reload() );
});

gulp.task('watch', function() {
  gulp.watch('./*.js', ['bundle']);
  gulp.watch('./*.scss', ['sass']);
  gulp.watch('./*.html', ['html']);
})

gulp.task('default', ['server', 'watch']);
