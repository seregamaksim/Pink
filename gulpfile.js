const { src, dest, parallel, watch, series } = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const minify = require("gulp-csso");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();


function browser() {
    browserSync.init({
        server: {
            baseDir: "src"
        },
        notify: false,
    })
}

function css() {
    return src("src/sass/**/*.scss")
    .pipe(plumber({
        errorHandler: function (err) {
            console.log(err);
            this.emit("end");
        }
    }))
    .pipe(sass())
    .pipe(postcss([
        autoprefixer("last 2 version")
    ]))
    .pipe(dest("src/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(dest("src/css"))
    .pipe(browserSync.stream());
}


function watchFiles() {
    watch("src/sass/**/*.scss", css);
    watch("src/*.html").on("change", browserSync.reload);
}

exports.css = css;
exports.default = series(
    series(css), 
    parallel(browser, watchFiles)
);