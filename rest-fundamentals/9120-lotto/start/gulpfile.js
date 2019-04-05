const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

function web() {
    return gulp.src(['src/**/*.html', 'src/**/*.css'])
        .pipe(gulp.dest('dist'));
};

function script() {
    return gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
};

exports.default = gulp.series(web, script);
