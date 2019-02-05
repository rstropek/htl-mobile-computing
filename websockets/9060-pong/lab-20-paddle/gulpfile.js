const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

const tsProject = ts.createProject('tsconfig.json');

function web() {
    return gulp.src(['src/**/*.html', 'src/**/*.css'])
        .pipe(gulp.dest('dist'));
};

function hammer() {
    return gulp.src('node_modules/hammerjs/hammer.js')
        .pipe(gulp.dest('dist/client'));
};

function script() {
    return gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
};

function watchSource() {
    return gulp.watch(['src/**/*.html', 'src/**/*.css', 'src/**/*.ts'], gulp.series(web, script, hammer));
}

exports.default = gulp.series(web, script, hammer);
exports.watch = watchSource;
