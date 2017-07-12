const gulp = require('gulp');
const del = require('del');

gulp.task('clean', () => {
  return del(['dist/**']);
});

gulp.task('copy-reveal', ['clean'], () => {
  gulp.src('node_modules/reveal.js/css/**/*.css')
    .pipe(gulp.dest('dist/css'));
  gulp.src('node_modules/reveal.js/js/**/*.js')
    .pipe(gulp.dest('dist/js'));
  gulp.src('node_modules/reveal.js/lib/**/*')
    .pipe(gulp.dest('dist/lib'));
  gulp.src('node_modules/reveal.js/plugin/**/*')
    .pipe(gulp.dest('dist/plugin'));
});

gulp.task('copy-presentation', ['clean'], () => {
  gulp.src('*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy-presentation', 'copy-reveal']);
